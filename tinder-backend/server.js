import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

//app config
const app = express();

const PORT = process.env.PORT || 8080;

const connection_url =
  "mongodb+srv://admin:login@in@cluster0.y9sha.mongodb.net/tinderDB?retryWrites=true&w=majority";

//middlewares
app.use(express.json());
app.use(Cors());

//db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello there");
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  console.log(dbCard);
  Cards.create(dbCard, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listener

app.listen(PORT, () => {
  console.log("Server is running!");
});
