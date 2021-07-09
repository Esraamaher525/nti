const hbs=require('hbs')
const express=require('express')
const path =require('path')
const routes=require('../routes/myroute')
const app=express();
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname,'../public')))
app.set('views',path.join(__dirname,'../frontend/views'))
hbs.registerPartials(path.join(__dirname,'../frontend/layouts'))
app.use(routes)
module.exports = app