import { View } from 'react-native'
import React from 'react'
import Recipe from '@/components/Recipe'
import { Stack, useLocalSearchParams } from 'expo-router';

const cocktail_drink = () => {
    const { cocktail_base: base, cocktail_name: drinkName } = useLocalSearchParams();

    return (
        <View>
            <Recipe drinkName={drinkName} alcohol={base} />
        </View>
    )
}

export default cocktail_drink