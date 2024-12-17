const express = require('express');

const routes = express.Router();

const { demoResponse, addUser } = require('../controllers/UserController');

routes.get('/',demoResponse);
routes.post('/adduser',addUser);

module.exports = routes;