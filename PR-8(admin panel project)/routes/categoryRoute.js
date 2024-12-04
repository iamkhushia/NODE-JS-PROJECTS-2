const express = require('express');

const routes = express.Router();

const { addCategoryPage, viewCategoryPage, insertCategory, deleteCategory, editCategory, updateCategory } = require('../controllers/CategoryCantroller');

const passport = require('passport');

routes.get('/addcategory',passport.checkUser,addCategoryPage)
routes.get('/viewcategory',passport.checkUser,viewCategoryPage)
routes.post('/insertcategory',insertCategory)
routes.get('/deletecategory',deleteCategory)
routes.get('/editcategory',editCategory)
routes.post('/updatecategory',updateCategory)


module.exports = routes;