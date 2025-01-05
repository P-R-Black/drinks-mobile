import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@components/useColorScheme';
import { useClientOnlyValue } from '@components/useClientOnlyValue';
import { Pressable } from 'react-native';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function MenuStack() {
    return (
        < Stack >
            <Stack.Screen
                name="index"
                options={{ title: "Discover Cocktails", headerShown: false }}
            />
            <Stack.Screen
                name="cocktailSelect"
                options={{ headerShown: false }}
            />

        </Stack >
    );

};