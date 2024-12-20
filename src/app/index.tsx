import { Link, Redirect } from 'expo-router';

import { View, Text } from 'react-native'
import React from 'react'
import HeroScreen from '@/components/HeroScreen';


const index = () => {
    return (
        <Redirect href={'/(home)/'} />

    )

}
export default index