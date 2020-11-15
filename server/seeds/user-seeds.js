const { User } = require('../models');

const userData = [
  {
    username: 'Television',
    email: "To watch or not to watch",
    password: "That is the question"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
