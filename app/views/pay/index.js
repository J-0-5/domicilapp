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

//
import estadoProducto from '../../assets/productos/estadoProducto';
//
//
import descuentos from '../../assets/productos/descuentos';
//

const Pay = () => {

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
                            <Text style={styles.title}>
                                ELIGE TU METODO DE PAGO
                            </Text>
                        </View>

                        <View style={styles.topContainer}>
                            <Text style={styles.title}>
                                Total a pagar
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.boldTxt}><Format value={100000}/></Text>
                        </View>
                        <View style={styles.placeContainer}>
                            <View style={styles.place}>
                                <Image resizeMode={'contain'} source={require('../../assets/icons/cash.png')} />
                            </View>
                            <View style={styles.place}>
                                <Image resizeMode={'contain'} source={require('../../assets/icons/pse.png')} />
                            </View>
                            <View style={styles.place}>
                                <Image resizeMode={'contain'} source={require('../../assets/icons/masterc.png')} />
                            </View>
                            <View style={styles.place}>
                                <Image resizeMode={'contain'} source={require('../../assets/icons/visa.png')} />
                            </View>
                            
                        </View>
                        
                        <Text style={styles.boldLbl}> DATOS DE FACTURACIÓN </Text>
                        <View style={styles.subContainer}>
                            <Text style={styles.txt}>Nombre</Text>
                            <Text style={styles.txt}>Costo de productos</Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.txt}>Correo</Text>
                            <Text style={styles.txt}>Costo de productos</Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.txt}>Documento</Text>
                            <Text style={styles.txt}>Costo de productos</Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.txt}>Número de celular</Text>
                            <Text style={styles.txt}>Costo de productos</Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.txt}>Dirección de entrega</Text>
                            <Text style={styles.txt}>Costo de productos</Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.txt}>Costo de productos</Text>
                            <Text style={styles.txt}>Costo de productos</Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.txt}>Costo del envío</Text>
                            <Text style={styles.txt}>Costo de productos</Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.txt}>Total a pagar</Text>
                            <Text style={styles.txt}>Costo de productos</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.greenBtn}
                            onPress={() => { navigation.navigate('SuccesfulOrder') }}
                        >
                            <Text style={styles.blackTxt}>
                                PAGAR
                            </Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </View>
        </>
    );
}

export default Pay;