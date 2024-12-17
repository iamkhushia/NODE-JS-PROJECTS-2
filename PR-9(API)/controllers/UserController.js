const UserModel = require('../models/UserModel');

const demoResponse = (req,res)=>{
    return res.status(200).send({
        success : true,
        message : "hello word"
    })
}

const addUser = async(req,res)=>{
    try {
        const {name,email,password,city,phone} = req.body;
        let user = await UserModel.create({
            name : name,
            email : email,
            password : password,
            city : city,
            phone : phone
        })
        return res.status(200).send({
            success : true,
            message : "user successfully create",
            user
        })
    } catch (err) {
        return res.status(501).send({
            success : false,
            err : err
        })
    }
}

module.exports = {
    demoResponse, addUser
}