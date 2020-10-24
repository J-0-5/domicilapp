import React from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
} from 'react-native';

import styles from './styles';
import Header from '../../components/header';
import Address from '../../components/address';
import OrderSummary from '../../components/orderSummary';
import clock from '../../assets/icons/clock.png';


const OrderStatus = ({ route }) => {

    const orders = route.params;


    return (
        <>
            <View style={styles.bg}>
                <Header />
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Address
                            dir={orders.direccion}
                        />
                        <View style={styles.container}>
                            <View style={styles.subContainer}>
                                <Image
                                    source={clock}
                                />
                                <Text style={styles.txt}>Tiempo de entrega</Text>
                            </View>
                            <Text style={styles.boldTxt}>{orders.tiempoEntrega} min</Text>
                        </View>
                        <OrderSummary
                            orders={orders}
                        />
                    </ScrollView>
                </View>
            </View>

        </>
    );
}

export default OrderStatus;