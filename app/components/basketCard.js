import React, { useState } from 'react';
import Format from '../assets/functions/formatNumber';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';
import Button from '../components/button';

import img from '../assets/icons/_pruebaDetails.png';
import trash from '../assets/icons/trash.png';

const BasketCard = ({ item, action }) => {

    const [counter, setCounter] = useState(1);

    let { producto, costo } = item;

    const handleUp = () => {
        setCounter(counter + 1);
        //setTotal(total + food.cost);
    }

    const handleDown = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            //setTotal(total - food.cost);
        }
    }

    return (
        <View style={styles.container}>
            <Image
                resizeMode={'contain'}
                source={img}
            />
            <Text style={styles.blackTxt}><Format value={costo} /></Text>
            <View style={styles.div} />

            <Text style={styles.txt}>{producto} </Text>
            <View style={styles.counterContainer}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={handleDown}>
                    <Text style={styles.lbl}>-</Text>
                </TouchableOpacity>
                <Text style={styles.counter}>{counter}</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={handleUp}>
                    <Text style={styles.lbl}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image
                    resizeMode={'contain'}
                    source={trash}
                    style={styles.img}
                />
            </TouchableOpacity>

        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        marginVertical: hp('2%'),
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    div: {
        borderWidth: 0.5,
        borderColor: '#707070',
        marginHorizontal: wp('0.5%'),
        height: hp('7%'),
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    },
    txt: {
        width: wp('13%'),
        textAlignVertical: 'center',
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: hp('2%'),
    },
    counterContainer: {
        flexDirection: 'row',
        width: wp('20%'),
        justifyContent: 'space-between',
        alignItems: "center",
    },
    btn: {
        width: wp('7.2%'),
        height: hp('4%'),
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#524646',
        justifyContent: "center",
        alignItems: "center",
    },
    lbl: {
        color: '#000000',
        fontSize: hp('3%'),
    },
    counter: {
        color: '#000000',
        fontSize: hp('2.2%'),
        fontWeight: "bold",
    },
    img: {
        width: wp('6.3%'),
        height: hp('4%'),
    },
});

export default BasketCard;