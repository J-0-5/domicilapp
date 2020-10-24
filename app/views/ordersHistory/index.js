import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/header';
import ProfileMenu from '../../components/profileMenu';
import OrderCard from '../../components/orderCard';
import i1 from '../../assets/icons/profileData.png';
import i2 from '../../assets/icons/ordersHistory_focus.png';
import i3 from '../../assets/icons/myAddresses.png';
import i4 from '../../assets/icons/paymentMethods.png';
//
import historial from '../../assets/productos/historial';
//

const OrdersHistory = () => {

    const navigation = useNavigation();

    const Card = ({ item }) => {

        return (
            <OrderCard
                item={item}
                action={() => { navigation.navigate('OrdersDetails', item) }}
            />
        );
    }

    return (
        <>
            <View style={styles.bg}>
                <Header />
                <ProfileMenu
                    first={i1}
                    second={i2}
                    third={i3}
                    fourth={i4}
                />
                <FlatList
                    data={historial}
                    renderItem={Card}
                    keyExtractor={historial => historial.ref}
                />
            </View>

        </>
    );
}

export default OrdersHistory;