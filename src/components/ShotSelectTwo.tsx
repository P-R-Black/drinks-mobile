import { View, Text, ActivityIndicator, ImageBackground, FlatList, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '@/constants/Colors';
import { Drink } from '@/types'
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { CocktailAlcoholType, CocktailsByBaseDrinkApi, ShotsAlcoholType, ShotsByBaseDrinkApi } from '@/api/DrinksAPI';
import { LinearGradient } from 'expo-linear-gradient';
import { ToolTip } from './ToolTip';
import slugify from 'react-slugify';
import { BackgroundPics } from '@/BackgroundPics';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const clamp = (min: number, val: number, max: number) => Math.max(min, Math.min(val, max));
const fontSize = clamp(50, screenWidth * 0.05, 70);

const ShotSelectTwo = () => {
    const [allShots, setallShots] = useState<Drink[]>([])
    const [displayName, setDisplayName] = useState<string>("")
    const [bgImage, setBgImage] = useState<any>("")

    const { shot_drink: alcohol } = useLocalSearchParams();

    const { data: shotsByBase, isLoading: shotsByBaseIsLoading, isError: shotsByBaseIsError, error: shotsByBaseError } = ShotsByBaseDrinkApi(String(alcohol) || "");
    const { data: shotBase, isLoading: shotBaseLoading, isError: shotBaseIsError, error: shotBaseError } = ShotsAlcoholType();


    const filterShotsByBase = async () => {
        if (shotsByBase) {
            let getAllCocktails = await shotsByBase.drinks.results
            setallShots(getAllCocktails)
        }

    }



    const getDisplayName = (alcohol: string | undefined) => {
        let foundItem;
        if (shotBase) {
            foundItem = shotBase['results'].find((item: { slug: string }) => item.slug === slugify(alcohol))
        }
        setDisplayName(foundItem ? foundItem.name : null)
    };


    useEffect(() => {
        filterShotsByBase()
        getDisplayName(String(alcohol))
        setBgImage(BackgroundPics(slugify(String(alcohol))))
    })


    if (shotsByBaseIsLoading) {
        return (<ActivityIndicator />);
    }

    if (shotsByBaseIsError) {
        return (<Text>Error Ocurred</Text>);
    }

    if (shotBaseLoading) {
        return (<ActivityIndicator />);
    }

    if (shotBaseIsError) {
        return (<Text>Error Ocurred</Text>);
    }

    const sortedAllDrinks = allShots.sort((a, b) => a.drink_name.localeCompare(b.drink_name))



    return (
        <View>
            <ImageBackground
                source={bgImage}
                resizeMode={'cover'}
                style={styles.bgImage}
            >
                <LinearGradient
                    colors={['#00000000', '#000000']}
                    style={styles.linearGradient}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{displayName}</Text>
                        <Text style={styles.subTitle}>Drinks & Cocktails</Text>
                    </View>
                    <FlatList
                        data={sortedAllDrinks}
                        numColumns={2}
                        keyExtractor={(item) => item.drink_name}
                        contentContainerStyle={styles.flatListContent}
                        renderItem={({ item }) => (

                            <View style={styles.itemContainer}>
                                <ToolTip text={item.drink_name}>
                                    <Link href={`/(home)/shots/shotSelect/${slugify(alcohol)}/${slugify(item.drink_name)}`}>
                                        {String(item.drink_name).length < 16 ? String(item.drink_name) : String(item.drink_name).slice(0, 14) + "..."}
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
        backgroundColor: '#000',
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
        fontSize: fontSize,
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowRadius: 5,
        textTransform: 'capitalize',

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

export default ShotSelectTwo