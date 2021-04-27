const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title:{ type: String , unique: true, required: true},
  level:{ type: String },
  ingredients:[String],
  cuisine: { type: String , required:true},
  dishType:{ type: String },
  image: { type: String , default: 'https://images.media-allrecipes.com/images/75131.jpg'},
  duration: { type: Number , min: 0 },
  creator: { type: String },
  created: { type: Date , default: "today"};
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
