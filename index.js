import express from 'express'
import 'dotenv/config'
// import fs from "node:fs/promises"
// import jwt from 'jsonwebtoken'
import cors from 'cors'


// app config
const app = express()
const port = process.env.PORT || 80



// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// api endpoints
app.use('/', (req, res) => {
    res.send("Hello World")
})




app.listen(port, () => console.log(`server running on port ${port}`))
