import React from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/header';
import Bg from '../../assets/icons/bg2.png';

const Problems = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.bg}>
                <Header />
                <View style={styles.container}>
                    <View
                        style={styles.txtContainer}>
                        <Text style={styles.title}>¿Tienes problemas para iniciar sesión?</Text>
                        <Text style={styles.txt}>
                            Ingresa tu nombre de usuario o correo electrónico y te enviaremos un código para que recueperes el acceso a tu cuenta.
                        </Text>
                    </View>
                    <TextInput
                        style={styles.entry}
                        placeholder={'Nombre de usuario o correo electrónico'}
                        inlineImageLeft='user'
                        inlineImagePadding={25}
                    //onChangeText={(text) => this.setState({text})}
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => { navigation.navigate('EnterCode') }}
                    >
                        <Text style={styles.whiteTxt}> ENVIAR CÓDIGO DE ACCESO </Text>
                    </TouchableOpacity>
                    <Pressable
                        style={styles.txtContainer}
                        onPress={() => { navigation.navigate('Login') }}
                    >
                        <Text style={styles.lbl}> Volver al inicio de sesión</Text>
                    </Pressable>
                </View>
                <View style={styles.footer}>
                    <Image resizeMode={'contain'} source={Bg} />
                </View>
            </View>
        </>
    );
}

export default Problems;