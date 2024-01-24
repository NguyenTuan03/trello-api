// const express = require('express');
import express from 'express'

const app = express();

const hostname = 'localhost';
const port = 8137

app.get('/', function(req,res) {
    res.send('<h1>Tuan</h1>');
})

app.listen(port, hostname, () => {
    console.log(`Hello nguyen Tuan, listen on port http://${hostname}:${port}`);
})