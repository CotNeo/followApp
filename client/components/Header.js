import React from 'react';
import { View, Text } from 'react-native';
import styles from '../assets/styles';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Konum Takip Uygulaması</Text>
        </View>
    );
}
