import { Redirect, Tabs } from 'expo-router';
import HeroScreen from '@/components/HeroScreen';
import CocktailsScreen from './cocktails';
import { View, Text } from 'react-native';



const TabIndex = () => {
  return (
    <View>
      <HeroScreen />
    </View>
  );
};

export default TabIndex;