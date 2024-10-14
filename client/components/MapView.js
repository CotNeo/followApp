import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import io from 'socket.io-client';

export default function MapScreen() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const socket = io('http://localhost:5000');
        
        socket.on('locationUpdated', (data) => {
            setLocations((prevLocations) => [...prevLocations, data]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                        title={`Kullanıcı: ${location.userId}`}
                        description={`Son Güncelleme: ${new Date(location.timestamp).toLocaleTimeString()}`}
                    />
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
