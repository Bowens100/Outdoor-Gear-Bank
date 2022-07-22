const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const Product = require('./models/product');
const ExpressError = require('./utils/ExpressError');
const ejsMate = require('ejs-mate');
const catchAsync = require('./utils/CatchAsync')

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost:27017/OutdoorGearBank');

const validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400)
    } else {
        next()
    }
}

app.get('/', (req, res) => {
    res.send('Welcome!');
})

app.get('/products', catchAsync(async (req, res, next) => {
    const products = await Product.find({});
    res.render('index', { products });
}))

app.get('/products/new', (req, res, next) => {
    res.render('products/new')
})

app.get('/products/:id', catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
}))

app.get('/products/:id/edit', catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
}))

app.post('/products', validateProduct, catchAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect('/products');
}))

app.put('/products/:id', catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
    await updatedProduct.save();
    res.redirect(`/products/${id}`);
}))

app.delete('/products/:id', catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
}))

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err });
    console.log(err);
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})