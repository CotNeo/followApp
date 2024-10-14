const DeviceHealth = require('../models/DeviceHealth');

// Cihaz sağlığı kaydı oluşturma
exports.createDeviceHealth = async (req, res) => {
    try {
        const health = new DeviceHealth(req.body);
        await health.save();
        res.status(201).json(health);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Tüm cihaz sağlığı verilerini listeleme
exports.getDeviceHealth = async (req, res) => {
    try {
        const healthData = await DeviceHealth.find();
        res.json(healthData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Belirli bir cihaz sağlığı verisini güncelleme
exports.updateDeviceHealth = async (req, res) => {
    try {
        const health = await DeviceHealth.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(health);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Cihaz sağlığı kaydını silme
exports.deleteDeviceHealth = async (req, res) => {
    try {
        await DeviceHealth.findByIdAndDelete(req.params.id);
        res.json({ message: 'Device health record deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
