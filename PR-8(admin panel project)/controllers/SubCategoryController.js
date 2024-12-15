const  CategoryModel = require('../models/CategoryModel');
const SubCategoryModel = require ('../models/SubCategoryModel');

const subCategoryPage = async(req,res)=>{
    try {
        let subcategory = await SubCategoryModel.find({}).populate("categoryId");
       return res.render('view_subcategory',{
        subcategory
       }) 
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addsubCategoryPage = async(req,res)=>{
    try {
        let category = await CategoryModel.find({status:"active"});
        return res.render('add_subcategory',{
            category
        }) 
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertSubcategory = async (req,res) => {
    try {
      const {category,subcategory} = req.body;      
      await SubCategoryModel.create({
        categoryId : category,
        subcategory : subcategory,
      })
      return res.redirect('/subcategory/addsubcategory')
    } catch (error) {
      console.log(error);
      return false;
    }
  } 

  const deletsubCategory = async(req,res)=>{
    try {
        id = req.query.id;
        await SubCategoryModel.findByIdAndDelete(id);
        return res.redirect('/subcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
  }

const editSubcategory = async(req,res)=>{
    try {
        let id = req.query.id;
        let category = await CategoryModel.find({status:"active"});
        let single = await SubCategoryModel.findById(id).populate("categoryId");
        console.log(single);
        return res.render('edit_subcategory',{
            category : category,
            single : single
        });

    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateSubcategory = async(req,res)=>{
    try {
        const {editid,category,subcategory} = req.body;
        await SubCategoryModel.findByIdAndUpdate(editid,{
            categoryId : category,
            subcategory : subcategory
        })
        console.log("subcategory update successfully");
        return res.redirect('/subcategory');
        
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
            await SubCategoryModel.findByIdAndUpdate(id,{
                status : "deactive"
            })
        } else {
            await SubCategoryModel.findByIdAndUpdate(id,{
                status : "active"
            })
            console.log("status successfully change!!");
            return res.redirect('/subcategory');
            
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    subCategoryPage, addsubCategoryPage, insertSubcategory,deletsubCategory, editSubcategory, updateSubcategory, changeStatus
}