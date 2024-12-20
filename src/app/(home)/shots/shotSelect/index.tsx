import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import ShotSelectTwo from '@/components/ShotSelectTwo';



const TabIndex = () => {
    const { drink_name: idString } = useLocalSearchParams();
    console.log('index.tsx CocktailSelect | TabIndex | drink_name', idString)

    // const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);
    // console.log('idString TabIndex cocktailSelect', idString)

    return (
        <View>
            <ShotSelectTwo />
        </View>
    );
};

export default TabIndex;