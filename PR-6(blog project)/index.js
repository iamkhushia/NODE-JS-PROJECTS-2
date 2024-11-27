const express=require('express')

const port=9000

const app=express()

const db = require('./config/db')

app.set('view engine', 'ejs')

const cookieParser = require('cookie-parser');


app.use(express.urlencoded())

app.use(cookieParser());

let path=require('path')

app.use('/',express.static(path.join(__dirname,'/public')))

app.use('/uploads',express.static(path.join(__dirname,'uploads')))


app.use('/',require('./routes/indexroutes'))


app.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("server is runing",port);
})