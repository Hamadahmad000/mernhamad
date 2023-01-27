const dotenv = require("dotenv")
dotenv.config({path:'./config.env'})
const express = require("express")
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()

require('./db/conn')


const PORT = process.env.PORT || 5000



app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
app.use(cookieParser())

app.use(require("./router/auth"))


    
if(process.env.NODE_ENV === "production"){
    app.use(express.static(__dirname,"./client/build"))
    app.get('*',(req,res)=>{
        res.sendFile(__dirname,'./client/build/index.html')
    })
}


app.listen(PORT,()=>{
    console.log(`your server is runing on port http://localhost:${PORT}`)
})