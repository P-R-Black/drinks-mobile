import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AlcoholSelectTwo from '@/components/AlcoholSelectTwo';
import slugify from 'react-slugify';
import CocktailSelect from '.';



const CocktailDetailsScreen = () => {

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{ headerShown: false }}
            />
            <CocktailSelect />
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

export default CocktailDetailsScreen


// app /
// |- (home)/
// |    |- cocktails/
// |    |     |-cocktailSelect/
// |    |     |      |- _layout.tsx
// |    |     |      |- [base_drink].tsx
// |    |     |      |- index.tsx
// |    |     |
// |    |     |- _layout.tsx
// |    |     |- index.tsx   
// |    |
// |    |- _layout.tsx
// |    |- index.tsx
// |
// |- _layout.tsx
// |- index.tsx