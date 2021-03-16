const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const isAuth = require('../Middlewares/isAuth');
const isAdmin = require("../Middlewares/isAdmin");



const {
    validator,
    registerRules,
    loginRules,
  } = require('../Middlewares/validator');



//@route POST api/register
//@desc Register new user
//@access Public
router.post('/register',registerRules(), validator, async (req, res) => {
    const { name, lastName, email, password,phone,admin} = req.body;
    try {
        
        // Check for existing user
        let user = await User.findOne({ email });
        if (user) {
          return res.status(400).json({ msg: 'User already exists' });
        }
        // Create new User
        user = new User({ name, lastName, email, password, phone,admin });
    // Create Salt & hash
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;
       // Save the user
   await user.save();
    // sing user
      const payload = {
        id: user._id,
      };
   
      const token = await jwt.sign(payload, process.env.secretOrKey);
 

    res.status(200).send({ msg: 'User registred with success', user, token});

}catch (error) {
    res.status(500).send({ msg: 'Server Error' });
  }
});


//@route POST api/login
//@desc Login User
//@access Public
router.post('/login',loginRules(), validator, async (req, res) => {
    const { email, password } = req.body;
    try {
      
      // Check for existing user
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({ msg: 'Bad Credentials! mail' });
      }
      //Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send({ msg: 'Bad Credentials! pass' });
      }
  
      // sing user
      const payload = {
        id: user._id,
      };
  
      const token = await jwt.sign(payload, process.env.secretOrKey);
  
    res.send({ msg: 'Logged in with success', user,token});

    } 
    catch (error) {
      res.status(500).send({ msg: 'Server Error' });
    }
  });

  //@route GET api/authuser
//@desc Get authentified user
//@access Private
router.get('/authuser', isAuth, (req, res) => {
    res.status(200).send({ user: req.user });
  });
  
  //get all users
// path localhost:5000/api/allusers
// get user 
// public
router.get("/allusers",isAuth,isAdmin, async (req, res) => {
  
  try {
    const users = await User.find();
    res.json({ msg: "data fetched", users });
  } catch (error) {
    console.log(error); 
  }
}); 


//delete user
// path localhost:5000/api/deleteuser/_id
//  user delete
// public
router.delete("/deleteuser/:_id",isAuth,isAdmin, async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await User.findOneAndDelete({ _id:_id });
    res.json({ msg: "user deleted", user });
  } catch (error) {
    console.log(error);
  }
});


  module.exports = router;
