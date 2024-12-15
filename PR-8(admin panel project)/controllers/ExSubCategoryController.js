const CategoryModel = require('../models/CategoryModel');
const SubCategoryModel = require('../models/SubCategoryModel');
const ExSubCategoryModel = require('../models/ExSubCategoryModel');

const viewExsubcategoryPage = async(req,res)=>{
    try {
        let exsubcategory = await ExSubCategoryModel.find({}).populate("categoryId").populate("subcategoryId");
        return res.render('view_exsubcategory',{
            exsubcategory
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addExsubcategoryPage = async(req,res)=>{
    try {
        let category = await CategoryModel.find({});
        let subcategory = await SubCategoryModel.find({});
        return res.render('add_exsubcategory',{
            category,
            subcategory
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const changeStatus = async(req,res)=>{
    try {
        let id = req.query.id;
        let st = req.query.status;
        if (st == "active") {
            await ExSubCategoryModel.findByIdAndUpdate(id,{
                status : "deactive"
            })
            console.log("status successfully change!!");
            return res.redirect('/exsubcategory');
        } else {
            await ExSubCategoryModel.findByIdAndUpdate(id,{
                status : "active"
            })
            console.log("status successfully change!!");
            return res.redirect('/exsubcategory');
            
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}


const insertExSubcategory = async(req,res)=>{
    try {
        const {category,subcategory,exsubcategory} = req.body;
        await ExSubCategoryModel.create({
            categoryId : category,
            subcategoryId : subcategory,
            exsubcategory : exsubcategory
        })
        console.log("Exsubcategory add!!..");
        return res.redirect('/exsubcategory');
        
    } catch (err) {
        console.log(err);
        return false;
    }
}

const ajaxgetCategory = async(req,res)=>{
    try {
        let id = req.query.id;
        let category = await SubCategoryModel.find({categoryId : id});
        return res.send({
            success : true,
            message : "record successfully fatch!!..",
            category
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteExsubcategory  = async (req,res) => {
    try {
      let id = req.query.id;
      await ExSubCategoryModel.findByIdAndDelete(id);
      return res.redirect('/exsubcategory')

    } catch (error) {
      console.log(error);
      return false;
    }
}

const editExsubcategory = async (req,res) => {
    try {
        let id = req.query.id;
        const category = await CategoryModel.find({status : 'active'});
        const subcategory = await SubCategoryModel.find({status : 'active'});
        const single = await ExSubCategoryModel.findById(id).populate("categoryId").populate("subcategoryId");
        return res.render('edit_exsubcategory',{
          category:category,
          subcategory:subcategory,
          single:single,
        });
    } catch (error) {
        console.log(error);
        return false;
    }
}

const updateExsubCategory = async (req, res) => {
    try {
        const { editid, category, subcategory , exsubcategory } = req.body;
        await ExSubCategoryModel.findByIdAndUpdate(editid, {
            categoryId: category,
            subcategoryId: subcategory,
            exsubcategory:exsubcategory,
        })
        return res.redirect('/exsubcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
  }

module.exports = {
    viewExsubcategoryPage, addExsubcategoryPage, insertExSubcategory, changeStatus, ajaxgetCategory, deleteExsubcategory, editExsubcategory, updateExsubCategory
}