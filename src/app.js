const express=require('express');
const app=express();
require('../db/connection');
const studentRoute=require('../routes/myroute')
app.use(express.json());
app.use(studentRoute)

module.exports=app;