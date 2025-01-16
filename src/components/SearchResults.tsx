import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { RelativePathString, useRouter } from 'expo-router';
import slugify from 'react-slugify';
import { SearchResultsProps } from '@/types'
import { useFonts } from 'expo-font';
import { WorkSans_900Black } from '@expo-google-fonts/work-sans';
import { WorkSans_600SemiBold } from '@expo-google-fonts/work-sans';
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans'
import { WorkSans_500Medium } from '@expo-google-fonts/work-sans'


const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    const router = useRouter();


    if (!results) {
        return <Text style={styles.noResults}>No results found.</Text>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            const routeType: string = item.drink_type === 'shot'
                                ? `/(home)/shots/shotSelect/${slugify(item.base_alcohol)}/${slugify(item.drink_name)}`
                                : `/(home)/cocktails/cocktailSelect/${slugify(item.base_alcohol)}/${slugify(item.drink_name)}`;
                            router.push(routeType as RelativePathString)
                        }
                        }
                    >
                        <Text style={styles.resultText}>{item.drink_name}</Text>
                    </TouchableOpacity>
                )
                }
            />
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxHeight: 350,
    },
    noResults: {
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    },
    resultText: {
        backgroundColor: '#000000e6',
        height: 45,
        width: "95%",
        color: 'white',
        fontFamily: 'WorkSans_600SemiBold',
        fontSize: 20,
        marginBottom: 1,
        padding: 7,
        borderWidth: 2,
        borderColor: '#444444',
    },
});

export default SearchResults;

// function rgb(arg0: number, arg1: number, arg2: number, p0: number): any {
//     throw new Error('Function not implemented.');
// }

// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
// import { SearchResultsProps } from '@/types'
// import { Link, useRouter } from 'expo-router';
// import slugify from 'react-slugify';
// import { useFonts } from 'expo-font';
// import { WorkSans_900Black } from '@expo-google-fonts/work-sans';
// import { WorkSans_600SemiBold } from '@expo-google-fonts/work-sans';
// import { WorkSans_400Regular } from '@expo-google-fonts/work-sans'
// import { WorkSans_500Medium } from '@expo-google-fonts/work-sans'

// const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
//     const router = useRouter();
//     const [fontsLoaded] = useFonts({ WorkSans_900Black, WorkSans_600SemiBold })

//     console.log('results', results)

//     const sortedMainAlcohols = results.sort((a: { drink_name: string; }, b: { drink_name: any; }) => a.drink_name.localeCompare(b.drink_name))

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={sortedMainAlcohols}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity
//                         onPress={() =>
//                             router.push(`/(home)/cocktails/cocktailSelect/${slugify(item.base_alcohol)}/${slugify(item.drink_name)}`)
//                         }
//                     >
//                         <Text style={styles.resultText}>{item.drink_name}</Text>
//                     </TouchableOpacity>
//                 )}
//             />
//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         borderWidth: 2,
//         borderColor: 'transparent',
//         borderRadius: 20,
//         height: 350,
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//     },
//     resultText: {
// backgroundColor: '#000000e6',
// height: 45,
// width: "95%",
// color: 'white',
// fontFamily: 'WorkSans_600SemiBold',
// fontSize: 20,
// marginBottom: 1,
// padding: 7,
// borderWidth: 2,
// borderColor: '#444444',


//     },
// })

// export default SearchResults

// function rgb(arg0: number, arg1: number, arg2: number, p0: number): any {
//     throw new Error('Function not implemented.');
// }
