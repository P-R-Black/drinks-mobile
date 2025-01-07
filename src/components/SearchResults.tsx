import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { SearchResultsProps } from '@/types'
import { useRouter } from 'expo-router';
import slugify from 'react-slugify';
import { useFonts } from 'expo-font';
import { WorkSans_900Black } from '@expo-google-fonts/work-sans';
import { WorkSans_600SemiBold } from '@expo-google-fonts/work-sans';
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans'
import { WorkSans_500Medium } from '@expo-google-fonts/work-sans'

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    const router = useRouter();
    const [fontsLoaded] = useFonts({ WorkSans_900Black, WorkSans_600SemiBold })


    return (
        <View style={styles.container}>
            <FlatList
                data={results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            router.push(`/(home)/cocktails/cocktailSelect/${slugify(item.base_alcohol)}/${slugify(item.drink_name)}`)
                        }
                    >
                        <Text style={styles.resultText}>{item.drink_name}</Text>
                    </TouchableOpacity>
                )}
            />
            {/* <View style={styles.resultContainer}>
                {results.map((result: { id: React.Key | null | undefined; base_alcohol: any[]; drink_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: any) => {
                    return (
                        <Text key={result.id}>
                            <Link style={styles.resultContainerText}
                                href={`/${slugify(result.base_alcohol[0])}/${slugify(result.drink_name)}`}
                            // className={selectedItem === index ? "searchResultList active" : "searchResultList"}
                            >
                                {result.drink_name}
                            </Link>
                        </Text>
                    )
                })}
            </View> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: '#444444',
        // borderRadius: 20,
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
    },
    resultText: {
        //backgroundColor: 'black',
        height: 40,
        width: "100%",
        color: 'white',
        fontFamily: 'WorkSans_600SemiBold',
        fontSize: 20,
        // marginBottom: 1,
        padding: 7,
        backgroundColor: '#000000e6',
        borderWidth: 2,
        borderColor: '#444444',


    },
    resultContainer: {
        // height: 'auto',
        // width: "100%",
        // backgroundColor: 'white',
        // paddingLeft: 15,
        // marginTop: 10,

        // borderWidth: 2,
        // borderColor: "green",

    },
})

export default SearchResults

function rgb(arg0: number, arg1: number, arg2: number, p0: number): any {
    throw new Error('Function not implemented.');
}
