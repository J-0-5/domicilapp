import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const ProfileMenu = ({ first, second, third, fourth }) => {

    const navigation = useNavigation();

    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity 
                onPress={() => { navigation.navigate('ProfileData') }}
                style={styles.btn}
            >
                <Image
                    resizeMode={'contain'}
                    source={first}
                    style={styles.img}
                />
                <Text style={styles.txt}>Datos del perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => { navigation.navigate('OrdersHistory') }}
                style={styles.btn}
            >
                <Image
                    resizeMode={'contain'}
                    source={second}
                    style={styles.img}
                />
                <Text style={styles.txt}>Historial de pedidos</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => { navigation.navigate('MyAddresses') }}
                style={styles.btn}
            >
                <Image
                    resizeMode={'contain'}
                    source={third}
                    style={styles.img}
                />
                <Text style={styles.txt}>Mis direcciones</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => { navigation.navigate('PaymentMethods') }}
                style={styles.btn}
            >
                <Image
                    resizeMode={'contain'}
                    source={fourth}
                    style={styles.img}
                />
                <Text style={styles.txt}>Metodos de pago</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: hp('19%'),
        marginTop: hp('1%'),
    },
    btn: {
        width: wp('20%'),
        height: hp('15%'),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    img: {
        width: wp('19.3%'),
        height: hp('10.8%'),
    },
    txt: {
        textAlign: 'center',
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: hp('2.35%'),
    },
});


export default ProfileMenu;