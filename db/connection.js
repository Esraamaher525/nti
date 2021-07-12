const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/test5',{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})