const mongoose=require('mongoose')
const validator=require('validator')
const students=mongoose.model('student',{
    name:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:[true, 'must have a name']
    },
    studentID:{
        type:Number
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error ('invalid email')
        }      
    },
    courses:[
        {
            name:{
                type:String,
                required:[true, 'must have a name']
            },
            gradeCourse:{
                type:String,
            }
        }
    ]
   
})
module.exports=students;