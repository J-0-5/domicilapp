import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {

    const navigation = useNavigation();

    return (
        <View
            style={styles.container}
        >
            <TextInput
                placeholder={'¿Qué buscas?'}
                inlineImageLeft='search'
                inlineImagePadding={30}
                style={styles.entry}
            />
            <TouchableOpacity
                style={styles.btn}
            //onPress={() => { navigation.navigate('CreateAccount') }}
            >
                <Text
                    style={styles.whiteTxt}
                >
                   BUSCAR
                </Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: wp('4%'),
        height: hp('6%'),
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    entry: {
        backgroundColor: '#FFFFFF',
        width: wp('69%'),
        height: hp('6%'),
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        paddingHorizontal: wp('3%'),
        fontFamily: 'Roboto',
        fontSize: hp('3%'),

    },
    btn: {
        backgroundColor: '#EC1A39',
        width: wp('21%'),
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    whiteTxt: {
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    },
});

export default SearchBar;