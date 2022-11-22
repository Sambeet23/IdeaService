/**
 * This the controller file
 * 
 *    --where the logic resides
 */
const db = require("../models/db") //object

const IdeaSchema = db.idea; //Idea is the complete Idea Schema object

//Create a new idea -- function  

exports.create = (req, res) => {
    const idea = {
        author: req.body.author,
        name: req.body.name,
        description: req.body.description
    }
    //Inserting data
    IdeaSchema.create(idea).then(data => {
        res.status(201).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Internal Error"
        })
    })
}

//Getting all the ideas from the DB
exports.findAll = (req, res) => {
    IdeaSchema.findAll().then(ideas => {
        res.status(200).send(ideas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Internal Error"
        })
    })
}