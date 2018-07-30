const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const item = new Schema({
  Name: String,
  Price: Number,

})

module.export = {
  ItemModel: Item
}