import AlcoholSelectTwo from '@/components/AlcoholSelectTwo';
import { View, StyleSheet } from 'react-native';



const CocktailSelect = () => {

    return (
        <View style={styles.container}>

            <AlcoholSelectTwo />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,

    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: '500',
    },
});
export default CocktailSelect;