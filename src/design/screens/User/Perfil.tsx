/* eslint-disable eol-last */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/appTheme';

const Perfil = () => {
    return (
        <View style={styles.fondo}>
            {/* HeaderOrangeBar */}
            <View style={styles.Headerapp}>
                <Text style={styles.text}> Perfil </Text>
            </View>


            {/* FotoProfile + Text */}
            <Text> IMGprofile </Text>
            <Text>Hola! {'name ' + 'apellido'} </Text>

            <Button color='black'
                title="Cambiar Foto" />


            <Button color='black'
                title="Cerrar Session" />

            <Button color='red'
                title="Desactivar Cuenta" />                

        </View>

    );
};

export default Perfil;