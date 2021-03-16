const mongoose = require("mongoose");
const schema = mongoose.Schema;

const BienSchema = new schema({
  //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'  }, 
  titre: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  localisation: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    
  },
  NbPieces: {
    type: Number,
    required: true,
  },
  
  surface: {
    type: Number,
    required: true,
  },
  typeBien: {
    type: String,
    required: true,
  },
  typeTransaction: {
    
    type: String,
    required: true
  },
  
  
});
module.exports = Biens = mongoose.model("Biens", BienSchema);