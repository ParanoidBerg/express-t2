const { Router } = require("express");

const brands = Router();

brands.get('/brands', (req, res) => {
    res.send('smth')
})

brands.post('/brands', (req, res) => {
    res.send('smth')
})

brands.delete('/brands', (req, res) => {
    res.send('smth')
})
module.exports = brands;

