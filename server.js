const express=require('express')
const connectDB=require('./config/connectDB')

const app= express()

app.use(express.json());



app.use("/api", require("./routes/user"));
app.use("/api", require("./routes/biens"));
app.use("/api", require("./routes/rdv"));


connectDB()
const port=process.env.PORT || 5000
app.listen(port,(error)=>
    error 
    ? console.log(error)
    : console.log(`the server is running on ${port}`)
) 