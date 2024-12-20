import { View, Text, ImageBackground, Dimensions, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { AllDrinksApi } from '@/api/DrinksAPI';
import { useRouter } from 'expo-router';
import { SearchResultItem } from '@/types';
import slugify from 'react-slugify';
import SearchResults from './SearchResults';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const imageUrlDefault = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-rachel-default.jpg' }


const Search = () => {
    const [input, setInput] = useState("")
    // const [selectedItem, setSelectedItem] = useState(-1)
    const [results, setResults] = useState<SearchResultItem[]>([])
    const router = useRouter();

    const { data: AllDrinksApiData, isLoading, error } = AllDrinksApi();

    useEffect(() => {
        if (input !== '' && AllDrinksApiData?.drinks) {
            const searchResults = AllDrinksApiData.drinks.filter((drink: { base_alcohol: string[]; drink_name: string; ingredients: string[]; }) => {
                console.log('searchResults', searchResults)
                return (
                    drink.base_alcohol[0].toLowerCase().includes(input.toLowerCase()) ||
                    drink.drink_name.toLowerCase().includes(input.toLowerCase()) ||
                    drink.ingredients.join(" ").toLowerCase().includes(input.toLowerCase())
                );
            })
            setResults(searchResults.sort())
        } else {
            setResults([])
        }

    }, [input, AllDrinksApiData])


    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInput(e.target.value)
    }

    console.log('results', results)


    return (
        <View style={styles.container}>
            <ImageBackground
                source={imageUrlDefault}
                resizeMode={'cover'}
                style={styles.bgImage}
            >

                <View style={styles.outerSearchContainer}>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Searh by name, alcohol or ingredient"
                            placeholderTextColor="gainsboro"
                            value={input}
                            onChangeText={setInput}
                            keyboardType="default"
                            returnKeyType="search"

                        >
                        </TextInput>
                        <AntDesign name="search1" size={26} color={"white"} />

                    </View>
                </View>
                <View>
                    <SearchResults
                        results={results} />
                </View>
            </ImageBackground>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: screenHeight,

    },
    outerSearchContainer: {
        // position: "relative",
        // marginTop: 150,
        // padding: 15,
        // height: "auto",
        // borderWidth: 2,
        // borderColor: 'yellow'
    },

    searchContainer: {
        padding: 10,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'white',
        height: 55,
        marginTop: 20,
        marginBottom: 20,
        width: "100%",
    },

    bgImage: {
        height: screenHeight,

        opacity: .90,


    },
    input: {

        fontSize: 16,
        backgroundColor: 'transparent',
        height: 40,

        color: 'white'

    },
})
export default Search

/*
    
                
                    
 </LinearGradient>
*/