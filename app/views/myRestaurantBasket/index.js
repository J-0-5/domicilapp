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
import AddCard from '../../components/addCard';
import Divider from '../../components/divider';
import NavBar from '../../components/navBar';
import redBasket from '../../assets/icons/redBasket.png';
//
import canasta from '../../assets/productos/canasta';
//
//
import descuentos from '../../assets/productos/descuentos';
//
//
import detalles from '../../assets/productos/detalles';
//

const MyRestaurantBasket = () => {

    const navigation = useNavigation();

    const { name, description, price, skip, sauces_extras, sauces, extras, drinks } = detalles;

    const renderItem = ({ item }) => {
        return (
            <AddCard
                item={item}
                color={'#194000'}
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
                                style={styles.img}
                            />
                            <Text style={styles.title}>
                                MI CANASTA
                            </Text>
                        </View>

                        <View style={styles.topContainer}>
                            <Text style={styles.title}>
                                PRODUCTOS
                            </Text>
                        </View>

                        <View style={styles.secondContainer}>
                            <Text style={styles.boldLbl}>
                                {name}
                            </Text>
                            <Text style={styles.redLbl}>
                                <Format value={price} />
                            </Text>
                        </View>
                        {canasta.map(e => (
                            <View>
                                <Divider />
                                <Text style={styles.txt}> {e.producto} </Text>
                            </View>
                        ))}
                        <Divider />
                        <View style={styles.header} />
                        <Text style={styles.title}>
                            ¿QUÉ TAL UN ÚLTIMO ANTOJO?
                        </Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={descuentos}
                            renderItem={renderItem}
                            keyExtractor={descuentos => descuentos.title + descuentos.discount_rate}
                        />
                        <TouchableOpacity
                            style={styles.btn}
                        //onPress={() => { navigation.navigate('Home') }}
                        >
                            <Text style={styles.whiteTxt}>
                                PAGAR
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
            <NavBar />
        </>
    );
}

export default MyRestaurantBasket;