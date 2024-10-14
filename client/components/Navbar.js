import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../assets/styles';

export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity><Text style={styles.navText}>Dashboard</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navText}>Cihazım</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navText}>Profilim</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navText}>Acil İletişim</Text></TouchableOpacity>
        </View>
    );
}
