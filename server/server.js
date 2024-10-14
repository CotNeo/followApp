const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const locationRoutes = require('./routes/locationRoutes');
const deviceHealthRoutes = require('./routes/deviceHealthRoutes');
const connectDB = require('./config');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Veritabanı bağlantısını başlat
connectDB();

app.use(express.json());
app.use('/api/locations', locationRoutes);
app.use('/api/deviceHealth', deviceHealthRoutes);

// WebSocket konfigürasyonu
io.on('connection', (socket) => {
    console.log('New WebSocket connection');
    socket.on('locationUpdate', (data) => {
        io.emit('locationUpdated', data);
    });
    socket.on('deviceHealthUpdate', (data) => {
        io.emit('deviceHealthUpdated', data);
    });
});

// Sunucu başlatma
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
