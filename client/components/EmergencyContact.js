import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../assets/styles';

export default function EmergencyContact() {
    const handleEmergencyCall = () => {
        console.log("Acil çağrı yapılıyor...");
    };

    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>Acil İletişim</Text>
            <Text>911 hattına veya belirlenen acil numaraya hızlı erişim sağlar.</Text>
            <Button title="Acil Çağrı Yap" onPress={handleEmergencyCall} color="red" />
        </View>
    );
}
