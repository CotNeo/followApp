import React from 'react';
import { View, Text } from 'react-native';
import MapView from './MapView';
import styles from '../assets/styles';

export default function Dashboard() {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dashboard</Text>
            <MapView />
        </View>
    );
}
