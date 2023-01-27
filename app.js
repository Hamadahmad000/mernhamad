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

app.use(express.static("client/build"))
// app.get('*',(req,res)=>{
//     res.sendFile('client/build/index.html')
// })
app.use(require("./router/auth"))




app.listen(PORT,()=>{
    console.log(`your server is runing on port http://localhost:${PORT}`)
})