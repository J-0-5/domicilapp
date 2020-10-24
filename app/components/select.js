import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { Picker } from '@react-native-community/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import down from '../assets/icons/down.png';

const Select = ({ options }) => {

    const [selectedValue, setSelectedValue] = useState("");

    return (
        <View
            style={styles.container}
        >
            <Picker
                selectedValue={selectedValue}
                style={styles.select}
                itemStyle={styles.item}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="-Selecciona-" value="" />
                {options.map((section) => (
                    <Picker.Item key={section.value} label={section.label} value={section.value} />
                ))
                }
            </Picker>
            <Image
                source={down}
                style={styles.arrow}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('6.5%'),
        marginBottom: hp('1%'),
        borderWidth: 1,
        borderColor: '#524646',
        borderRadius: 5,
    },

    select: {
        backgroundColor: '#FFFFFF',
        width: wp('90%'),
        height: hp('4.5%'),
        borderRadius: hp('5.5%'),
        marginVertical: hp('1%'),  
        color: '#524646',
    },
    item: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: hp('5%'),
    },
    arrow: {
        position: 'absolute',
        right: wp('3%'),
        bottom: hp('1.5%')
    }
});

export default Select;