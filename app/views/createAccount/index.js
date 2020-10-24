import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import BackButton from '../../components/backButton';

import L2 from '../../assets/icons/logo2.png';

const CreateAccount = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.bg}>
                <View style={styles.header}>
                    <BackButton />
                    <Image
                        source={L2}
                        resizeMode={'contain'}
                        style={styles.img}
                    />
                </View>
                <View style={styles.form}>
                    <Text style={styles.lbl}>
                        Nombres
                    </Text>
                    <TextInput style={styles.entry} />
                    <Text style={styles.lbl}>
                        Apellidos
                    </Text>
                    <TextInput style={styles.entry} />
                    <Text style={styles.lbl}>
                        Número de identidad
                    </Text>
                    <TextInput style={styles.entry} />
                    <Text style={styles.lbl}>
                        Email
                    </Text>
                    <TextInput style={styles.entry} />
                    <Text style={styles.lbl}>
                        Número de celular
                    </Text>
                    <TextInput style={styles.entry} />
                    <Text style={styles.lbl}>
                        Fecha de nacimiento
                    </Text>
                    <TextInput style={styles.entry} />
                    <TouchableOpacity
                        style={styles.blackBtn}
                        onPress={() => { navigation.navigate('CreateAccount') }}
                    >
                        <Text style={styles.whiteTxt}>
                            GUARDAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default CreateAccount;