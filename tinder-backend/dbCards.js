import mongoose from "mongoose";

const CardShema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

export default mongoose.model("cards", CardShema);
