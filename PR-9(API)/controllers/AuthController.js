const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');

const loginUser = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if (!email || !password) {
            return res.status(500).send({
                success : false,
                message : "all field is required"
            })
        }
        let user = await UserModel.findOne({email : email});
        if (!user || user.password !== password) {
            return res.status(500).send({
                success : false,
                message : "email and password are not valid !!"
            })
        }

        let token = await jwt.sign({payload:user},"khushi",{expiresIn:'1hr'});
        return res.status(200).send({
            success : true,
            token : token
        })


    } catch (err) {
        return res.status(501).send({
            success : false,
            err : err
        })
    }
}

module.exports = {
    loginUser
}