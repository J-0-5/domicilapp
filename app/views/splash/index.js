import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Bg from '../../assets/icons/bg.png';
import SBg from '../../assets/icons/shadow-bg.png';
import L1 from '../../assets/icons/logo1.png';

const Splash = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.bg}>
                <View style={styles.container}>
                    <ImageBackground
                        resizeMode={'contain'}
                        source={Bg}
                        style={styles.bgImg}
                    >
                        <Text style={styles.txt}>Te damos la bienvenida a</Text>
                        <Image
                            resizeMode={'contain'}
                            source={L1}
                            style={styles.logo}
                        />
                    </ImageBackground>
                    <Image resizeMode={'contain'} source={SBg} />
                </View>
                <TouchableOpacity
                    style={styles.showBtn}
                    onPress={() => { navigation.navigate('Home') }}
                >
                    <Text style={styles.blackTxt}>
                        VER PRODUCTOS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.registerBtn}
                    onPress={() => { navigation.navigate('CreateAccount') }}
                >
                    <Text style={styles.whiteTxt}>
                        REGISTRARSE
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => { navigation.navigate('Login') }}
                >
                    <Text
                        style={styles.blackTxt}
                    >
                        INICIAR SESIÓN
                </Text>
                </TouchableOpacity>
            </View>

        </>
    );
}

export default Splash;