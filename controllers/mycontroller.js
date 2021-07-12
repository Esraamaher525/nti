const myModel=require('../models/mymodel');
const bcryptjs=require('bcryptjs')
let dataLength;
let dataofStudents;
//get all students
const allStudents=async(req,res)=>{
    try{
        dataofStudents=await myModel.find();
        dataLength=data.length,
        res.status(200).send({
            apiStatus:true,
            message:"data retrived",
            data:data,
            count:data.length
        })
    }catch(e){
        if(res==undefined) console.log("not res")
        else{
            res.status(500).send({
                apiStatus:false,
                message:"error loading data",
                data: e
            })
        }
    }
}
//add student
const addStudent=async(req,res)=>{
    try{
        await allStudents();
        const studentModal=new myModel(req.body)
        //auto icrement id
        studentModal.studentID=dataLength + 1;
        await studentModal.save();
        res.status(200).send({
            apiStatus:true,
            message:"data inserted",
            data:studentModal
        })
    }
    catch(err){
        res.status(500).send({
            apiStatus:false,
            message:"error inserting data",
            data:err
        })
    }
}
//show single student
const showSingleStudent=async(req,res)=>{
    try{
        let id=req.params.id;
        const data=await myModel.findById(id)
        if(!data){
            res.status(404).send({
                apiStatus:true,
                message:"student not found",
                data: null
            })
        }
        res.status(200).send({
            apiStatus:true,
            message:"data retrived",
            data: data
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message:"error loading data",
            data: e
        })
    }
}
//delete student
const deleteStudent= async(req,res)=>{
    try{
        let id=req.params.id;
        const data=await myModel.findByIdAndDelete(id)
        if(!data){
            res.status(404).send({
                apiStatus:true,
                message:"student not found",
                data: null
            })
        }
        res.status(200).send({
            apiStatus:true,
            message:"seccess deleted",
            data: data
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message:"error loading data",
            data: e
        })
    }
}
//edit student
const editStudent=async(req,res)=>{
    //allow update in name,password,email
    const allowUpdate=['name','password','email']
    const updates=Object.keys(req.body)
    isValid = updates.every(up => allowUpdate.includes(up))
    if(!isValid) res.status(500).send({
        apiStatus:false,
        message:"not available",
    })
    try{
        const user=await myModel.findByIdAndUpdate(req.params.id, req.body, {runValidators:true, new:true})
        if(!user) {
            res.send({
            apiStatus:false,
            message:"not found",
        })
        }else{
            res.send({
                apiStatus:false,
                message:"done",
            })
        }
    }catch(e){
        res.status(500).send({
            apiStatus:false,
            message:"error loading data",
            data: e
        })
    }
}
//add courses
const addCourse=async(req,res)=>{
    try{
        let id=req.params.id;
        const data=await myModel.findById(id);
        const courseModal=new myModel(req.body);
        data.courses.push(courseModal.courses[0]);
        await data.save();
        res.status(200).send({
            apiStatus:true,
            message:"courses inserted",
            data
        })

    }
    catch(err){
        res.status(500).send({
            apiStatus:false,
            message:"error inserting data",
            data:err
        })
    }
}
//get student courses
const getstudentCourses=async(req,res)=>{
    try{
        let id=req.params.id;
        const data=await myModel.findById(id);
        const courses=data.courses;
        console.log(courses)
        res.status(200).send({
            apiStatus:true,
            message:"data retrived",
            data:courses,
            count:data.length
        })
    }catch{
        if(res==undefined) console.log("not res")
        res.status(500).send({
            apiStatus:false,
            message:"error loading data",
            data:err
        })
    }
}
module.exports={
    addStudent,
    allStudents,
    showSingleStudent,
    deleteStudent,
    editStudent,
    addCourse,
    getstudentCourses
}