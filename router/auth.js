const express = require("express")
const jwt = require('jsonwebtoken')
const router = express.Router()
require('../db/conn')
const user = require('../models/userSchema')
const bcrypt = require("bcryptjs")
const Authentication = require('../middleware/authentication')



router.get('/',(req,res)=>{
    res.send('hello  page')
})

router.get('/contact',(req,res)=>{
    res.send('hello  contact')
})
router.get('/design',(req,res)=>{
    res.send('hello  design')
})
router.get('/gallery',(req,res)=>{
    res.send('hello  gallery')
})
router.get('/login',(req,res)=>{
    res.send('hello  login')
})


// signup route
router.post('/signup', async (req,res)=>{
    
    const {name,email,phone,work,password,cpassword} = req.body
    if(name === '' ||email ==='' || phone === '' || work === '' || password === '' || cpassword === ''){
       return res.status(423).json({error:'please fille all field'})
    }
    try{

       const userexist = await user.findOne({email:email})
            if(userexist){
            return res.status(422).json({error:'user Already exist'})
        }
         if(password !== cpassword){
            return res.status(422).json({error:'please enter same password'})
        }else{

            const saveuser = new user({name,email,phone,work,password,cpassword})
        
            await saveuser.save()
            return res.status(201).json({message:"Signup Successful"})
                
           
        }
        }catch (err){
        console.log(err)
    }})

    

    // Signin route 

    router.post('/signin',async (req,res)=>{
        
        try {
          
        const {email,password} = req.body
        if(!email || !password){
             return res.status(422).json({errror:"please fill all field"})
        }
            const userfind = await user.findOne({email:email})

            if(!userfind){
                return res.status(423).json({error:'invalid user detail'})
                
            }
            const isMatch = await bcrypt.compare(password,userfind.password)
            if(isMatch){ 
                const token = await userfind.generateAuthToken()

                // creating cokie 

                res.cookie('jwtoken',token,{
                    expires:new Date(Date.now() + 293000000),
                    httpOnly:true
                })
                 return res.status(200).json({message:"login successfully"})
            }else{
                res.status(422).json({error:'invalid crediential'})
                console.log('inavlid crediential')
            }

        } catch (error) {
           res.status(500)
        console.log('server error')
        }
    })





// About us Root 

router.get('/getData',Authentication, (req,res)=>{
  
    res.status(200)
    res.send(req.userRoot)
 
})


// Logout Root

router.get('/logoutUser', (req,res)=>{
  
    res.status(200)
    res.send(res.clearCookie('jwtoken',{path:'/'}))
 
})

// Home Root 
router.get('/getHomeData',Authentication,(req,res)=>{

    res.status(200)
  res.send(req.userRoot)

})


// Contact Us Root 

// getData 
router.get('/getContactData',Authentication,(req,res)=>{
    res.send(req.userRoot)
})

// send data

router.post('/usermessage',Authentication, async (req,res)=>{
    const {fname,lname,email,message} = req.body
    if(!fname || !lname || !email || !message){
        res.status(422).json({message:'please fill all fields'})
    }
    const myuserdata = await user.findOne({email:req.userEmail})
    if(myuserdata){
        const usermessage = await myuserdata.messageSender(fname,lname,email,message)
        
        res.status(201).json({message:'successfull'})
    }
    

})


module.exports = router