import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';

export default function HomeScreen() {
    return (
        <View style={{flex: 1}}>
            <Text >HOME SCREEN</Text>
            <Header/>
            <Card/>
            <Card/>
            <Card/>
        </View>
    );
};



