const mongoose = require("mongoose")

var mongoURL = 'mongodb+srv://saravanan:9092815611@cluster0.vsmvkfv.mongodb.net/mern-rooms'

mongoose.connect(mongoURL , {useUnifiedTopology :true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB Connection failed')
})

connection.on('connected', ()=>{
    console.log('Mongo DB Connection successfully')
})

module.exports = mongoose