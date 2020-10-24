import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import Format from '../../assets/functions/formatNumber';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import BackButton from '../../components/backButton';
import NavBar from '../../components/navBar';
import location from '../../assets/icons/location.png';
import clock from '../../assets/icons/clock.png';
import yellowBasket from '../../assets/icons/miniYellowBasket.png';
import cash from '../../assets/icons/cash.png';

//
import estadoProducto from '../../assets/productos/estadoProducto';
//
//
import descuentos from '../../assets/productos/descuentos';
//

const WayToPay = () => {

    const navigation = useNavigation();

    const orders = estadoProducto[0];
    const { metodoPago, costoPedido, costoEnvio, propina, pedido, tiempoEntrega } = orders;
    const quantity = pedido.length;
    const total = costoPedido + costoEnvio + propina;

    return (
        <>
            <View style={styles.bg}>
                <BackButton />

                <View style={styles.margin}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.row}>
                            <Text style={styles.title}>TU PEDIDO</Text>
                        </View>

                        <View style={styles.topContainer}>
                            <Text style={styles.title}>
                                Dirección de entrega
                            </Text>
                        </View>

                        <View style={styles.row}>
                            <TouchableOpacity
                                style={styles.btn}
                            //onPress={() => { navigation.navigate('Home') }}
                            >
                                <Image
                                    resizeMode={'contain'}
                                    source={location}
                                    style={styles.img}
                                />
                                <Text style={styles.blackTxt}>
                                    Agrega o escoge una dirección
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.changeBtn}
                            //onPress={() => { navigation.navigate('Home') }}
                            >
                                <Text style={styles.text}>
                                    Cambiar
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.subContainer}>
                                <Image
                                    source={clock}
                                />
                                <Text style={styles.txt}>Tiempo de entrega</Text>
                            </View>
                            <Text style={styles.boldTxt}>{tiempoEntrega} min</Text>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.subContainer}>
                                <Image
                                    resizeMode={'contain'}
                                    source={yellowBasket}
                                />
                                <Text style={styles.txt}>Tu pedido</Text>
                            </View>
                            <View>
                                <Text style={styles.boldTxt}>4 elementos</Text>
                                <TouchableOpacity
                                //style={styles.showBtn}
                                //onPress={() => { navigation.navigate('Home') }}
                                >
                                    <Text style={styles.text}>
                                        Ver articulos >
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={styles.subContainer}>
                            <View style={styles.btn3}>
                                <Text style={styles.txt}>Metodo de pago</Text>
                                <Image
                                    resizeMode={'contain'}
                                    source={cash}
                                />
                                <Text style={styles.blackTxt}> {metodoPago} </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.changeBtn}
                            //onPress={() => { navigation.navigate('Home') }}
                            >
                                <Text style={styles.text}>
                                    Cambiar
                            </Text>
                            </TouchableOpacity>
                        </View>


                        <Text style={styles.blackTxt}> Resumen </Text>
                        <View style={styles.subContainer}>
                            <Text style={styles.lbl}>Costo de productos</Text>
                            <Text style={styles.blackTxt}> <Format value={costoPedido} /></Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.lbl}>Costo de envio</Text>
                            <Text style={styles.blackTxt}>  <Format value={costoEnvio} /></Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.lbl}>Propina</Text>
                            <Text style={styles.blackTxt}>  <Format value={propina} /></Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.lbl}>Total a pagar</Text>
                            <Text style={styles.blackTxt}>  <Format value={total} /></Text>
                        </View>
                        <TouchableOpacity
                            style={styles.yellowBtn}
                            onPress={() => { navigation.navigate('Pay') }}
                        >
                            <Text style={styles.blackTxt}>
                                SIGUIENTE
                                </Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </View>
            <NavBar />
        </>
    );
}

export default WayToPay;