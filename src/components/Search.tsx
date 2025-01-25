import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    ImageBackground,
    Dimensions,
    ActivityIndicator,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { DrinksAPI } from '@/api/DrinksAPI';
import SearchResults from './SearchResults';
import debounce from 'lodash.debounce';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const imageUrlDefault = {
    uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-rachel-default.jpg',
};

const Search = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const { fullData, isLoading, isError } = DrinksAPI();

    // Debounced search handler
    const handleSearch = useCallback(
        debounce((searchTerm: string) => {
            if (fullData && searchTerm) {
                const filteredResults = fullData.filter((drink) => {
                    return (
                        drink.base_alcohol[0]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        drink.drink_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        drink.ingredients.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
                    );
                });
                let sortedResults: any = filteredResults.sort((a, b) => a.drink_name.localeCompare(b.drink_name))
                setResults(sortedResults);
            } else {
                setResults([]);
            }
            setIsTyping(false);
        }, 300),
        [fullData]
    );

    useEffect(() => {
        if (input) {
            setIsTyping(true);
            handleSearch(input);
        } else {
            setResults([]);
        }
    }, [input]);

    // Clear the search input and results
    const handleResultSelect = () => {
        setInput('')
        setResults([]);
    }

    if (isError) {
        return <Text style={{ color: 'red', textAlign: 'center' }}>Error loading data</Text>;
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={imageUrlDefault} resizeMode="cover" style={styles.bgImage}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search by name, alcohol, or ingredient"
                        placeholderTextColor="gainsboro"
                        value={input}
                        onChangeText={setInput}
                    />
                    <AntDesign name="search1" size={26} color="white" />
                </View>
                {isTyping || isLoading ? (
                    <ActivityIndicator size="large" color="white" />
                ) : (
                    <SearchResults results={results} onResultSelect={handleResultSelect} />
                )}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: screenHeight,
    },
    bgImage: {
        height: screenHeight,
        opacity: 0.9,
    },
    searchContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        height: 55,
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
    },
    input: {
        flex: 1,
        fontSize: 16,
        backgroundColor: 'transparent',
        height: 40,
        color: 'white',
        marginLeft: 15,
    },
});

export default Search;


// import { View, Text, ImageBackground, Dimensions, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { LinearGradient } from 'expo-linear-gradient';
// import { AntDesign } from '@expo/vector-icons';
// import { DrinksAPI } from '@/api/DrinksAPI';
// import { useRouter } from 'expo-router';
// import { SearchResultItem } from '@/types';
// import slugify from 'react-slugify';
// import SearchResults from './SearchResults';

// const screenHeight = Dimensions.get('window').height;
// const screenWidth = Dimensions.get('window').width;

// const imageUrlDefault = { uri: '/Users/paulblack/VS Code/DrinksAppRA/assets/images/keeps_guide_assets/pexels-rachel-default.jpg' }


// const Search = () => {
//     const [input, setInput] = useState("")
//     const [results, setResults] = useState<SearchResultItem[]>([])
//     const router = useRouter();

//     const { initialData, fullData, isLoading: AllDrinksApiIsLoading, isError: AllDrinksApiIsError } = DrinksAPI();
//     console.log('fullData', fullData?.slice(0, 1))


//     useEffect(() => {
//         if (input !== '' && fullData) {
//             const searchResults = fullData?.filter((drink: { base_alcohol: string[]; drink_name: string; ingredients: string[]; }) => {
//                 console.log('searchResults', searchResults)
//                 return (
//                     drink.base_alcohol[0].toLowerCase().includes(input.toLowerCase()) ||
//                     drink.drink_name.toLowerCase().includes(input.toLowerCase()) ||
//                     drink.ingredients.join(" ").toLowerCase().includes(input.toLowerCase())
//                 );
//             })
//             setResults(searchResults.sort())
//         } else {
//             setResults([])
//         }

//     }, [input, fullData, initialData])


//     const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
//         setInput(e.target.value)
//     }

//     console.log('Search | results', results)


//     return (
//         <View style={styles.container}>
//             <ImageBackground
//                 source={imageUrlDefault}
//                 resizeMode={'cover'}
//                 style={styles.bgImage}
//             >

//                 <View style={styles.outerSearchContainer}>
//                     <View style={styles.searchContainer}>
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Search by name, alcohol or ingredient"
//                             placeholderTextColor="gainsboro"
//                             value={input}
//                             onChangeText={setInput}
//                             keyboardType="default"
//                             returnKeyType="search"

//                         >
//                         </TextInput>
//                         <AntDesign name="search1" size={26} color={"white"} />

//                     </View>
//                 </View>
//                 <View>
//                     <SearchResults
//                         results={results} />
//                 </View>
//             </ImageBackground>
//         </View >
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "black",
//         height: screenHeight,

//     },
//     outerSearchContainer: {
//         // position: "relative",
//         // marginTop: 150,
//         // padding: 15,
//         // height: "auto",
//         // borderWidth: 2,
//         // borderColor: 'yellow'
//     },

//     searchContainer: {
//         padding: 10,
//         alignItems: 'center',
//         borderRadius: 15,
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         borderWidth: 2,
//         borderColor: 'white',
//         height: 55,
//         marginTop: 20,
//         marginBottom: 20,
//         width: "100%",
//     },

//     bgImage: {
//         height: screenHeight,
//         opacity: .90,


//     },
//     input: {
//         fontSize: 16,
//         backgroundColor: 'transparent',
//         height: 40,
//         color: 'white',
//         marginLeft: 15,
//     },
// })
// export default Search
