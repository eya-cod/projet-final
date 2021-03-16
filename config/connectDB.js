const mongoose=require('mongoose')
require('dotenv').config({path:'./config/.env'})
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,
            { useNewUrlParser: true,
            useUnifiedTopology: true
            }
            );
        console.log('mongoDB connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDB;