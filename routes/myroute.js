const express=require('express');
const router =new express.Router();
const mycontrollers=require('../controlles/myController');
router.get('/',mycontrollers.readAllData)
router.get('/articles/:id', mycontrollers.getSingleArticle)
module.exports = router