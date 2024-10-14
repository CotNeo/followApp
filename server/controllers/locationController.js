const Location = require('../models/Location');

// Konum oluşturma
exports.createLocation = async (req, res) => {
    try {
        const location = new Location(req.body);
        await location.save();
        res.status(201).json(location);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Tüm konumları listeleme
exports.getLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        res.json(locations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Belirli bir konumu güncelleme
exports.updateLocation = async (req, res) => {
    try {
        const location = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(location);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Konumu silme
exports.deleteLocation = async (req, res) => {
    try {
        await Location.findByIdAndDelete(req.params.id);
        res.json({ message: 'Location deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
