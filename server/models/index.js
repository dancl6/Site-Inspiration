const User = require("./User");
const Quotes = require("./Quotes");

User.hasMany(Quotes, {
    foreignKey: 'quotes_id'
})

module.exports = { User, Quotes}