// Creates an Express application. The express() function is a top-level function exported by the express module.

// const express = require('express')
// import is used here as es6 version.
import express from 'express'
const app = express()

// HTTP Request (path, callback function)
app.get('/', (req, res) => {
    res.send("Thank You For Calling Me !!!")
})

// port (port number, callback function)
app.listen(3000, () => console.log("Listening to port 3000"))