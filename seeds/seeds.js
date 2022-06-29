const mongoose = require('mongoose');
const Product = require('../models/product');

mongoose.connect('mongodb://localhost:27017/OutdoorGearBank');

Product.deleteMany({})
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
});

const seedProducts = [{
    name: 'Shadow Caster Kayak',
    price: '499',
    description: 'Fishing Kayak, 90lbs',
    brand: 'Field and Stream',
    type: 'Kayaks'
},
{
    name: 'Moab 3 WP Mid Mens',
    price: '150',
    description: 'Waterproof Hiking Boot',
    brand: 'Merrell',
    type: 'Hiking boots'
},
{
    name: 'Trail Hut 2',
    price: '350',
    description: '2 person tent, 3 season.',
    brand: 'REI',
    type: 'Tents'
},
{
    name: '5T97 Baitcaster',
    price: '120',
    description: 'Baitcasting Rod',
    brand: '13 Fishing',
    type: 'Fishing Rods'
},
{
    name: 'Kuat Trio Fork Mount ',
    price: '198',
    description: 'Featuring a 3-way mount system, the Kuat Trio fork mount can handle just about any bike you own. Its slim design, security system, and rugged good looks combine to create a versatile fork mount rack. ',
    brand: 'Kuat',
    type: 'Roof Bike Racks'
},
{
    name: 'Werner Skagit FG 2-Piece Paddle ',
    price: '155',
    description: 'The Skagit FG 2-piece paddle from Werner offers beginning and recreational paddlers excellent value and performance. ',
    brand: 'Werner',
    type: 'Kayak Paddles'
},
{
    name: 'Dynafit Free 97 Skis - 2021/2022 ',
    price: '650',
    description: 'Playful, nimble and stable, the Dynafit Free 97 skis do it all: long and short tours, powder and hard snow. Wherever you go, these light skis with rockered tips and tails maneuver easily on the snow. ',
    brand: 'Dynafit',
    type: 'Skis'
},
{
    name: 'Kavu Rope Sling Bag',
    price: '55',
    description: 'Even if you are on your way to work, the Kavu Rope Sling Bag makes sure you never feel far from the crag thanks to its climbing-rope shoulder strap. Roomy storage and organization round out the bag. ',
    brand: 'Kavu',
    type: 'Sling Bags'
},
{
    name: 'ENO Guardian SL Hammock Bug Net ',
    price: '45',
    description: 'Protect your home-away-from-home with the ENO Guardian SL hammock bug net, an ideal choice for the minimalist camper or ultralight backpacker to keep their hammock haven bug-free. ',
    brand: 'Eno',
    type: 'Miscellaneous'
},
{
    name: 'Black Diamond LiteWire Quickdraw Quickpack - 12cm',
    price: '100',
    description: 'Ideal for racking cams on desert or alpine climbs, the Black Diamond LiteWire carabiner is a trad climbers wiregate of choice with hot-forged construction and a hinge-basket made for a narrow sling. ',
    brand: 'Black Diamond',
    type: 'Quickdraws'
},
{
    name: 'Black Diamond Half Dome Helmet ',
    price: '65',
    description: 'Updated with a low-profile suspension, ABS outer shell and streamlined headlamp clips, the lightweight Black Diamond Half Dome helmet still retains the tried-and-true construction of its predecessor. ',
    brand: 'Black Diamond',
    type: 'Climbing Helmets'
}]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
});