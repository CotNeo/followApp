import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import styles from './assets/styles';

export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            <Navbar />
            <HomeScreen />
            <Footer />
        </View>
    );
}
