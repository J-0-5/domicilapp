import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/header';

import Select from '../../components/select';
import { ScrollView } from 'react-native-gesture-handler';

const AllyRequest = () => {

    const navigation = useNavigation();

    const commerceType = [
        {
            label: "Comercio interior",
            value: "interior"
        },
        {
            label: "Comercio exterior",
            value: "exterior"
        }
    ]

    return (
        <>
            <View style={styles.bg}>

                <Header />
                <ScrollView>
                    <View
                        style={styles.form}
                    >
                        <Text
                            style={styles.lbl}
                        >
                            Tipo de comercio
                        </Text>
                        <Select
                            options={commerceType}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Nombre del dueño
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Apellido del dueño
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Nombre del negocio
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Dirección del negocio
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Telefono de contacto
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Correo electronico del dueño
                        </Text>
                        <TextInput
                            style={styles.entry}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Números de punto de venta
                        </Text>
                        <Select
                            options={commerceType}
                        />
                        <Text
                            style={styles.lbl}
                        >
                            Categoría del negocio
                        </Text>
                        <Select
                            options={commerceType}
                        />
                        <TouchableOpacity
                            style={styles.blackBtn}
                            //onPress={() => { navigation.navigate('CreateAccount') }}
                        >
                            <Text
                                style={styles.whiteTxt}
                            >
                                ENVIAR SOLICITUD
                        </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

export default AllyRequest;