import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Redirect, Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@components/useColorScheme';
import { useClientOnlyValue } from '@components/useClientOnlyValue';
import TabBar from '@/components/TabBar';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  return (
    <Tabs tabBar={props => <TabBar {...props} />} >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="cocktails"
        options={{
          title: 'Cocktails',
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="shots"
        options={{
          title: 'Shots',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: true,
        }}
      />
    </Tabs>
  )


  {/* 
    return (
        <Tabs
            tabBar={props => <TabBar {...props} />}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,

                }}
            />

           <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: useClientOnlyValue(false, true),
            }}> */}

  {/* <Tabs.Screen name={"index"} options={{ href: null }} /> */ }
  {/* 
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <TabBarIcon name="cutlery" color={color} />,

                }}
            /> */}
  {/* <Tabs.Screen
                name="orders"

                options={{
                    title: 'Orders',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
                }}
            /> */}

  {/* <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
                }}
            /> 
        </Tabs>
    );*/}
}
