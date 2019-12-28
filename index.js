const express = require('express');
const bodyparser = require('body-parser');
const fetch = require('node-fetch');
const PORT = 3000 || process.env.PORT
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, './public')
app.use(express.static(publicDirectoryPath))

// EJS

app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.render('index')
}) 


app.listen(PORT, () => {
    console.log(`server on ${PORT}`)
})