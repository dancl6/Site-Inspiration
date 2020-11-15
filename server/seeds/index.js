const seedQuotes = require('./quotes-seeds');
const seedUser = require('./user-seeds');
// const seed_Product_Profit = require('./product_profit-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedQuotes();
  console.log('\n----- PRODUCTS SEEDED -----\n');

//   await seed_Product_Profit();
//   console.log('\n----- PRODUCT PROFIT SEEDED -----\n');

  process.exit(0);
};

seedAll();