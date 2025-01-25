import DiscoverCocktails from '@/components/DiscoverCocktails';
import { Dimensions, View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import Colors from '@/constants/Colors';

const menuImage = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/og_img_one.png' }
const defaultCocktailImage = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/heroImage.jpeg' }

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

import { WorkSans_900Black } from '@expo-google-fonts/work-sans';
import { WorkSans_600SemiBold } from '@expo-google-fonts/work-sans';
import { useFonts } from 'expo-font';
import { LinearGradient } from "expo-linear-gradient";
import { Link, Stack } from 'expo-router';


const CocktailsScreen = () => {
    const menuItems = ["Drink of the Day", "Discover Cocktails", "Discover Shots",
        "Mocktails", "Must Knows", "Build A Drink",
    ]

    return (
        <View>
            <Stack.Screen
                options={{ headerShown: false }}
            />
            <ImageBackground
                source={menuImage || defaultCocktailImage}
                resizeMode={'cover'}
                style={styles.bgImage}
            >
                <LinearGradient
                    colors={['#00000000', '#000000']}
                    style={styles.linearGradient}>
                    <View>
                        <Text style={styles.title}>Menu</Text>
                    </View>
                    <View style={styles.testContainer}>
                        {menuItems.map((mi, index) => (
                            <Pressable key={index}>
                                <LinearGradient
                                    colors={['#010B1A', '#041937']}
                                    style={styles.menuBlock} >
                                    <Link href={'/(home)/cocktails'}>
                                        <Text style={styles.menuText}>{mi}</Text>
                                    </Link>
                                </LinearGradient>
                            </Pressable>
                        ))}
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    linearGradient: {
        alignItems: 'center',
        height: '100%',
        justifyContent: 'flex-start',
        width: '100%',
    },
    // titleContainer: {
    //     marginVertical: 50,
    // },

    title: {
        color: Colors.dark.text,
        fontFamily: 'WorkSans_900Black',
        fontSize: 70,
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowRadius: 5,

    },

    bgImage: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0,
        opacity: .95,

    },

    itemContainer: {
        marginBottom: 4,
        padding: 6,
    },

    testContainer: {
        flexDirection: "row", // Lay out children in rows
        flexWrap: "wrap", // Allow items to wrap to the next line
        justifyContent: "space-between", // Distribute space evenly between items
        padding: 20,
    },
    menuBlock: {
        width: (screenWidth / 2.5), // Half the screen width minus padding
        height: 70, // Adjust the height as needed
        backgroundColor: "#07285B", // Light background for visibility
        marginBottom: 10, // Space between rows
        alignItems: "center", // Center text horizontally
        justifyContent: "center", // Center text vertically
        borderRadius: 10, // Rounded corners
        shadowColor: "#000000", // Add some shadow for better aesthetics
    },
    menuText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",

    },
})

export default CocktailsScreen;