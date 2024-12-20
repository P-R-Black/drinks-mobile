import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

interface TabBarProps {
    state: any;
    descriptors: any;
    navigation: any;
}


const TabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {

    const icons = {
        index: (props: any) => <FontAwesome name="home" size={26} colors={greyColor} {...props} />,
        cocktails: (props: any) => <FontAwesome name="glass" size={26} colors={greyColor} {...props} />,
        shots: (props: any) => <FontAwesome5 name="glass-whiskey" size={26} colors={greyColor} {...props} />,
        search: (props: any) => <FontAwesome name="search" size={26} colors={greyColor} {...props} />,
        menu: (props: any) => <FontAwesome name="bars" size={26} colors={greyColor} {...props} />

        // index: (props: any) => <AntDesign name="home" size={26} colors={greyColor} {...props} />,
        // cocktails: (props: any) => <Feather name="compass" size={26} colors={greyColor} {...props} />,
        // shots: (props: any) => <AntDesign name="pluscircleo" size={26} colors={greyColor} {...props} />,
        // search: (props: any) => <AntDesign name="user" size={26} colors={greyColor} {...props} />,
        // menu: (props: any) => <AntDesign name="user" size={26} colors={greyColor} {...props} />

    }
    const primaryColor = "#0891b2";
    const greyColor = "#737373";

    return (
        <View style={styles.tabbar}>
            {state.routes.map((route: { key: string; name: string; params: undefined; }, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                if (['_sitemap', '+not-found'].includes(route.name)) return null;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };


                return (
                    <TouchableOpacity
                        key={route.name}
                        style={styles.tabbarItem}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >

                        {
                            icons[route.name as keyof typeof icons]?.({
                                color: isFocused ? primaryColor : greyColor
                            }) || null
                        }

                        <Text style={{
                            color: isFocused ? primaryColor : greyColor,
                            fontSize: 11
                        }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,



    }
})

export default TabBar