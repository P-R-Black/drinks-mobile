import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '@/constants/Colors';

const heroImage = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/heroImage.jpeg' }
const defaultHeroImage = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/cocktailsImage.jpg' }

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;



import { WorkSans_900Black } from '@expo-google-fonts/work-sans';
import { WorkSans_600SemiBold } from '@expo-google-fonts/work-sans';
import { useFonts } from 'expo-font';
import { LinearGradient } from "expo-linear-gradient";
// import TestSectionButton from './TestSectionButton';



const HeroScreen = () => {
    const [fontsLoaded] = useFonts({ WorkSans_900Black, WorkSans_600SemiBold })
    return (
        <View style={styles.container}>

            <ImageBackground
                source={heroImage || defaultHeroImage}
                resizeMode={'cover'}
                style={styles.bgImage}
            >
                <LinearGradient
                    colors={['#00000000', '#000000']}
                    style={styles.linearGradient}>
                    <Text style={styles.subTitle}>{"Make Great"}</Text>
                    <Text style={styles.title}>{"Cocktails"}</Text>
                </LinearGradient>

            </ImageBackground>

        </View >

    )
};


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
        fontSize: 70,
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
    bgImage: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0,
        opacity: .95,
    }
});


export default HeroScreen