import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import YellowHeader from '../../components/yellowHeader';
import SearchBar from '../../components/searchBar';
import NavBar from '../../components/navBar';
import Filter from '../../components/filter';
import RestaurantCard from '../../components/restaurantCard';
import Space from '../../components/space';

import Promo from '../../assets/icons/promo.png';
//
import restaurants from '../../assets/places/restaurants';
//

const RestaurantHome = () => {

    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <RestaurantCard
                item={item}
            />
        );
    }

    return (
        <>

            <View
                style={styles.bg}
            >
                <YellowHeader
                    destination={() => { navigation.navigate('MyRestaurantBasket') }}
                />

                <View style={styles.scrollContainer}>

                    <ScrollView>
                        <Space />
                        <SearchBar />
                        <Filter />
                        <View style={styles.promo}>
                            <Image
                                source={Promo}
                            />
                        </View>
                        <Text
                            style={styles.title}
                        >RECOMENDADOS</Text>
                        <FlatList
                            data={restaurants}
                            renderItem={renderItem}
                            numColumns={2}
                        />

                    </ScrollView>
                </View>
            </View>

            <NavBar />
        </>
    );
}

export default RestaurantHome;