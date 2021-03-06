// Creates an Express application. The express() function is a top-level function exported by the express module.

// const express = require('express')
// import is used here as es6 version.
import express from 'express'
const app = express()

const users = ["asad", "moin", "sabed", "susmita", "Sohana"]

// HTTP Request (path, callback function)

// :id => to get dynamic id from the users or client site.
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const name = users[id]
    //response send as an object or json format
    res.send({id, name})
})

app.get('/', (req, res) => {
    // res.send("I Can Run Node Server. Yay !!!!")
    const fruit = {
        product: 'Ginger',
        price: 220
    }
    res.send(fruit)
});

app.get('/fruits/banana', (req, res) => {
    res.send({fruit:"banana", quantity: 1000, price: 10000})
})

// port (port number, callback function)
app.listen(3000, () => console.log("Listening to port 3000"))