import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/header';
import addDoc from '../../assets/icons/addDoc.png';

const AttachSOAT = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.bg}>

                <Header />
                <ScrollView>
                    <View
                        style={styles.form}
                    >

                        <Text style={styles.lbl}>Agrega la parte {<Text style={styles.bold}>frontal</Text>} de tu documento de identidad</Text>

                        <View style={styles.container}>
                            <TouchableOpacity>
                                <Image
                                    source={addDoc}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.lbl}>Agrega la parte {<Text style={styles.bold}>posterior</Text>} de tu documento de identidad</Text>

                        <View style={styles.container}>
                            <TouchableOpacity>
                                <Image
                                    source={addDoc}
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={styles.blackBtn}
                        //onPress={() => { navigation.navigate('CreateAccount') }}
                        >
                            <Text
                                style={styles.whiteTxt}
                            >
                                GUARDAR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

export default AttachSOAT;