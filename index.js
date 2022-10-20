const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const categories = require('./Data/Categories.json')
const news = require('./Data/news.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('News api running')
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.listen(port, () => {
    console.log(`Times news running on port : ${port}`);
})