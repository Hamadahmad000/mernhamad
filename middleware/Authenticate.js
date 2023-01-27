const user = require('../models/userSchema')
const jwt = require('jsonwebtoken')

const VerifyUser = async (req,res,next) =>{

    try {
	const token = req.cookies.jwt
	    const verify = jwt.verify(token,process.env.SECRET_KEY)
	    const rootUser = await user.findOne({_id:verify._id,"tokens.token":token})
	    req.token = token
	    req.rootUser = rootUser
	    req.userID = rootUser._id
	    next()
} catch (error) {
	res.status(500).send(error)
}
}

module.exports = VerifyUser