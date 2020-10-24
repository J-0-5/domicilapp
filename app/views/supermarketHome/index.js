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
import OffCard from '../../components/offCard';
import Space from '../../components/space';

import Promo from '../../assets/icons/promo.png';
//
import descuentos from '../../assets/productos/descuentos';
//

const SuperMarketHome = () => {

    const navigation = useNavigation();

    const renderItem = ({ item }) => {
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

    return (
        <>

            <View style={styles.bg}>
                <YellowHeader destination={() => { navigation.navigate('MySupermarketBasket') }} />

                <View style={styles.scrollContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Space />
                        <SearchBar />
                        <Space />

                        <Image
                            style={styles.promo}
                            resizeMode={'contain'}
                            source={Promo}
                        />
                        <Text style={styles.title}>RECOMENDADOS</Text>

                        <View style={styles.placeContainer}>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Supermarket') }}
                                style={styles.place}
                            >
                                <Image source={require('../../assets/icons/exito.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Supermarket') }}
                                style={styles.place}
                            >
                                <Image source={require('../../assets/icons/carulla.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Supermarket') }}
                                style={styles.place}
                            >
                                <Image source={require('../../assets/icons/priceSmart.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Supermarket') }}
                                style={styles.place}
                            >
                                <Image source={require('../../assets/icons/olimpica.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Supermarket') }}
                                style={styles.place}
                            >
                                <Image source={require('../../assets/icons/sao.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Supermarket') }}
                                style={styles.place}
                            >
                                <Image source={require('../../assets/icons/jumbo.png')} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.title}>SUPER OFERTAS</Text>
                        <FlatList
                            horizontal={true}
                            data={descuentos}
                            renderItem={renderItem}
                            keyExtractor={descuentos => descuentos.title + descuentos.discount_rate}
                        />

                    </ScrollView>
                </View>
            </View>

            <NavBar />
        </>
    );
}

export default SuperMarketHome;