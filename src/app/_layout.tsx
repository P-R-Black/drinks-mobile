import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native"
import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import TabBar from '@/components/TabBar'
import QueryProvider from '@/providers/QueryProvider';


const RootLayoutNav = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryProvider>
        <Stack>
          <Stack.Screen
            name="(home)"
            options={{ headerShown: false }}
          />
        </Stack>
      </QueryProvider>
    </ThemeProvider >
  )
  {/* 
      
  )
  
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
      </Tabs>

      
    <Tabs.Screen
        name="cocktails"
        options={{
          title: "Cocktails",
        }}
      />
      <Tabs.Screen
        name="shots"
        options={{
          title: "Shots"
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search"
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu"
        }}
      />
    </Tabs >
  ) */}
}

export default RootLayoutNav