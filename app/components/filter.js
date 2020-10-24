import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { Picker } from '@react-native-community/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import down from '../assets/icons/down.png';

const Filter = () => {

    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>FILTRAR CATEGORÍA </Text>
            <Picker
                selectedValue={selectedValue}
                style={styles.select}
                itemStyle={styles.item}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="-Selecciona una categoría-" value="" />
                <Picker.Item label="HOT DOG" value="HOT DOG" />
                <Picker.Item label="HAMBURGUESA" value="HAMBURGUESA" />
            </Picker>
            <Image
                resizeMode={'contain'}
                source={down}
                style={styles.arrow}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('6%'),
        marginVertical: hp('3%'),
        marginHorizontal: wp('4.5%'),
    },

    select: {
        backgroundColor: '#dfe4ea',
        width: wp('91%'),
        height: hp('5.5%'),
        borderRadius: wp('5.5%'),
        marginVertical: hp('1%'),
    },
    item: {
        textAlign: 'center',
        backgroundColor: '#EC1A39',
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('5%'),
    },
    txt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
        marginLeft: wp('3%'),
    },
    arrow: {
        position:'absolute',
        right: wp('1.5%'),
        bottom: hp('-2.5%')
    }
});

export default Filter;