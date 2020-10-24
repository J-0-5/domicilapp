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
import Basket from '../../components/basket';
import SearchBar from '../../components/searchBar';
import NavBar from '../../components/navBar';
import DiscountCard from '../../components/discountCard';

import L5 from '../../assets/icons/logo5.png';
import Bg from '../../assets/icons/unionBg.png';
import Promo from '../../assets/icons/promo.png';
import Super from '../../assets/icons/superMarkets.png';
import restaurant from '../../assets/icons/restaurant.png';
//
import descuentos from '../../assets/productos/descuentos';
import P1 from '../../assets/icons/_pruebaPromo1.png';
import P2 from '../../assets/icons/_pruebaPromo2.png';
import P3 from '../../assets/icons/_pruebaPromo3.png';
//

const Home = () => {

    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        let { title, description, gross_price, discount_rate } = item;
        return (
            <DiscountCard
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

                <ScrollView>
                    <View style={styles.head}>
                        <View style={styles.header}>
                            <Image
                                resizeMode={'contain'}
                                source={L5}
                            />

                            <Basket destination={() => { navigation.navigate('MyRestaurantBasket') }} />
                        </View>

                        <SearchBar />

                        <Image
                            resizeMode={'contain'}
                            source={Bg}
                            style={styles.union}
                        />
                    </View>

                    <Image
                        style={styles.promo}
                        resizeMode={'contain'}
                        source={Promo}
                    />

                    <View style={styles.placeContainer}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('SupermarketHome') }}
                            style={styles.place}
                        >
                            <Image
                                resizeMode={'contain'}
                                source={Super}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('RestaurantHome') }}
                            style={styles.place}
                        >
                            <Image
                                resizeMode={'contain'}
                                source={restaurant}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.placeContainer}>
                        <Text style={styles.lbl1}>Supermercados</Text>
                        <Text style={styles.lbl2}>Restaurantes</Text>
                    </View>
                    <Text style={styles.title}>LOS MEJORES DESCUENTOS PARA TI</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={descuentos}
                        renderItem={renderItem}
                        keyExtractor={descuentos => descuentos.title + descuentos.discount_rate}
                    />
                    <Text style={styles.title}>LAS MEJORES OFERTAS</Text>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    >
                        <Image source={P1} style={styles.promoPrueba} />
                        <Image source={P2} style={styles.promoPrueba} />
                        <Image source={P3} style={styles.promoPrueba} />
                    </ScrollView>
                </ScrollView>
            </View>
            <NavBar />
        </>
    );
}

export default Home;