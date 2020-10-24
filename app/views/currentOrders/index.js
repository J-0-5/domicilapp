import React from 'react';
import {
    View,
    FlatList,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/header';
import OrderCard from '../../components/orderCard';
//
import estadoProducto from '../../assets/productos/estadoProducto';
//

const CurrentOrders = () => {

    const navigation = useNavigation();

    const Card = ({ item }) => {

        return (
            <OrderCard
                item={item}
                action={() => { navigation.navigate('OrderStatus', item) }}
            />
        );
    }

    return (
        <>
            <View style={styles.bg}>
                <Header />
                <FlatList
                    data={estadoProducto}
                    renderItem={Card}
                    keyExtractor={estadoProducto => estadoProducto.ref}
                />
            </View>

        </>
    );
}

export default CurrentOrders;