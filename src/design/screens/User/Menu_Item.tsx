
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';


const Perfil = () => {
    return (

        <View>
            <Text> hola  </Text>
            <Image style={ styles.Image } source={require("/Users/tomasorobio/Desktop/AwesomeTSProject/src/assets/images/Resto.jpg")}/>



        </View>

    );
};

const styles = StyleSheet.create({
    Image:{
        borderRadius: 30,
        width:100,
        height: 100,
        flex: 1,
    },

}
);

export default Perfil;