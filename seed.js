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
    {name: 'Sofa', sortOrder: 20},
    {name: 'Utensils', sortOrder: 30},
    {name: 'Beds', sortOrder: 40},
    {name: 'Bathroom Utilities', sortOrder: 50},
    {name: 'Misc', sortOrder: 60},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Wooden Kitchen Chair', image: 'https://imgur.com/Sja5zih', category: categories[0], price: 5.95},
    {name: 'Modern Sofa', emoji: '🛋️', category: categories[1], price: 25.95},
    {name: 'Dining Set', emoji: '🍽️', category: categories[2], price: 1.95},
    {name: 'Spoon', emoji: '🥄', category: categories[2], price: 1.95},
    {name: 'Fork and Knife Set', emoji: '🍴', category: categories[2], price: 1.95},
    {name: 'Queen Bed', emoji: '🛏️', category: categories[3], price: 3.95},
    {name: 'Broom', emoji: '🧹', category: categories[4], price: 3.95},
    {name: 'Plunger', emoji: '🪠', category: categories[4], price: 3.95},
    {name: 'Trash Can', emoji: '🗑️', category: categories[4], price: 3.95},
  ]);

  console.log(items)
  process.exit();

})();
