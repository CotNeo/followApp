import React from 'react';
import { View, Text } from 'react-native';
import styles from '../assets/styles';

export default function DeviceInfo() {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cihaz Bilgisi</Text>
            <Text>Cihaz bilgilerinizi buradan görüntüleyin.</Text>
        </View>
    );
}
