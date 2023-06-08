const jwt_decode = require('jwt-decode');
const User = require("../models/User")


const loadSocials =  async (req, res) => {
    const {tokenMail} = req.body
  
        try{
            const decodedTokenMail = jwt_decode(tokenMail, process.env.JWT_SECRET)
            const email = decodedTokenMail.email
            console.log(email)
            const user = await User.findOne({email: email})
            console.log(user)
            const socials = user.socialMedia
            return res.json({message: 'found', socials, status: 'success'})
    }
    catch(e){
        return res.json({message: 'error', error: e.message})
    }

}


const loadLinks =  async (req, res) => {
    const {tokenMail} = req.body
  
        try{
            const decodedTokenMail = jwt_decode(tokenMail, process.env.JWT_SECRET)
            const email = decodedTokenMail.email
            console.log(email)
            const user = await User.findOne({email: email})
            console.log(user)
            const links = user.links
            return res.json({message: 'found', links, status: 'success'})
    }
    catch(e){
        return res.json({message: 'error', error: e.message})
    }

}


module.exports = {
    loadSocials,
    loadLinks
}