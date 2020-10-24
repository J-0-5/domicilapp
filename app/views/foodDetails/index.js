import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import Format from '../../assets/functions/formatNumber';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import close from '../../assets/icons/close.png';
import check from '../../assets/icons/check.png';
import Space from '../../components/space';
import Divider from '../../components/divider';
import NavBar from '../../components/navBar';
import Button from '../../components/button';
import header from '../../assets/icons/_detailsHeader.png';

//
import detalles from '../../assets/productos/detalles';
//

const FoodDetails = () => {

    const { name, description, price, skip, sauces_extras, sauces, extras, drinks } = detalles;
    const { mix: skipName, max: skipMax } = skip;
    const { sauces: SEName, price: SEPrice, max: SEMax } = sauces_extras;
    const { sauces: saucesName } = sauces;
    const { extra } = extras;
    const { drink } = drinks;

    const navigation = useNavigation();

    const [mixState, setMixState] = useState([])
    const [mixCounter, setMixCounter] = useState(0)
    const [counter, setCounter] = useState(1);
    const [checked, setChecked] = useState("")

    const action = name => {
        for (let i = 0; i <= mixState.length; i++) {
            if (name == mixState[i]) {
                let update = mixState.filter(mixState => mixState != name)
                return setMixState(update),
                    setMixCounter(mixCounter - 1);
            }
        }
        if (mixCounter < skipMax) {
            console.log(mixCounter)
            return setMixState([...mixState, name]),
                setMixCounter(mixCounter + 1);
        }
    }

    const checkin = (item) => {
        for (let i = 0; i <= mixState.length; i++) {
            if (item.name == mixState[i]) {
                return (
                    <TouchableOpacity
                        onPress={() => action(item.name)}
                        style={styles.radioChecked}
                    />
                );
            }
        }
        return (
            <TouchableOpacity
                style={styles.radio}
                onPress={() => action(item.name)}
            />
        );
    }

    const customize = ({ item }) => {
        return (
            <>
                <View style={styles.row}>
                    <Text style={styles.lbl}>Sin {item.name} </Text>

                    {checkin(item)}
                </View>
                <Divider />
            </>
        );
    }

    const add = ({ item }) => {
        return (
            <>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.lbl}>{item.name} </Text>
                        <Text>+ <Format value={SEPrice} /> </Text>
                    </View>

                    <View style={styles.counterContainer}>
                        <Button label="-" action={() => handleDown()} />
                        <Text style={styles.counter}>{counter}</Text>
                        <Button label="+" action={() => handleUp()} />
                    </View>

                </View>
                <Divider />
            </>
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

    const checkDrink = (name) => {
        if (name == checked) {
            return (
                <Image
                    resizeMode={'contain'}
                    source={check}
                />
            );
        }
    }

    const Card = ({ item }) => {

        let { name, price } = item;
        return (
            <>
                <TouchableOpacity
                    style={styles.row}
                    onPress={() => setChecked(name)}
                >

                    <View>
                        <Text style={styles.lbl}>{item.name} </Text>
                        <Text>+ <Format value={price} /> </Text>
                    </View>
                    {checkDrink(name)}
                </TouchableOpacity>
                <Divider />
            </>

        );
    }

    return (
        <>
            <View style={styles.bg}>

                <View style={styles.margin}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <Image resizeMode={'contain'} source={close} />
                        </TouchableOpacity>

                        <Image resizeMode={'contain'} source={header} />

                        <Space />
                        <View style={styles.details}>
                            <Text style={styles.boldLbl}>
                                {name}
                            </Text>
                            <Text style={styles.redLbl}>
                                <Format value={price} />
                            </Text>
                        </View>
                        <Text style={styles.txt}>
                            {description}
                        </Text>
                        <Space />
                        <Space />
                        <Text style={styles.boldLbl}>
                            Personaliza tu Hamburguesa
                        </Text>
                        <Text style={styles.txt}>
                            Seleciona máximo {skipMax} opciones
                        </Text>
                        <Space />
                        <FlatList
                            data={skipName}
                            renderItem={customize}
                            keyExtractor={skipName => skipName.name}
                        />
                        <Space />
                        <Space />
                        <Text style={styles.boldLbl}>
                            Elige tus salsas extras
                        </Text>
                        <Text style={styles.txt}>
                            Seleciona máximo {SEMax} opciones
                        </Text>
                        <Space />
                        <FlatList
                            data={SEName}
                            renderItem={add}
                            keyExtractor={SEName => SEName.name}
                        />
                        <Space />
                        <Space />
                        <Text style={styles.boldLbl}>
                            Elige tus salsas
                        </Text>
                        <Space />
                        <FlatList
                            data={saucesName}
                            renderItem={customize}
                            keyExtractor={saucesName => saucesName.name}
                        />
                        <Space />
                        <Space />
                        <Text style={styles.boldLbl}>
                            Elige tus extras
                        </Text>
                        <Text style={styles.txt}>
                            Esta seleccion es opcional
                        </Text>
                        <Space />
                        <FlatList
                            data={extra}
                            renderItem={add}
                            keyExtractor={extra => extra.name}
                        />
                        <Space />
                        <Space />
                        <Text style={styles.boldLbl}>
                            Acompaña tu Orden con
                        </Text>
                        <Space />
                        <FlatList
                            data={drink}
                            renderItem={Card}
                            keyExtractor={drink => drink.name}
                        />
                        <Space />
                        <Space />
                        <Text style={styles.boldLbl}>
                            COMENTARIOS
                        </Text>
                        <Space />
                        <TextInput
                            style={styles.entry}
                            placeholder={'Escribe instrucciones o comentarios'}
                        //numberOfLines={2}
                        />
                        <View style={styles.row}>
                            <View style={styles.counterContainer}>
                                <Button label="-" action={() => handleDown()} />
                                <Text style={styles.counter}>{counter}</Text>
                                <Button label="+" action={() => handleUp()} />
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                            //onPress={() => { navigation.navigate('Home') }}
                            >
                                <Text style={styles.whiteTxt}>
                                    AGREGAR
                            </Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </View>
            <NavBar />
        </>
    );
}

export default FoodDetails;