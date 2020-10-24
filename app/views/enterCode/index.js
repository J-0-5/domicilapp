import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    Image,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CodeInput from 'react-native-confirmation-code-input';

import styles from './styles';
import BackButton from '../../components/backButton';
import L4 from '../../assets/icons/logo4.png';

const EnterCode = () => {

    const navigation = useNavigation();

    const [code, setCode] = useState(0)

    return (
        <>
            <View style={styles.bg}>
                <View style={styles.header}
                >
                    <BackButton />
                    <Image
                        resizeMode={'contain'}
                        source={L4}
                        style={styles.img}
                    />
                </View>

                <View style={styles.topContainer}>
                    <Text style={styles.txt}>
                        Por seguridad hemos enviado un código de 6 dígitos a tu correo electrónico.
                    </Text>
                    <Text style={styles.title}>
                        INGRESA EL CÓDIGO
                    </Text>
                </View>

                <View style={styles.entry}>
                    <CodeInput
                        caretHidden={true}
                        keyboardType="numeric"
                        codeLength={6}
                        className='border-circle'
                        compareWithCode='123456'
                        activeColor='#EC1A39'
                        inactiveColor='#000000'
                        autoFocus={true}
                        inputPosition='center'
                        size={50}
                        onFulfill={(isValid, code) => setCode(1)}
                    />
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.lbl}>
                        No recibí el código,
                    </Text>
                    <Pressable>
                        <Text style={styles.blackTxt}>
                            REENVIAR
                        </Text>
                    </Pressable>
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { navigation.navigate('Home') }}
                >
                    <Text style={styles.whiteTxt}>
                        VERIFICAR
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default EnterCode;