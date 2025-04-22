import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, TouchableOpacity, Image, Dimensions, PixelRatio } from 'react-native';

// Ajuste del tamaño de la fuente según la densidad de píxeles
const scaleFont = (size) => size * PixelRatio.get() * 0.8; // Reducimos la escala para hacer las fuentes más pequeñas

export default function PantallaBienvenida({ onLogin }) {
  // Estado para manejar la visibilidad del modal
  const [modalVisible, setModalVisible] = useState(true);

  // Obtener el ancho de la pantalla
  const windowWidth = Dimensions.get('window').width;

  const scale = PixelRatio.get();

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
          <View style={[styles.modalContainer, { width: windowWidth * 0.85 }]}>
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
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 20,
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
    width: 30, // Imagen más grande para mejor visibilidad
    height: 50,
    marginRight: 10,
  },
  modalTitle: {
    fontSize: scaleFont(24), // Ajustamos el tamaño para hacerlo más pequeño
    fontWeight: '700',
    color: '#333',
    fontFamily: 'Roboto',
  },
  input: {
    width: '100%',
    padding: 12, // Aumenté el padding para hacer los inputs más grandes
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    fontSize: scaleFont(14), // Ajustamos el tamaño de los inputs
    color: '#333',
    backgroundColor: '#F5F5F5',
  },
  button: {
    backgroundColor: '#D50032',
    borderRadius: 20,
    paddingVertical: 12,
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
    fontSize: scaleFont(14), // Ajustamos el tamaño de la fuente del botón
    fontWeight: '600',
    letterSpacing: 1,
  },
});
