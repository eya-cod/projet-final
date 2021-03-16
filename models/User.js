const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required:true,
    
  },
  password: {
    type: String,
    required: true,
  },

admin : {
  type : Boolean,
  default: false
}
});

module.exports = User = mongoose.model('User', userSchema);