const express = require('express');

const routes = express.Router();

const { viewExsubcategoryPage, addExsubcategoryPage, insertExSubcategory, ajaxgetCategory, changeStatus, deleteExsubcategory, editExsubcategory, updateExsubCategory } = require('../controllers/ExSubCategoryController');

routes.get('/',viewExsubcategoryPage);
routes.get('/addexsubcategorypage',addExsubcategoryPage);
routes.post('/insertexsubcategory',insertExSubcategory);
routes.get('/changestatus',changeStatus);
routes.get('/ajaxGETCategory',ajaxgetCategory);
routes.get('/deleteexsubcategory',deleteExsubcategory);
routes.get('/editexsubcategory',editExsubcategory);
routes.post('/updateexsubcategory',updateExsubCategory);

module.exports = routes;