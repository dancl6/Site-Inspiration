const { Quotes } = require('../models');

const quotesData = [
  {
    author: 'Television',
    quotes: "To watch or not to watch",
    reason: "That is the question"
  }
];

const seedQuotes = () => Quotes.bulkCreate(quotesData);

module.exports = seedQuotes;
