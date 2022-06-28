const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const Product = require('./models/product');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost:27017/OutdoorGearBank');

app.get('/', (req, res) => {
    res.send('Welcome!');
})

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('index', {products});
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('show', {product});
})

app.post('/products', (req, res) => {

})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})