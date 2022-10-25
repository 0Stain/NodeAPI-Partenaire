const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/PartenaireDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const partenaireRouter = require('./routes/partenaires')
app.use('/partenaires',partenaireRouter)

app.listen(9000, () => {
    console.log('Server started')
})