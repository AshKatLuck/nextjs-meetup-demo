//api/new-meetup
//POST //api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://ashaluckinstest1:karthika@cluster0.anyheqi.mongodb.net/meetups"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    console.log(data);
    const results = await meetupsCollection.insertOne(data);
    console.log(results);
    client.close();
    res.status(201).json({ message: "Meetup Inserted" });
  }
}

export default handler;
