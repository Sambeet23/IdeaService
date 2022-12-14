/**
 * This file contains the information about the idea model
 * 
 * When we have to create a model, it depends on two things:
 * 
 */

module.exports = (sequelize, Sequelize) => {

    //sequelize is representing db connection
    //Sequelize is representing Sequelize class

    //this function should return idea

    const Idea = sequelize.define("idea", {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        author: {
            type: Sequelize.STRING,
            allownull: false
        },
        name: {
            type: Sequelize.STRING,
            allownull: false
        },
        description: {
            type: Sequelize.STRING,
            allownull: false
        }

    })
    return Idea;
}