import { Text, StyleSheet, View, ImageBackground, Dimensions, FlatList, ActivityIndicator } from 'react-native'
import Colors from '@/constants/Colors';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router'


const cocktailsImage = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/cocktailsImage.jpg' }
const defaultCocktailImage = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/heroImage.jpeg' }

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

import { WorkSans_900Black } from '@expo-google-fonts/work-sans';
import { WorkSans_600SemiBold } from '@expo-google-fonts/work-sans';
import { useFonts } from 'expo-font';
import { LinearGradient } from "expo-linear-gradient";
import { allDrinksApiFileProps } from '@/types';
import { Link, Stack } from 'expo-router';
import { ToolTip } from './ToolTip';
import { CocktailAlcoholType } from '@/api/DrinksAPI';

type CocktailsListItemProps = {
    drink_base: allDrinksApiFileProps;
}

const DiscoverCocktails = () => {
    const [mainAlcohols, setMainAlcohols] = useState<string[]>([])

    const { data: cocktailBase, isLoading, isError } = CocktailAlcoholType();


    useEffect(() => {
        const allAlcohol = async () => {
            if (cocktailBase) {
                let alcBase = await cocktailBase['results'].map((cb: any) => cb.name)
                setMainAlcohols(alcBase)
            } else {
                console.log('CocktailBase is not loaded or is empty')
            }
        }
        allAlcohol()
    }, [cocktailBase])

    if (isLoading) {
        return (<ActivityIndicator />);
    }

    if (isError) {
        return (<Text>There's been error</Text>);
    }

    const sortedMainAlcohols = mainAlcohols.sort((a, b) => a.localeCompare(b))

    return (
        <View>
            <ImageBackground
                source={cocktailsImage || defaultCocktailImage}
                resizeMode={'cover'}
                style={styles.bgImage}
            >
                <LinearGradient
                    colors={['#00000000', '#000000']}
                    style={styles.linearGradient}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Discover</Text>
                        <Text style={styles.subTitle}>Your Next Cocktail</Text>
                    </View>
                    <FlatList
                        data={sortedMainAlcohols}
                        numColumns={2}
                        keyExtractor={(item) => item}
                        contentContainerStyle={styles.flatListContent}
                        renderItem={({ item }) => (

                            <View style={styles.itemContainer}>
                                <ToolTip text={item}>
                                    <Link href={`/(home)/cocktails/cocktailSelect/${item}`}
                                    >
                                        {item.length < 18 ? item : item.slice(0, 10) + "..."}
                                    </Link>
                                </ToolTip>
                            </View>
                        )}
                        showsVerticalScrollIndicator={true}
                    />
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
        justifyContent: 'center',
        width: '100%',
    },
    titleContainer: {
        marginVertical: 50,
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

    },
    flatListContent: {
        paddingBottom: 100,
    },

    itemContainer: {
        marginBottom: 4,
        padding: 6,
    },
})

export default DiscoverCocktails;