const mongoose = require('mongoose');
const Product = require('../models/product');

mongoose.connect('mongodb://localhost:27017/OutdoorGearBank');

const seedProducts = [{
    name: 'Shadow Caster Kayak',
    price: '499',
    description: 'Fishing Kayak, 90lbs',
    brand: 'Field and Stream',
    type: 'kayak'
},
{
    name: 'Moab 3 WP Mid Mens',
    price: '150',
    description: 'Waterproof Hiking Boot',
    brand: 'Merrell',
    type: 'Hiking boot'
},
{
    name: 'Trail Hut 2',
    price: '350',
    description: '2 person tent, 3 season.',
    brand: 'REI',
    type: 'tent'
},
{
    name: '5T97 Baitcaster',
    price: '120',
    description: 'Baitcasting Rod',
    brand: '13 Fishing',
    type: 'Fishing Rod'
},
{
    name: 'CO-OP Cycles DRT 1.2',
    price: '750',
    description: 'Beginner friendly mountain bike',
    brand: 'REI',
    type: 'Mountain Bike'
}]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
});