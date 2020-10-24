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
import Space from '../../components/space';
import Divider from '../../components/divider';
import NavBar from '../../components/navBar';
import redBasket from '../../assets/icons/redBasket.png';
import BasketCard from '../../components/basketCard';
import SuggestCard from '../../components/suggestCard';

//
import historial from '../../assets/productos/historial';
//
//
import descuentos from '../../assets/productos/descuentos';
//

const MySupermarketBasket = () => {

    const navigation = useNavigation();


    const Card = ({ item, index }) => {

        return (
            <BasketCard
                item={item.pedido[1]}
            //action={() => { navigation.navigate('OrdersDetails', item) }}
            />
        );
    }

    const Suggest = ({ item, index }) => {

        return (
            <SuggestCard
                item={item}
            //action={() => { navigation.navigate('OrdersDetails', item) }}
            />
        );
    }


    return (
        <>
            <View style={styles.bg}>
                <BackButton />

                <View style={styles.margin}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.header}>
                            <Image
                                resizeMode={'contain'}
                                source={redBasket}
                            />
                            <Text style={styles.title}>MI CANASTA</Text>
                        </View>

                        <View style={styles.topContainer}>
                            <Text style={styles.title}>PRODUCTOS</Text>
                        </View>

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={historial}
                            renderItem={Card}
                            keyExtractor={historial => historial.ref}
                        />
                        <View style={styles.subContainer}>
                            <Text style={styles.txt}>Subtotal</Text>
                            <Text style={styles.txt}><Format value={45000}/></Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.txt}>Costo del envio</Text>
                            <Text style={styles.txt}><Format value={4500}/></Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.txt}>IVA</Text>
                            <Text style={styles.txt}><Format value={3000}/></Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.blackTxt}>Total</Text>
                            <Text style={styles.blackTxt}><Format value={52500}/></Text>
                        </View>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => { navigation.navigate('WayToPay') }}
                        >
                            <Text style={styles.blackTxt}>
                                Siguiente
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.whiteBtn}
                        //onPress={() => { navigation.navigate('Home') }}
                        >
                            <Text style={styles.blackTxt}>
                                Limpiar Carrito
                            </Text>
                        </TouchableOpacity>
                        <Divider />
                       
                        <Text style={styles.title}>
                            ¿LLEVAS TODO?
                        </Text>
                        <Space/>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={descuentos}
                            renderItem={Suggest}
                        />
                    </ScrollView>
                </View>
            </View>
        </>
    );
}

export default MySupermarketBasket;