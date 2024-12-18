const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        const con = await mongoose.connect(`mongodb+srv://khushigondaliya736:khushia1124@cluster0.2j6jh.mongodb.net/api`);
        console.log(`mongodb connect`);
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports = connectDB;