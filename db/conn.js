const mongoose = require('mongoose')

const DB = process.env.DATABASE
// const DB = "mongodb://localhost:27017/hamadmirza"


// Database connection 

mongoose.connect(DB).then(()=>{
    console.log('connection successful')
}).catch((err)=>{
    console.log('connection failed')
})
