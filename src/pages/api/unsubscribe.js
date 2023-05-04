import { emailUnsubscriber } from "./mailer";
import { MongoClient } from "mongodb";
let mongoUsername = import.meta.env.MONGO_USERNAME;
let mongoPassword = import.meta.env.MONGO_USER_PASSWORD;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const time = new Date().toLocaleString();

const uri = `mongodb+srv://${mongoUsername}:${mongoPassword}@mailing-list.utbo0mz.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

export async function post({ request }) {
	let payload = {
		message: "",
	};

  //validate input
	const data = await request.json();
	const email = data.email.toLowerCase();
	if (!emailRegex.test(email)) {
    payload.message = "Invalid Email"
    return {
      body: JSON.stringify(payload),
    };
	}

  // Do the actual deleting
  try {
		await client.connect();
		const database = client.db("mailing-list");
		const collection = database.collection("subscribers");
		//add then send email :D
		const existingUser = await collection.findOne({ email });
		if (!existingUser) {
			console.log(`This brother ${email} is not in here.`);
			payload.message = "That email is not subscribed"
      return {
        body: JSON.stringify(payload),
      };
		}
    // Remove them and send them an angry email
		const result = await collection.deleteOne({ email });
    	await emailUnsubscriber(email)
		payload.message = "Successfully removed"
	} catch (error) {
		console.log(error);
    payload.message = "Something went wrong..."
	} finally {
		await client.close();
	}

	return {
		body: JSON.stringify(payload),
	};
}
