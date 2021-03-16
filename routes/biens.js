const express = require("express");
const router = express.Router();
const Biens = require('../models/Biens')
const isAuth=require('../Middlewares/isAuth')
const isAdmin = require("../Middlewares/isAdmin");
const { findOne } = require("../models/Biens");
const user = require('../models/User')

//add bien
// path localhost:5000/api/addbiens
// add bien
// public
router.post("/addbiens" ,async (req, res) => {
  
    const { titre ,email,prix,description,localisation,images,NbPieces,surface,typeBien,typeTransaction } = req.body;
    try {
      const checkAdmin = await user.findOne({email})
      if (email !=='eyasahli@gmail.com') {
        res.json({msg:'you r not admin'})
      } 
      const newBien = new Biens({
        titre,
        prix,
        
        description,
        localisation,
        images,
        NbPieces,
        surface,
        typeBien,
        typeTransaction,
      });
      const Bien = await newBien.save();
      res.json({ msg: "bien added", Bien });
    } catch (error) {
      console.log(error);
    }
  });

  //get biens
// path localhost:5000/api/getbiens
// get biens
// public
router.get("/getbiens", async (req, res) => {
  
    try {
      const biens = await Biens.find();
      res.json({ msg: "bien fetched", biens });
    } catch (error) {
      console.log(error);
    }
  });
 //delet BIEN
// path localhost:5000/api/deletebien/_id
//  delet Bien
// public
  router.delete("/deletebien/:_id",async (req, res) => {
    const { _id } = req.params;
    try {
      const bien = await Biens.findOneAndDelete({ _id:_id });
      res.json({ msg: "bien deleted", bien });
    } catch (error) {
      console.log(error);
    }
  });
  //edit BIEN
// path localhost:5000/api/editbien/_id
//  edit Bien
// public
  router.put("/editbien/:_id",async (req, res) => {
    const { _id } = req.params;
    try {
      const bien = await Biens.findOneAndUpdate({ _id }, { $set: req.body });
      res.json({ msg: "bien edited", bien });
    } catch (error) {
      console.log(error);
    }
  });
  
  module.exports = router;