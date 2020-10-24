import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/header';
import message from '../../assets/icons/message.png';

const SuccesfulTerms = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.bg}>
                <Header />
                <View style={styles.container}>
                <Image
                    resizeMode={'contain'}
                    source={message}
                />
                </View>
                
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Splash') }}
                        style={styles.btn}>
                        <Text style={styles.lbl}>SALIR</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    );
}

export default SuccesfulTerms;