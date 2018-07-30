const mongoose = require('mongoose');
const ItemModel = require('./item_model');

mongoose.connect('скопировать из mongolab');

const Item = mongoose.model("Item", Item.ItemModel)

module.exports = {
  Item: Item
}