let api = require('http')
//let document=require('document')
//let lang=document.getElementById("selectLang")
//if en
let langVal = 1;
//else ar
//let langVal = 2;
//read data from api
const getDataFromAPI = ( url, cb ) =>{
    const request = api.request(url, (response)=>{
    let result = ''
    response.on('data', (chunk)=>{
        result +=chunk.toString()
    })
    response.on('end', ()=>{
        const all = JSON.parse(result)
        cb(all, false)
    })
    })
    request.on('error',(err)=>  {console.log(err); cb(false, 'error')})
    request.end()
}
const readAllData = (req, response) => {
    url=`http://medical.mind-techs.com/api/blog/${langVal}/0/11`
    getDataFromAPI(url,(res,err)=>{
        if(err) response.send(err)
        response.render('home',{data:res.data,title:"home"})
    })  
}
const getSingleArticle = (req,response)=>{   
    url= `http://medical.mind-techs.com/api/SingleBlog/${req.params.id}/1`
    getDataFromAPI(url, (res, err)=>{
        console.log(res.data)
        if(err) response.send(err)
        response.render('single', {data:res.data[0], title:'Single Article'})
    })


}
module.exports = {
    readAllData,
    getSingleArticle
}