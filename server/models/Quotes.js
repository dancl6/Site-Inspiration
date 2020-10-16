const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quotes extends Model {}

// create data types for Product model
Quotes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quote: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     isDecimal: true
            // }
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     isNumeric: true
            // }
        },
        // image: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     validate: {
        //         isUrl: true
        //     }
        // },
        // featured: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false
        // },
        // category_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'category',
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'quotes'
    }
);

module.exports = Quotes
