import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import ShotSelect from '.';

const ShotDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{ headerShown: false }}
            />
            <ShotSelect />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,

    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: '500',
    },
});

export default ShotDetailsScreen;