const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors()); // cross origin reqs
app.use(express.json()) // allow us to parse json payloads from FE to BE    
app.use(express.urlencoded())

app.get('/', (req,res) => {
    res.json("Hello")
})

app.listen( 5000, () => {
    console.log("APP ON PORT 5000")
})