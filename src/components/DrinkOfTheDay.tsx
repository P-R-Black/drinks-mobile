import { LinearGradient } from 'expo-linear-gradient';
import { Text, StyleSheet, View, Dimensions, ImageBackground, Pressable } from 'react-native'
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import { allDrinksApiFileProps } from '@/types';

const dodImage = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/dodImage.jpg' }
const defaultHeroImage = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/sergio-alves-santos-PeDrafNlY2Y-unsplash.jpg' }

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


type DrinkOfTheDayProps = {
    drink: allDrinksApiFileProps;
}

const DrinkOfTheDay = ({ drink }: DrinkOfTheDayProps) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={dodImage || defaultHeroImage}
                resizeMode={'cover'}
                style={styles.bgImage}>
                <LinearGradient
                    colors={['#00000000', '#000000']}
                    style={styles.linearGradient}
                >
                    <Text style={styles.title}>{"Drink of the Day"}</Text>
                    <Text style={styles.subTitle}>{"Today's Drink"}</Text>
                    <Text style={styles.subTitleLight}>{"September 21, 2024"}</Text>

                    <Link href={`/recipe/${drink}`} asChild>
                        <Pressable>
                            <Text style={styles.subTitle}>{"Loaded Pistol"}</Text>
                        </Pressable>
                    </Link>


                </LinearGradient>
            </ImageBackground>
            <Text style={styles.title}>DrinkOfTheDay</Text>
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
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        color: Colors.dark.text,
        fontFamily: 'WorkSans_900Black',
        fontSize: 65,
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowRadius: 5,

    },
    subTitle: {
        color: Colors.dark.text,
        fontFamily: 'WorkSans_600SemiBold',
        fontSize: 30,
        textShadowColor: 'black',
        textShadowRadius: 5,
        textAlign: 'center'
    },
    subTitleLight: {
        color: Colors.dark.text,
        fontFamily: 'WorkSans_200ExtraLight',
        fontSize: 25,
        textShadowColor: 'black',
        textShadowRadius: 5,
        textAlign: 'center'

    },
    bgImage: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0,
        opacity: .95,
    }
})

export default DrinkOfTheDay 