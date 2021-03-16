const mongoose = require("mongoose");
const schema = mongoose.Schema;

const RdvSchema = new schema({
    user: {    type: mongoose.Schema.Types.ObjectId, ref: 'User'  },
    bien:{ type:mongoose.Schema.Types.ObjectId,ref:'Biens' },
    firstName: {
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
        
      },
      message: {
        type: String,
        required: true,
},
});
module.exports = Rdv = mongoose.model("Rdv", RdvSchema);