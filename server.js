const express=require('express');
const app=express();
const port=8000;
const connectDB=require('./db/dbconnection');
const user=require('./db/user');
 

//Middleware for parsing json


app.use(express.json());



//Registration
app.post('/register',async(req,res)=>{
    try{
        const{username,password}=req.body;
        console.log(req.body);
        const User =new user({username,password});
        await User.save();
        res.status(201).json({message :'registration done '})


    }catch (error){
        console.log(error);
        res.status(500).json({error: 'registration failed '})

    }


})

//login

app.post('/login', async(req,res)=>{

    try{
        const{username,password}=req.body;
        const User = await user.findOne({username});
        if(!User){
            return res.status(401).json({ error:'Invalid username or password '});

        }
        if(User.password !==password ){

        return res.status(401).json({error :'Invalid username '});
        }
        res.status(200).json({message :'Login success'});

    }catch(error){
        console.log('invalid creds ');
        res.status(500).json({error:'Login failed '});
    }
    
})


connectDB();


app.listen(port ,()=>{

    console.log('server is working on 8000');
  

});


