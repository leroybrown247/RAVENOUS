import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/businesses", async (req, res) => {
  const { term, location, sortBy } = req.query;
  const apiUrl = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sortBy=${sortBy}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: process.env.YELP_API_KEY,
      },
    });

    if (response.ok) {
      const data = await response.json();
      res.json(data);
    } else {
      throw new Error("Error fetching data from Yelp API");
    }
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
