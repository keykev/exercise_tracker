const express = require('express')
const cors = require('cors')
const db = require('./config/db');

//Config .env file
require('dotenv').config({path:'./config/config.env'})


//initialize server
const app = express();


const PORT = process.env.PORT || 5000;


//Cors Middleware
app.use(cors())

//Body Parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Connect Database
db(process.env.ATLAS_URI)

//Routes
app.use('/exercises',require('./routes/exercise'))
app.use('/users',require('./routes/users'))


app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))




