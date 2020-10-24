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
import AddCard from '../../components/addCard';
import Space from '../../components/space';
import InfoHeader from '../../components/infoHeader';
import Button from '../../components/button';
import header from '../../assets/icons/_pruebaPDetails.png';
//
import canasta from '../../assets/productos/canasta';
//
//
import descuentos from '../../assets/productos/descuentos';
//

const ProductDetails = ({ route }) => {

    const navigation = useNavigation();
    const [counter, setCounter] = useState(1);
    const [total, setTotal] = useState(0);

    const products = route.params;

    const renderItem = ({ item }) => {
        return (
            <AddCard
                item={item}
                color={'#008D86'}
            />
        );
    }

    const handleUp = () => {
        setCounter(counter + 1);
        //setTotal(total + food.cost);
    }

    const handleDown = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            //setTotal(total - food.cost);
        }
    }

    return (
        <>
            <View style={styles.bg}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <InfoHeader destination={() => { navigation.navigate('MySupermarketBasket') }} />
                    <Space/>
                    <View style={styles.margin}>
                        <View style={styles.header}>
                            <Image
                                resizeMode={'contain'}
                                source={header}
                            />
                        </View>
                        <Text style={styles.boldLbl}>{products.title}</Text>
                        <View style={styles.container}>
                            <Text style={styles.redLbl}>
                                <Format value={products.gross_price} />
                            </Text>
                            <Text style={styles.txt}>
                                {products.description}
                            </Text>
                        </View>
                        <Space/>
                        <Text style={styles.uni}>UNIDADES</Text>
                        <View style={styles.btnContainer}>

                            <View style={styles.counterContainer}>
                                <Button label="-" action={() => handleDown()} />
                                <Text style={styles.counter}>{counter}</Text>
                                <Button label="+" action={() => handleUp()} />
                            </View>

                            <TouchableOpacity
                                style={styles.btn}
                            //onPress={() => { navigation.navigate('Home') }}
                            >
                                <Text style={styles.blackTxt}>LO QUIERO</Text>
                            </TouchableOpacity>
                        </View>
                        <Space/>
                        <Space/>
                        <Text style={styles.title}>
                            PRODUCTOS RELACIONADOS
                        </Text>
                        <Space/>
                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={descuentos}
                        renderItem={renderItem}
                        keyExtractor={descuentos => descuentos.title + descuentos.discount_rate}
                    />
                    <Space/>
                </ScrollView>

            </View>
        </>
    );
}

export default ProductDetails;