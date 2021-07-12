const express=require('express');
const router=express.Router();
const controlles=require('../controllers/mycontroller');
router.post("/add-student",controlles.addStudent)
router.get("/students",controlles.allStudents)
router.get("/student/:id",controlles.showSingleStudent)
router.delete("/delete-student/:id",controlles.deleteStudent)
router.patch("/edit-student/:id",controlles.editStudent)
router.post("/add-course/:id",controlles.addCourse)
router.get("/courses/:id",controlles.getstudentCourses)
module.exports=router