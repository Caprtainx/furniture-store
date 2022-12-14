require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Chairs', sortOrder: 10},
    {name: 'Living Room Furniture', sortOrder: 20},
    {name: 'Utensils', sortOrder: 30},
    {name: 'Beds', sortOrder: 40},
    {name: 'Bathroom Utilities', sortOrder: 50},
    {name: 'Home Appliances/Electronics', sortOrder: 60},
    {name: 'Misc', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Wooden Kitchen Chair', emoji: '๐ช', category: categories[0], price: 65.89},
    {name: 'Office Chair', emoji: '๐บ', category: categories[0], price: 86.21},
    {name: 'Wheel Chair', emoji: '๐ฆฝ', category: categories[0], price: 147.86},
    {name: 'Modern Sofa', emoji: '๐๏ธ', category: categories[1], price: 1450.99},
    {name: 'Picture Frame', emoji: '๐ผ๏ธ', category: categories[1], price: 15.95},
    {name: 'Dining Set', emoji: 'โ', category: categories[2], price: 4.25},
    {name: 'Spoon', emoji: '๐ฅ', category: categories[2], price: 4.25},
    {name: 'Fork and Knife Set', emoji: '๐ด', category: categories[2], price: 8.45},
    {name: 'Queen Bed', emoji: '๐๏ธ', category: categories[3], price: 439.99},
    {name: 'Broom', emoji: '๐งน', category: categories[4], price: 5.69},
    {name: 'Plunger', emoji: '๐ช ', category: categories[4], price: 3.95},
    {name: 'Television', emoji: '๐บ', category: categories[5], price: 149.35},
    {name: 'Printer', emoji: '๐จ๏ธ', category: categories[5], price: 79.99},
    {name: 'Video Camera', emoji: '๐น', category: categories[5], price: 265.66},
    {name: 'Trash Can', emoji: '๐๏ธ', category: categories[6], price: 15.45},
    {name: 'Clay Pot', emoji: '๐ชด', category: categories[6], price: 3.99},
  ]);

  console.log(items)
  process.exit();

})();
