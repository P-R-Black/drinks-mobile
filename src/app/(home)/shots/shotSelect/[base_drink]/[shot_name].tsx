import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Recipe from '@/components/Recipe'
import { Stack, useLocalSearchParams } from 'expo-router';
import { CocktailsByBaseDrinkApi, ShotsByBaseDrinkApi } from '@/api/DrinksAPI';
import { Drink } from '@/types';
import slugify from 'react-slugify';



const BaseDrink = () => {

    const { base_drink: base, drink_name: drinkName } = useLocalSearchParams();
    console.log('[shot_name] BaseDrink', 'base', base, 'drink_name:', drinkName)
    return (
        <View>
            <Stack.Screen options={{ title: `How To Make Shots` }} />
            <Recipe drinkName={drinkName} alcohol={base} />
        </View>
    )
}

export default BaseDrink