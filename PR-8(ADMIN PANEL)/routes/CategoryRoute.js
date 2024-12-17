const express = require('express');

const routes = express.Router();

const { addCategoryPage, viewCategoryPage, insertCategory, deleteCategory, editCategory, updateCategory,changeStatus } = require('../controller/CategoryController');

const passport = require('passport');
routes.get('/addcategory',passport.checkUser,addCategoryPage);
routes.get('/viewcategory',passport.checkUser,viewCategoryPage);
routes.post('/insertcategory',passport.checkUser,insertCategory);
routes.get('/deleteCategory',passport.checkUser,deleteCategory);
routes.get('/edit',editCategory);
routes.post('/updateCategory',passport.checkUser,updateCategory);
routes.get('/changestatus',passport.checkUser,changeStatus);

module.exports = routes;