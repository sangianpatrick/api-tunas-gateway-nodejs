const express = require('express')
const app = express()
var cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { index } = require('./routes/IndexRouter')

require('dotenv').config() //<-- access app environment (.env)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use(cors())

// <-- need to add request acception handler

// begin apps
app.use('/',index)



app.listen(process.env.PORT, () => {
    console.log(`Application is listening on port ${process.env.PORT}`)
})

