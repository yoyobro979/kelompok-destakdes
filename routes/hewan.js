const express = require('express');
const router = express.Router();

const hewanData = [
  {
    id: 1,
    name: "Pet Carrier Premium",
    image: "/images/hewan/pet-carrier.jpg",
    category: "Aksesoris",
    price: 250000,
    rating: 4.5,
    features: ["Bahan waterproof", "Sirkulasi udara baik", "Nyaman untuk perjalanan"]
  },
  {
    id: 2,
    name: "Dog Car Seat",
    image: "/images/hewan/dog-car-seat.jpg",
    category: "Safety",
    price: 350000,
    rating: 4.2,
    features: ["Pengaman seatbelt", "Anti-slip", "Mudah dibersihkan"]
  }
];

router.get('/', (req, res) => {
  res.render('hewan', { 
    title: 'Kendaraan Hewan',
    animals: hewanData,
    layout: 'layouts/main' 
  });
});

module.exports = router;