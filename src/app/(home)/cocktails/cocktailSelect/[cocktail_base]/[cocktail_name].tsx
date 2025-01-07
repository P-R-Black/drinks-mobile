import { View } from 'react-native'
import React from 'react'
import Recipe from '@/components/Recipe'
import { useLocalSearchParams } from 'expo-router';

const CocktailDrink = () => {
    const { cocktail_base: base, cocktail_name: drinkName } = useLocalSearchParams();

    return (
        <View>
            <Recipe drinkName={drinkName} alcohol={base} />
        </View>
    )
}

export default CocktailDrink