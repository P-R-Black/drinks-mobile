import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Redirect, Stack, Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@components/useColorScheme';
import { useClientOnlyValue } from '@components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//     name: React.ComponentProps<typeof FontAwesome>['name'];
//     color: string;
// }) {
//     return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
// }

export default function MenuStack() {
    return (
        <Stack >
            <Stack.Screen
                name="index"
                options={{ title: "Search", headerShown: false }}
            />
        </Stack>
    )
};