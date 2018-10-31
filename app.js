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
app.use('*', (req, res) => {
    res.status(404).json({message: 'not found' });
});

//send error type and message
app.use((error, req, res, next) => {
    var message = ''
    res.status(error.status || 500)
    if (res.statusCode == 500) {
        message = 'Something went wrong.'
    }else{
        message = Object.values(error.errors).map(e => e.message) 
    }
    res.json({
        error: {
            message: error
        }
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Application is listening on port ${process.env.PORT}`)
})

