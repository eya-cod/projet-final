const User = require ('../models/User');
const jwt = require('jsonwebtoken');
const isAdmin = async (req,res,next)=>{
    try {
        const token = req.headers['x-auth-token'];
        const decoded = await jwt.verify(token, process.env.secretOrKey);
        const user= await User.findById(decoded.id)
        if (!user.admin){
            return res.status(401).send({msg:'not admin'});
        }
        next();
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = isAdmin;