import { Redirect, Tabs, useLocalSearchParams, useRouter } from 'expo-router';
import AlcoholSelectTwo from '@/components/AlcoholSelectTwo';
import { View, Text } from 'react-native';



const TabIndex = () => {
    const { drink_name: idString } = useLocalSearchParams();
    console.log('index.tsx CocktailSelect | TabIndex | drink_name', idString)

    // const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);
    // console.log('idString TabIndex cocktailSelect', idString)

    return (
        <View>
            <AlcoholSelectTwo />
        </View>
    );
};

export default TabIndex;