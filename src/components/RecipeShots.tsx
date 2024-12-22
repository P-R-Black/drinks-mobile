import { View, Text, ActivityIndicator, ImageBackground, Dimensions, StyleSheet, Button, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const recipeImage = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-kelly.jpg' }

import { Drink, DrinkRecipeProp } from '@/types';
import { ShotsByBaseDrinkApi } from '@/api/DrinksAPI';
import slugify from 'react-slugify';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const clamp = (min: number, val: number, max: number) => Math.max(min, Math.min(val, max));
const fontSize = clamp(34, screenWidth * 0.05, 44);


const RecipeShots: React.FC<DrinkRecipeProp> = ({ drinkName, alcohol }) => {

    const [recipe, setRecipe] = useState<Drink[]>([])
    const [toMl, setToMl] = useState<string[][]>([])

    let [unitCount, setUnitCount] = useState(1)
    let [unitMeasure, setUnitMeasure] = useState("oz")

    const { data: shotsByBase, isLoading: shotsByBaseIsLoading, isError: shotsByBaseIsError } = ShotsByBaseDrinkApi(String(alcohol) || "");

    useEffect(() => {

        if (shotsByBase) {
            shotsByBase.drinks.results.forEach((rec: Drink) => {
                if (
                    rec.drink_name.toLowerCase() === drinkName ||
                    slugify(rec.drink_name) === drinkName
                ) {
                    setRecipe([rec]);
                }
            });

        }


    }, [drinkName, shotsByBase, alcohol]); // Dependency array

    if (shotsByBaseIsLoading) {
        return (<ActivityIndicator />);
    }

    if (shotsByBaseIsError) {
        return (<View><Text>There's an error</Text></View>);
    }

    // removes zero before decimals
    const formatUnits = (unit: any) => {
        let formattedUnit: any = Number(unit.split(" ")[0]) * unitCount;
        let temp = formattedUnit.toString();
        let limitDecimalPlace = Number(temp).toFixed(2);
        formattedUnit = String(limitDecimalPlace).replace(/^0+/, "").replace(".00", "");
        return formattedUnit;
    }

    // // Convert Ingredient Ounces to Milliliters 
    const convertUnitMeasurements = () => {

        let ingredients = recipe.map((ing: Drink) => ing['ingredients'])
        ingredients.forEach((ings) => {
            let testing = ings.map((is) => is.split(" "))
            for (let i = 0; i < testing.length; i++) {
                let ingredientUnits = testing[i][0]
                let ingredientMeasurement = testing[i][1]

                if (ingredientMeasurement === "oz") {
                    let newUnit = parseFloat(ingredientUnits) * Math.ceil(29.5735)
                    let newMeasurement = ingredientMeasurement.replace('oz', 'ml')
                    testing[i][0] = newUnit.toString()
                    testing[i][1] = newMeasurement.toString()
                    setToMl(testing)
                }
            }
        })
    };



    const splitIngredients = (text: any[]) => {
        let newText = text.slice(2).join(" ")
        return newText
    }




    return (
        <View>
            <ImageBackground
                source={recipeImage}
                resizeMode={'cover'}
                style={styles.bgImage}
            >
                <LinearGradient
                    colors={['#00000000', '#000000']}
                    style={styles.linearGradient}
                >

                    {recipe.map((rm) => (

                        <View key={rm.drink_name}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{rm.drink_name}</Text>
                            </View>
                            <ScrollView>
                                <View style={styles.ingredientContainer} key={rm.drink_name}>
                                    <Text style={styles.recipeTitles}>Ingredients</Text>
                                    <View>
                                        {unitMeasure === "ml" ? (
                                            <View style={styles.innerIngredientContainer}>
                                                {toMl?.map((ml, mlIndex) => (

                                                    <View key={mlIndex} style={styles.singleIngredient}>
                                                        <Text style={styles.ingredientUnits}>{formatUnits(ml[0])}</Text>
                                                        <Text style={styles.ingredientMeasurement}>{`${ml[1]}`}</Text>
                                                        <Text style={styles.ingredientIngredients}>{splitIngredients(ml)}</Text>
                                                    </View>
                                                ))}
                                            </View>
                                        ) :
                                            <View style={styles.innerIngredientContainer}>
                                                {rm.ingredients.map((ing, ingIndx) => (
                                                    <View key={ingIndx} style={styles.singleIngredient}>
                                                        <Text style={styles.ingredientUnits}>{formatUnits(ing)}</Text>
                                                        <Text style={styles.ingredientMeasurement}>{`${ing.split(" ")[1]}`}</Text>
                                                        <Text style={styles.ingredientIngredients}>{ing.replace(ing.split(" ")[0], "").replace(ing.split(" ")[1], "").trim()}</Text>
                                                    </View>
                                                ))}

                                            </View>}
                                    </View>
                                    <View style={styles.measurementContainer}>
                                        <View style={styles.measureButtonContainer}>
                                            <Pressable style={[styles.measureButtonContainerOz, { backgroundColor: unitMeasure !== "ml" ? "#968686aa" : "transparent" }]} onPress={() => setUnitMeasure("oz")}>
                                                <Text style={styles.ingredientIngredients}>oz</Text>
                                            </Pressable>
                                            <Pressable style={[styles.measureButtonContainerMl, { backgroundColor: unitMeasure === "ml" ? "#968686aa" : "transparent" }]} onPress={() => { setUnitMeasure("ml"); convertUnitMeasurements(); }}>
                                                <Text style={styles.ingredientIngredients}>ml</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.garnishContainer}>
                                    <Text style={styles.recipeTitles}>{"Garnish"}</Text>
                                    {rm.garnish.map((mg, mgIndex) => (
                                        <Text key={mgIndex} style={styles.garnish}>{mg !== "0 None" ? mg : ""}</Text>
                                    ))}
                                </View>
                                <View>
                                    <Text style={styles.recipeTitles}>{"Serving Glass"}</Text>
                                    <Text style={styles.servingGlass}>{rm.serving_glass}</Text>
                                </View>
                                <View>
                                    <Text style={styles.recipeTitles}>Serving</Text>
                                    <View style={styles.servingsContainer}>
                                        <Text style={styles.unitCount}>{unitCount}</Text>
                                        <View style={styles.unitCountContainer}>
                                            <Pressable
                                                onPress={() => setUnitCount(unitCount + 1)}
                                            >
                                                <Feather name="plus" size={26} style={{ color: "white" }} />
                                            </Pressable>
                                            <Pressable
                                                onPress={() => setUnitCount(unitCount > 1 ? unitCount - 1 : 1)}
                                            >
                                                <Feather name="minus" size={26} style={{ color: "white", fontWeight: "light" }} />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.mixDirectionsContainer}>
                                    <Text style={styles.recipeTitles}>{"Instructions"}</Text>
                                    <View>
                                        <Text style={styles.mixDirections}>{rm.mixing_direction}</Text>
                                    </View>
                                </View>
                            </ScrollView>

                        </View>
                    ))}
                </LinearGradient>
            </ImageBackground>
        </View >
    )
}




