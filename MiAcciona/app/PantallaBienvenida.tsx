import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, TouchableOpacity, Image } from 'react-native';

export default function PantallaBienvenida({ onLogin }) {
  // Estado para manejar la visibilidad del modal
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      {/* Modal de Login */}
      <Modal
        animationType="fade" // Usamos fade para una animación suave
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Cierra el modal al presionar atrás
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              {/* Aquí se coloca la imagen a la izquierda de "MiAcciona" */}
              <Image source={require('../assets/images/adaptive-icon.png')} style={styles.logo} />
              <Text style={styles.modalTitle}>MiAcciona</Text>
            </View>
            
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              placeholderTextColor="#B0B0B0"
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry
              placeholderTextColor="#B0B0B0"
            />

            {/* Botón con el mismo tamaño que los inputs */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(false); // Cierra el modal
                onLogin(); // Llama a la función de login
              }}
            >
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro
  },
  modalContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderRadius: 20,
    width: 280, // Tamaño más pequeño para el modal
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  header: {
    flexDirection: 'row', // Para alinear la imagen y el texto en línea
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 20, // Imagen más pequeña
    height: 30,
    marginRight: 10,
  },
  modalTitle: {
    fontSize: 24, // Un tamaño de fuente más pequeño
    fontWeight: '700',
    color: '#333',
    fontFamily: 'Roboto',
  },
  input: {
    width: '100%',
    padding: 8, // Menos padding para hacerlo más pequeño
    marginBottom: 10, // Menos espacio entre los inputs
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    fontSize: 14, // Tamaño de fuente más pequeño
    color: '#333',
    backgroundColor: '#F5F5F5',
  },
  button: {
    backgroundColor: '#D50032',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: '100%', // Hace que el botón sea del mismo tamaño que los inputs
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#D50032',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
