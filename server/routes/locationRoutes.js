const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Yeni konum bilgisi ekleme
router.post('/', locationController.createLocation);

// Tüm konum bilgilerini getirme
router.get('/', locationController.getLocations);

// Belirli bir konum verisini getirme
router.get('/:id', locationController.getLocationById);

// Belirli bir konum verisini güncelleme
router.put('/:id', locationController.updateLocation);

// Belirli bir konum verisini silme
router.delete('/:id', locationController.deleteLocation);

module.exports = router;
