const User = require("../models/User")

const getUserData = async (req,res) => {
    const handle = req.params.handle
    try{
        const user = await User.findOne({handle: handle})
        const userData = {
            name: user.name,
            avatar: user.avatar,
            bio: user.bio,
            links: user.links
        }
        const socials = user.socialMedia
        return res.json({message: "found user", userData,socials, status: "success"})
    }
   catch(e) {
    console.log(err)
    return res.json({
        status:"error",
        error: err.message
    })
   }

}

module.exports = getUserData