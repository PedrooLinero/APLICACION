import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import PantallaPrincipal, { RootStackParamList } from './PantallaPrincipal';

// Pantallas de ejemplo
const ProfileScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.texto}>Perfil de Usuario</Text>
  </View>
);

const SettingsScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.texto}>Reportes</Text>
  </View>
);

const AboutScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.texto}>Vacaciones</Text>
  </View>
);

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={PantallaPrincipal} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
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

export default App;