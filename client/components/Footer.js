import React from 'react';
import { View, Text } from 'react-native';
import styles from '../assets/styles';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 Konum Takip Uygulaması</Text>
        </View>
    );
}
