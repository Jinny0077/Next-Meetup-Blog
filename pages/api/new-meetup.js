import { MongoClient } from "mongodb";

// api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("Received data:", data);
    let client;
    try {
      client = await MongoClient.connect("mongodb+srv://user1:user1@cluster0.5iqd9.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");

      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      console.log("Insertion result:", result);

      res.status(201).json({ message: "Meetup added successfully" });
    } catch (error) {
      console.error("MongoDB connection error:", error);
      res.status(500).json({ message: "Error connecting to the database." });
    } finally {
      if (client) client.close();
    }
  }
}

export default handler;
