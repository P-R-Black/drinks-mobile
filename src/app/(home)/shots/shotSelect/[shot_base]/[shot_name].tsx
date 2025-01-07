import { View } from 'react-native'
import RecipeShots from '@/components/RecipeShots';
import { useLocalSearchParams } from 'expo-router';




const ShotDrink = () => {
    const { shot_base: base, shot_name: drinkName } = useLocalSearchParams();
    return (
        <View>
            <RecipeShots drinkName={drinkName} alcohol={base} />
        </View>
    )
}

export default ShotDrink