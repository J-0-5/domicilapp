import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import Format from '../assets/functions/formatNumber';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import img from '../assets/icons/_pruebaDetails.png';

const OrderSummary = ({ orders }) => {

    const { metodoPago, costoPedido, costoEnvio, propina, pedido } = orders;
    const quantity = pedido.length;
    const total = costoPedido + costoEnvio + propina;

    return (
        <>
            <View style={styles.txtContainer}>
                <Text style={styles.txt}>Tu pedido</Text>
                <Text style={styles.blackTxt}> {quantity} elementos</Text>
            </View>
            <View style={styles.btn3}>
                <Text style={styles.txt}>Metodo de pago</Text>
                <Text style={styles.blackTxt}> {metodoPago} </Text>
            </View>
            <Text style={styles.blackTxt}> Resumen </Text>
            <ScrollView>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>Costo de productos</Text>
                    <Text style={styles.blackTxt}> <Format value={costoPedido} /></Text>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>Costo de envio</Text>
                    <Text style={styles.blackTxt}>  <Format value={costoEnvio} /></Text>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>Propina</Text>
                    <Text style={styles.blackTxt}>  <Format value={propina} /></Text>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>Total a pagar</Text>
                    <Text style={styles.blackTxt}>  <Format value={total} /></Text>
                </View>
                <View style={styles.btn4}>
                    <Text style={styles.blackTxt}>PRODUCTOS</Text>
                </View>
                {pedido.map(e => (
                    <View style={styles.container}>
                        <Image
                            resizeMode={'contain'}
                            source={img}
                        />
                        <View style={styles.div} />
                        <Text style={styles.blackTxt}><Format value={e.costo} /></Text>
                        <View style={styles.div} />
                        <Text style={styles.txt}>{e.producto}</Text>
                    </View>
                ))}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({

    btn3: {
        backgroundColor: '#FFFFFF',
        borderWidth: 5,
        borderColor: '#F9F9F9',
        height: hp('7%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: hp('2%'),
    },
    btn4: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1.5,
        borderColor: '#000000',
        height: hp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: hp('3%'),
    },
    txtContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: hp('2%'),
    },
    txt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: hp('2.6%'),
    },
    whiteTxt: {
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    blackTxt: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    //Card//
    container: {
        marginVertical: hp('2%'),
        padding: 10,
        borderWidth: 1,
        borderColor: '#C1C1C1',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    div: {
        borderWidth: 0.5,
        borderColor: '#707070',
        marginHorizontal: wp('1%'),
        height: hp('6%'),
    },
});

export default OrderSummary;