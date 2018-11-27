const express = require('express')
const app = express()
var cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

//routes
const { IndexRouter } = require('./routes/IndexRouter')

require('dotenv').config() //<-- access app environment (.env)

//load middleware
// const { authorize  } = require('./middlewares/AuthMiddleware')


app.use(morgan('dev'))
// app.use(cookieParser())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use(cors())

// <-- need to add request acception handler

// begin apps
app.use('/', IndexRouter)
app.use('*', (req, res) => {
    res.status(404).json({message: 'not found' });
});

//send error type and message
app.use((error, req, res, next) => {
    if (error.name == 'ValidationError') {
        res.status(400)
            .json({ 
                message: Object.values(err.errors).map(e => e.message) 
            })
    }
    else {
        console.log(error)
        res.status(500).json({ message: `oops! something went wrong` })
    }
})


app.listen(process.env.PORT, () => {
    console.log(`Application is listening on port ${process.env.PORT}`)
})

