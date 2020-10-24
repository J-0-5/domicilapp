import React from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    Image,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/header';
import Ft from '../../assets/icons/ft.png';

const Login = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.bg}>
                <Header />
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>
                        INICIO DE SESIÓN
                    </Text>
                </View>

                <View style={styles.container}>

                    <TextInput
                        style={styles.entry}
                        placeholder={'Usuario'}
                        inlineImageLeft='user'
                        inlineImagePadding={30}
                    //onChangeText={(text) => this.setState({text})}
                    />

                    <TextInput
                        style={styles.entry}
                        placeholder={'Contraseña'}
                        inlineImageLeft='lock'
                        inlineImagePadding={30}
                        secureTextEntry={true}
                    //onChangeText={(text) => this.setState({text})}
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => { navigation.navigate('Home') }}
                    >
                        <Text style={styles.whiteTxt}>
                            INGRESAR
                        </Text>
                    </TouchableOpacity>
                </View>
                <Pressable
                    style={styles.txtContainer}
                    onPress={() => { navigation.navigate('Problems') }}
                >
                    <Text style={styles.lbl}>¿Olvidaste tu Contraseña?</Text>
                </Pressable>
                <View style={styles.txtContainer}>
                    <Text style={styles.lbl}>¿Aún no te has registrado?</Text>
                    <Pressable onPress={() => { navigation.navigate('CreateAccount') }}>
                        <Text style={styles.blackTxt}>Registrate</Text>
                    </Pressable>
                </View>
                <Image
                    resizeMode={'contain'}
                    source={Ft}
                    style={styles.img}
                />
            </View>

        </>
    );
}

export default Login;