import { Redirect, Tabs } from 'expo-router';
import DiscoverCocktails from '@/components/DiscoverCocktails';
import { View } from 'react-native';


const CocktailsScreen = () => {

    return (
        <View>
            <DiscoverCocktails />
        </View>
    )
}

export default CocktailsScreen;