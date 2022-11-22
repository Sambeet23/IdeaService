/**
 * RESTful APIs = URIs + HTTP Verb
 */

const ideaController = require('../controllers/idea.controller');

module.exports = (app) => {


    //127.0.0.1:8080/ideaService/v1/ideas
    //Route for creation of Idea
    app.post('/ideaService/v1/ideas', ideaController.create)

    //Need to get all ideas
    app.get('/ideaService/v1/ideas/', ideaController.findAll)
}