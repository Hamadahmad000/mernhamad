const jwt = require('jsonwebtoken')
const user = require('../models/userSchema')



const Authentication = async (req,res,next)=>{
  try {
    const token = req.cookies.jwtoken
    const userverify = jwt.verify(token,process.env.SECRET_KEY)
    const userRoot = await user.findOne({_id:userverify._id, "tokens.token":token})
    if (!userRoot) {
      throw new Error('User Not Found')
    }
    req.token = token
    req.userRoot = userRoot
    req.userID = userRoot._id
    req.userEmail = userRoot.email
    // res.json({message:'verified'})
    next()
  } catch (err) {
    res.status(401).json({message:'invalid user not found'})
  }
}
module.exports = Authentication