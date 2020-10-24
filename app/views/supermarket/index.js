import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import Format from '../../assets/functions/formatNumber';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import InfoHeader from '../../components/infoHeader';
import SearchBar from '../../components/searchBar';
import NavBar from '../../components/navBar';
import Filter from '../../components/filter';
import AddCard from '../../components/addCard';
import OffCard from '../../components/offCard';
import Space from '../../components/space';
import Divider from '../../components/divider';
import heart from '../../assets/icons/heart.png';
//
import canasta from '../../assets/productos/canasta';
//
//
import descuentos from '../../assets/productos/descuentos';
//
//
import restaurants from '../../assets/places/restaurants';
//

const Supermarket = () => {

    const navigation = useNavigation();

    const discount = ({ item }) => {
        let { title, description, gross_price, discount_rate } = item;
        return (
            <OffCard
                title={title}
                description={description}
                gross_price={gross_price}
                discount_rate={discount_rate}
            />
        );
    }

    const popular = ({ item }) => {

        return (
            <AddCard
                item={item}
                color={'#524646'}
                action={() => { navigation.navigate('ProductDetails', item) }}
            />
        );
    }

    return (
        <>

            <View style={styles.bg}>

                <View style={styles.scrollContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <InfoHeader destination={() => { navigation.navigate('MySupermarketBasket') }} />
                        <Space />
                        <SearchBar />
                        <Filter />
                        <Space />
                        <View style={styles.margin}>
                            <Text style={styles.title}>SUPER OFERTAS</Text>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={descuentos}
                                renderItem={discount}
                            />
                            <Divider />
                            <View style={styles.row}>
                                <Text style={styles.title}>LOS MAS POPULARES</Text>
                                <Image resizeMode={'contain'} source={heart} />
                            </View>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={descuentos}
                                renderItem={popular}
                            />
                            <Divider />
                            <View style={styles.row}>
                                <Text style={styles.title}>CARNES Y PESCADOS</Text>
                            </View>

                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={descuentos}
                                renderItem={popular}
                            />

                        </View>
                    </ScrollView>
                </View>
            </View>

            <NavBar />
        </>
    );
}

export default Supermarket;