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
import notification from '../../assets/icons/notification.png';

const SuccesfulOrder = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.bg}>
                
                <View style={styles.container}>
                    <Image
                        resizeMode={'contain'}
                        source={notification}
                    />
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Splash') }}
                        style={styles.wBtn}>
                        <Text style={styles.lbl}>SALIR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        //onPress={() => { navigation.navigate('Splash') }}
                        style={styles.yBtn}>
                        <Text style={styles.lbl}>HACER OTRO PEDIDO</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    );
}

export default SuccesfulOrder;