const styles = StyleSheet.create({
    bgImage: {
        height: screenHeight,
        width: screenWidth,
        opacity: .95,
    },
    linearGradient: {
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
    },
    titleContainer: {
        marginBottom: 10,
        marginTop: 30,

    },

    title: {
        color: Colors.dark.text,
        fontFamily: 'WorkSans_900Black',
        fontSize: fontSize,
        // fontSize: 70,
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowRadius: 5,
        textTransform: 'capitalize',
    },

    recipeTitles: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
        marginTop: 25,
        textAlign: "center",
        textDecorationLine: "underline"
    },

    ingredientContainer: {
        // borderColor: "red",
        // borderWidth: 2,
        alignItems: "center",
    },

    innerIngredientContainer: {
        marginTop: 10,
        width: screenWidth / 1.75,


    },
    ingredientUnits: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 25,
        marginRight: 3,

    },
    ingredientMeasurement: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 25,
        // borderColor: "white",
        // borderWidth: 2,

    },
    ingredientIngredients: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 25,

    },

    singleIngredient: {
        flexDirection: 'row',
        gap: 5,
    },

    measurementContainer: {
        alignItems: "center",
    },

    measureButtonContainer: {
        alignItems: "center",
        backgroundColor: "transparent",
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 20,
        flexDirection: "row",
        height: 40,
        justifyContent: "space-around",
        marginTop: 20,
        width: 200,

    },
    measureButtonContainerOz: {
        alignItems: "center",
        // backgroundColor: "red",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        height: "100%",
        justifyContent: "center",
        width: "50%",

    },
    measureButtonContainerMl: {
        alignItems: "center",
        // backgroundColor: "blue",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        height: "100%",
        justifyContent: "center",
        width: "50%",


    },

    garnishContainer: {},

    garnish: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 25,
        marginTop: 10,
        textAlign: "center",
    },

    servingGlass: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 25,
        marginTop: 10,
        textAlign: "center",
        textTransform: 'capitalize',

    },

    servingsContainer: {
        alignItems: "center",
        // flexDirection: 'row',
        justifyContent: "center",
        marginTop: 15,
        gap: 20,
    },

    unitCount: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"


    },


    unitCountContainer: {
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        height: 35,
        alignItems: 'center',
        width: 100,
        justifyContent: "space-around",

    },

    mixDirectionsContainer: {
        marginBottom: 500,
    },

    mixDirections: {
        color: "white",
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 30,
        marginTop: 10,
        textTransform: "capitalize",
        width: screenWidth - 20,

    },

})

export default RecipeShots;