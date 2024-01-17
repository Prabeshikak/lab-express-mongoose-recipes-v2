const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Created a Schema

const recipeSchema = new Schema({
  title: { type: String, required: true, unique: true },
  instructions: { type: String, required: true },
  level: {
    type: String,
    enum: ["EasyPeasy", "Amateur Chef ", "UltraPro Chef"],
  },
  ingredients: { type: [String] },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: { type: Number, min: 0 },
  isArchived: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
});

//Created a Model

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
