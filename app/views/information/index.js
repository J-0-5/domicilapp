import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/backButton';

import styles from './styles';
import L7 from '../../assets/icons/logo7.png';
import location from '../../assets/icons/blackLocation.png';
import ico from '../../assets/icons/¿.png';
import L8 from '../../assets/icons/logo8.png';

const Information = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.bg}>
                <View style={styles.container}>
                    <BackButton />
                    <Image
                        resizeMode={'contain'}
                        source={L7}
                        style={styles.L7}
                    />
                </View>
                <Text
                    style={styles.blackTxt}
                >
                    ESTAMOS PARA AYUDARTE
                </Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { navigation.navigate('HowToOrder') }}
                >
                    <Image
                        resizeMode={'contain'}
                        source={location}
                    />
                    <Text
                        style={styles.txt}
                    >
                        ¿Cómo hacer un pedido?
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { navigation.navigate('CoverArea') }}
                >
                    <Image
                        resizeMode={'contain'}
                        source={ico}
                    />
                    <Text
                        style={styles.txt}
                    >
                        ¿Cuál es la cobertura?
                </Text>
                </TouchableOpacity>
                <Image
                    resizeMode={'contain'}
                    source={L8}
                    style={styles.L8}
                />
            </View>

        </>
    );
}

export default Information;