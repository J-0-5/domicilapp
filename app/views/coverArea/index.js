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

const CoverArea = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.bg}>

                <Header />
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.bold}>Zona de cobertura</Text>
                        <View style={styles.subContainer}>
                            <Text style={styles.lbl}>1- Ingresa a la categoría</Text>
                            <Text style={styles.lbl}>2- Selecciona el prodcucto</Text>
                            <Text style={styles.lbl}>3- xxxxxxxxxxxxxx</Text>
                            <Text style={styles.lbl}>4- xxxxxxxxxxxxxx</Text>
                            <Text style={styles.lbl}>5- xxxxxxxxxxxxxx</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

export default CoverArea;