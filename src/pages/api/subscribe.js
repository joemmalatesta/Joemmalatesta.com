import { MongoClient } from 'mongodb';
let mongoUsername = import.meta.env.MONGO_USERNAME
let mongoPassword = import.meta.env.MONGO_USER_PASSWORD
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const time = new Date().toLocaleString();

const uri = `mongodb+srv://${mongoUsername}:${mongoPassword}@mailing-list.utbo0mz.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


export async function post({ request }) {
    try {
      await client.connect();
      
      console.log('Connected to MongoDB cluster', time);
      console.log(time)
      const data = await request.json();
      const email = data.email;
      if (!emailRegex.test(email)) {
        throw new Error('Invalid email');
      }
      
  
      const database = client.db('mailing-list');
      const collection = database.collection('subscribers');
      const result = await collection.insertOne({ email, time });
  
      console.log(`Inserted ${result.insertedCount} document into the subscribers collection`);
  
      const payload = {
        message: "success"
      };
  
      return {
        body: JSON.stringify(payload)
      };
    } catch (error) {
      console.error('Error connecting to MongoDB cluster', error);
  
      const payload = {
        message: "failure"
      };
  
      return {
        body: JSON.stringify(payload)
      };
    } finally {
      await client.close();
      console.log('Closed MongoDB connection');
    }
  }