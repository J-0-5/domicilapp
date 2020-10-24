import React from 'react';
import {
    View,
    ScrollView,
} from 'react-native';

import styles from './styles';
import Header from '../../components/header';
import Address from '../../components/address';
import OrderSummary from '../../components/orderSummary';


const OrdersDetails = ({ route }) => {

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
                        <OrderSummary
                            orders={orders}
                        />
                    </ScrollView>

                </View>
            </View>

        </>
    );
}

export default OrdersDetails;