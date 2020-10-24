import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import Space from '../../components/space';
import Format from '../../assets/functions/formatNumber';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import InfoHeader from '../../components/infoHeader';
import SearchBar from '../../components/searchBar';
import NavBar from '../../components/navBar';
import Filter from '../../components/filter';
import AddCard from '../../components/addCard';
import OffCard from '../../components/offCard';
import ComboCard from '../../components/comboCard';
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

const Restaurant = () => {

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
                color={'#707070'}
            />
        );
    }

    const combo = ({ item }) => {

        return (
            <ComboCard
                item={item}
            />
        );
    }

    return (
        <>

            <View style={styles.bg}>
                <InfoHeader
                    destination={() => { navigation.navigate('MyRestaurantBasket') }}
                />

                <View style={styles.scrollContainer}>
                    <ScrollView>
                        <Space />
                        <SearchBar />
                        <Filter />
                        <Space />
                        <Text style={styles.title}>DESCUENTOS</Text>
                        <FlatList
                            horizontal={true}
                            data={descuentos}
                            renderItem={discount}
                        />
                        <View style={styles.row}>
                            <Text style={styles.title}>LOS MAS POPULARES</Text>
                            <Image resizeMode={'contain'} source={heart} />
                        </View>
                        <FlatList
                            horizontal={true}
                            data={descuentos}
                            renderItem={popular}
                        />
                        <Space />
                        <Divider />
                        <Text style={styles.title}>SUPER COMBOS</Text>
                        <FlatList
                            data={descuentos}
                            renderItem={combo}
                        />

                    </ScrollView>
                </View>
            </View>
        </>
    );
}

export default Restaurant;