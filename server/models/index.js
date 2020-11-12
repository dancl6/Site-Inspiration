const User = require("./User");
const Quotes = require("./Quotes");
const User_Quotes = require("./User_Quotes");

User.belongsToMany(Quotes, {
    through: User_Quotes,
    as: 'user-and-quotes',
    foreignKey: 'quotes_id'
})

Quotes.belongsToMany(User, {
    through: User_Quotes,
    as: 'user-and-quotes',
    foreignKey: 'quotes_id'
})


module.exports = { User, Quotes}