import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';
import ico from '../assets/icons/mcdonalds.png';
import start from '../assets/icons/start.png';

const RestaurantCard = ({ item }) => {

    const navigation = useNavigation();

    let { name, category, score, news } = item;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Restaurant', item) }}
            >
                <Image
                    resizeMode={'contain'}
                    source={ico}
                />
            </TouchableOpacity>
            <Text style={styles.blackTxt}>{name} </Text>
            <Text style={styles.ctgTxt}>{category} </Text>
            <View style={styles.score}>
                <Image
                    source={start}
                    resizeMode={'contain'}
                />
                <Text style={styles.scoreTxt}>{score} </Text>
            </View>
            <View
                style={styles.yellowBtn}
            >
                <Text style={styles.blackTxt}>{news} </Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        width: wp('40%'),
        marginHorizontal: wp('5%'),
        marginVertical: hp('2%'),
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    yellowBtn: {
        width: wp('40%'),
        backgroundColor: '#FFCE1C',
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    },
    ctgTxt: {
        color: '#524646',
        fontFamily: 'Roboto',
        fontSize: hp('2.7%'),
    },
    score: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    scoreTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: hp('2.5%'),
    },
});

export default RestaurantCard;