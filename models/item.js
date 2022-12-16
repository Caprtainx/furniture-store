const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
require('./category');
const FurnitureSchema = require('./FurnitureSchema');

module.exports = mongoose.model('Item', FurnitureSchema);