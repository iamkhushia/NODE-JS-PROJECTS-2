const CategoryModel = require('../models/CategoryModel');

const addCategoryPage = (req,res)=>{
    return res.render('add_category')
}

const viewCategoryPage = async(req,res)=>{
    try {
        let categories = await CategoryModel.find({});
        return res.render('view_category',{categories});
        
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertCategory = async(req,res)=>{
    // console.log(req.body);
    try {
        await CategoryModel.create({
            category_name : req.body.category
        })
        console.log("category successfully create");
        return res.redirect('/category/viewcategory');
    }catch (err) {
        console.log(err);
        return false;
    }
}

const deleteCategory = async (req, res) => {
    try {
        const id = req.query.id;
        await CategoryModel.findByIdAndDelete(id);
        return res.redirect('/category/viewcategory')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editCategory = async(req,res)=>{
    try {
        let id = req.query.id;
        let single = await CategoryModel.findById(id);
        return res.render('edit_category',{
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateCategory = async(req,res)=>{
    try {
        const {editid,category} = req.body;
        await CategoryModel.findByIdAndUpdate(editid,{
            category_name : category
        })
        console.log("category successfully update");
        return res.redirect('/category/viewcategory');
        
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addCategoryPage, viewCategoryPage, insertCategory, deleteCategory, editCategory, updateCategory
}