const router = require("express").Router();

const Rdv = require("../models/Rdv");
const isAuth = require("../Middlewares/isAuth");
const isAdmin = require("../Middlewares/isAdmin");

// @route : http://localhost:5000/api/rdvv
// post rdv
// public
router.post("/rdvv", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  try {
    const newRDV = new Rdv({
      firstName,
      lastName,
      email,
      message,
    });
    const rdv = await newRDV.save();
    res.json({ msg: "message added", rdv});
  } catch (error) {
    console.log(error);
  }
});

// @route : http://localhost:5000/api/rdvs
// get all rdvs
// private
router.get("/rdvs", async (req, res) => {
  try {
    const rdvs= await Rdv.find();
    res.json({ msg: "rdv's fetched", rdvs });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;