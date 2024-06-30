const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Certicryp:Aditya111$@cluster0.skdud6s.mongodb.net/Certicryp?retryWrites=true&w=majority",
      { useNewUrlParser: true ,  useUnifiedTopology: true }
    );
    console.log("Connected");
    const fetched_data = await mongoose.connection.db.collection("users");
    const data = await fetched_data.find({}).toArray();
    //console.log(data[5]);
  } catch (error) {
    console.log("Not Connected", error);
  }
};
module.exports = mongoDB;
