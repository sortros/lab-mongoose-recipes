const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title:"",
  level:["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  ingredients:[""],
  cuisine:"",
  

});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
