const express = require('express');
const router = express.Router();

const fruits = [
  {
    id: 1,
    name: "Van Pendingin Buah",
    image: "/images/buah/cooling-van.jpg",
    category: "Pendingin",
    price: 120000000,
    rating: 4.7,
    features: ["Suhu 5°C", "Kapasitas 3 Ton", "GPS Tracking"]
  },
  {
    id: 2,
    name: "Gerobak Angkut Buah",
    image: "/images/buah/fruit-cart.jpg",
    category: "Tradisional",
    price: 2500000,
    rating: 3.9,
    features: ["Mudah dipindah", "Tanpa mesin", "Ramah lingkungan"]
  }
];

router.get('/', (req, res) => {
  res.render('buah', {
    title: 'Kendaraan Buah Segar',
    fruits: fruits
  });
});

module.exports = router;