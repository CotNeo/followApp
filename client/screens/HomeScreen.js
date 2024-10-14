import React from 'react';
import { View, ScrollView } from 'react-native';
import Dashboard from '../components/Dashboard';
import DeviceInfo from '../components/DeviceInfo';
import Profile from '../components/Profile';
import EmergencyContact from '../components/EmergencyContact';
import styles from '../assets/styles';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.content}>
            <Dashboard />
            <DeviceInfo />
            <Profile />
            <EmergencyContact />
        </ScrollView>
    );
}
