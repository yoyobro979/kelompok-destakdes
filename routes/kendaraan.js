const express = require('express');
const router = express.Router();

const vehicles = [
  {
    id: 1,
    name: "Pickup Angkut Buah",
    image: "/images/kendaraan/fruit-pickup.jpg",
    type: "Commercial",
    price: 150000000,
    capacity: "2 Ton",
    features: ["Bak tertutup", "Suspensi kuat", "Bahan anti-karat"]
  },
  {
    id: 2,
    name: "Truk Pendingin",
    image: "/images/kendaraan/cooling-truck.jpg",
    type: "Heavy Duty",
    price: 450000000,
    capacity: "10 Ton",
    features: ["Suhu terkontrol", "GPS Tracking", "Kapasitas besar"]
  }
];

router.get('/', (req, res) => {
  res.render('kendaraan', {
    title: 'Kendaraan Transportasi',
    vehicles: vehicles
  });
});

module.exports = router;