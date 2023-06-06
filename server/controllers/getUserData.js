const User = require("../models/User")

const getUserData = async (req,res) => {
    const handle = req.params.handle
    console.log("showing handle ->", handle)
    console.log("-------------------------------------------")
    try{
        const user = await User.findOne({handle: handle})
        const userData = {
            name: user.handle,
            avatar: user.avatar,
            bio: user.bio,
            links: user.links
        }
        return res.json({message: "found user", userData, status: "success"})
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