import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import RecipeShots from '@/components/RecipeShots';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Drink } from '@/types';
import slugify from 'react-slugify';



const ShotDrink = () => {

    const { shot_drink: base, shot_name: drinkName } = useLocalSearchParams();
    return (
        <View>
            <Stack.Screen options={{ title: `How To Make Shots` }} />
            <RecipeShots drinkName={drinkName} alcohol={base} />
        </View>
    )
}

export default ShotDrink