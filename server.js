const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { connectMongo } = require("./connection");
const User = require("./schema");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const requestBody = req.body; // it takes the all contents of the body //
  const newNotes = new User({
    notes: requestBody.notes,
    author: requestBody.author,
  });
  await newNotes.save();
  console.log(newNotes);
  return res.json(true);
});

app.get("/", async (req, res) => {
  const notesList = await User.find();
  return res.json(notesList);
});

app.listen(8000, () => {
  console.log(`Server started at PORT 8000`);
  connectMongo();
});
