import { Redirect, Tabs, useLocalSearchParams, useRouter } from 'expo-router';
import AlcoholSelectTwo from '@/components/AlcoholSelectTwo';
import { View, Text } from 'react-native';



const TabIndex = () => {

    return (
        <View>
            <AlcoholSelectTwo />
        </View>
    );
};

export default TabIndex;