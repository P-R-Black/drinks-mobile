import { View, StyleSheet } from 'react-native';
import ShotSelectTwo from '@/components/ShotSelectTwo';



const ShotSelect = () => {

    return (
        <View style={styles.container}>
            <ShotSelectTwo />
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

export default ShotSelect;