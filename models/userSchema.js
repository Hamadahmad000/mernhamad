const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
name:{
    type:String,
    // required:true
},
email:{
    type:String,
    // required:true
},
phone:{
    type:Number,
    // required:true
},
work:{
    type:String,
    // required:true
},
password:{
    type:String,
    // required:true
},
cpassword:{
    type:String,
    // required:true
},
Date:{
    type:Date,
    default:Date.now
},
messages:[{
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
}],
tokens:[{
    token:{
        type:String,
        required:true
    }
}]
})

// we are generating hash password

userSchema.pre('save', async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10)
        this.cpassword = await bcrypt.hash(this.cpassword,10)
    }
next()
})

// we are generating JWT Token 

userSchema.methods.generateAuthToken = async function(){
    try {
        const token = await jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        console.log(token)
        return token
    } catch (error) {
        console.log(error)
    }
}
userSchema.methods.messageSender = async function(fname,lname,email,message){
    try {
        this.messages = this.messages.concat({fname,lname,email,message})
        await this.save()
        
    } catch (error) {
        console.log(error)
    }
}

const user = mongoose.model("userDetail",userSchema)

module.exports = user