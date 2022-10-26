const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://louay:aerodev@agencedevoyage.9ehrgmq.mongodb.net/?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})


app.use(express.json())

const partenaireRouter = require('./routes/partenaires')
app.use('/partenaires',partenaireRouter)



app.listen(3000, () => {
    console.log('Server started')
})