const mongoose =require('mongoose');
const connectDB= async()=>{
try{
    await mongoose.connect('mongodb://127.0.0.1:27017/Mydatabase');
    console.log('connect to mongodb');

}catch(error){
    console.log(error)
}

   
}
module.exports=connectDB;
//mongodb://localhost:27017