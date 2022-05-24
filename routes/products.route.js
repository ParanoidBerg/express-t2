const { Router } = require("express");

const products = Router();

products.get('/products', (req, res) => {
    res.send('smth')
})
products.get('/products/:id', (req, res) => {
    res.send('smth')
})

products.post('/products/:id', (req, res) => {
    res.send('smth')
})

products.delete('/products/:id', (req, res) => {
    res.send('smth')
})

module.exports = products