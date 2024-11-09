const express = require('express')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const Movie=require('./Models/Movie')
const cors=require('cors')
const app = express()
const port = 3000
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.post("/postmoviedata", async (req, res) => {
    try {
      const newData = new Movie(req.body);
      await newData.save();
      res.status(201).json(newData);
    } catch (err) {
      console.error("Error creating movie data:", err);
      res.status(500).send("Internal Server Error");
    }
  });


  app.get("/getmoviedata", async (req, res) => {
    try {
      const newData = await Movie.find({});
      res.status(200).json(newData);
      console.log(req.body);
    } catch (error) {
      res.send(500);
    }
  });
mongoose.connect('mongodb+srv://dheeraj:Dheeraj9182@1st.m4cub.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




