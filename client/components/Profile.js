import React from 'react';
import { View, Text } from 'react-native';
import styles from '../assets/styles';

export default function Profile() {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Profilim</Text>
            <Text>Kullanıcı bilgilerinizi buradan düzenleyin.</Text>
        </View>
    );
}
