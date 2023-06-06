const User = require('../models/User')
const jwt_decode = require('jwt-decode')


const dashboardData = async (req, res) => {
 const {tokenMail} = req.body
 console.log(tokenMail)
 try{
    const decodeTokenMail = jwt_decode(tokenMail, process.env.JWT_SECRET);
    const email = decodeTokenMail.email;
    console.log('decoded email', email)
    const user = await User.findOne({email: email})
    const userData = {
        name: user.name,
        role: user.role,
        avatar: user.avatar,
        handle: user.handle,
        links: user.links.length
    }
    return res.json({message: "User Loaded", userData, status: "Okay"})

 }
 catch(err){
    return res.json({status: "error", error: err.message})
 }
} 

module.exports = dashboardData