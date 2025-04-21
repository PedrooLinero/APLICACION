import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function PantallaPrincipal() {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Action icon="menu" color="white" onPress={() => console.log('Menú')} />
        
        {/* Aquí se agrega la imagen */}
        <Appbar.Content
          title={
            <Image
              source={require('../assets/images/favicon.png')} // Ruta de la imagen
              style={styles.logo} // Tamaño del logo
            />
          }
        />
        
        <Appbar.Action icon="magnify" color="white" onPress={() => console.log('Buscar')} />
      </Appbar.Header>

      {/* Vista principal después del login */}
      <View style={styles.container}>
        <Text style={styles.texto}>¡Bienvenido a la app de Acciona!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#D50032', // Rojo Acciona
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});
