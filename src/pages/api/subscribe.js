import { MongoClient } from "mongodb";
import { emailNewSubscriber } from "./mailer";
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
	try {
		await client.connect();

		console.log("Connected to MongoDB cluster", time);
		console.log(time);
		const data = await request.json();
		const email = data.email.toLowerCase();
		if (!emailRegex.test(email)) {
      payload.message = "Invalid Email"
      return {
        body: JSON.stringify(payload),
      };
		}

		const database = client.db("mailing-list");
		const collection = database.collection("subscribers");
		//check if existing, add, then send email :D
		const existingUser = await collection.findOne({ email });
		if (existingUser) {
			console.log(`This brother ${email} is already in here.`);
      payload.message = "Email already added"
      return {
        body: JSON.stringify(payload),
      };
		}
		const result = await collection.insertOne({ email, time });
		await emailNewSubscriber(email);
		payload.message = "Success"
		console.log(
			`Inserted ${email} document into the subscribers collection`
		);
	} catch (error) {
		console.error("Error connecting to MongoDB cluster", error);
		return {
			body: JSON.stringify(payload),
		};
	} finally {
		await client.close();
		console.log("Closed MongoDB connection");
	}
  return {
    body: JSON.stringify(payload),
  };
}
