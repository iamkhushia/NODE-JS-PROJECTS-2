const express = require('express');

const routes = express.Router();

const {  addexsubcategoryPage, viewexsubcategoryPage,insertExsubcategory,ajaxCategory,deleteExsubcategory,editExsubcategory, changeStatus, updateExsubCategory} = require('../controller/ExsubcategoryController');

const passport = require('passport');

routes.get('/',viewexsubcategoryPage);
routes.get('/addexsubcategorypage',passport.checkUser,addexsubcategoryPage);
routes.post('/insertexsubcategory',passport.checkUser,insertExsubcategory);
routes.get('/ajaxGetcategory',ajaxCategory);
routes.get('/deleteexsubcategory',deleteExsubcategory);
routes.get('/editexsubcategory',passport.checkUser,editExsubcategory);
routes.post('/updateexsubcategory',passport.checkUser,updateExsubCategory);
routes.get('/changestatus',changeStatus);

module.exports = routes;