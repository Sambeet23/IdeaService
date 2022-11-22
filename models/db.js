/**
 * This file contains the logic to connect to the DB
 */

//I need DB configs

const config = require("../configs/db.config");

const Sequelize = require("sequelize"); //Sequelize class
//sequelize -> Connection object created with the help of Sequelize class
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.idea = require("./idea.model")(sequelize, Sequelize);

/**
 * I am exporting multiple attributes
 */
module.exports = db;