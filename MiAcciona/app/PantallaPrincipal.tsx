import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Appbar, Card, Button, IconButton } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Definir los tipos para las rutas de navegación
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  About: undefined;
};

// Tipos para las props de navegación
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

// Datos para el carrusel de tarjetas
const featuredItems = [
  {
    id: "1",
    title: "Nueva Incidencia",
    description: "Reporta una nueva incidencia rápidamente.",
    image: require("../assets/images/imagen1.jpeg"),
  },
  {
    id: "2",
    title: "Solicitar Vacaciones",
    description: "Planifica tus vacaciones con facilidad.",
    image: require("../assets/images/imagen2.jpg"),
  },
  {
    id: "3",
    title: "Ver Reportes",
    description: "Consulta tus reportes en tiempo real.",
    image: require("../assets/images/imagen3.jpg"),
  },
];

const PantallaPrincipal: React.FC<Props> = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const slideAnim = useState(new Animated.Value(-250))[0];

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(slideAnim, {
        toValue: -250,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  // Renderizar cada tarjeta del carrusel
  const renderFeaturedItem = ({ item }: { item: any }) => (
    <Card style={styles.card}>
      <Card.Cover source={item.image} style={styles.cardImage} resizeMode="cover" />
      <Card.Title title={item.title} titleStyle={styles.cardTitle} />
      <Card.Content>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          onPress={() => {
            if (item.title === "Nueva Incidencia") navigation.navigate("Profile");
            else if (item.title === "Ver Reportes") navigation.navigate("Settings");
            else if (item.title === "Solicitar Vacaciones") navigation.navigate("About");
          }}
          style={styles.cardButton}
          labelStyle={styles.cardButtonLabel}
        >
          Ver más
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Appbar */}
        <Appbar.Header style={styles.appbar}>
          <Appbar.Action icon="menu" color="white" onPress={toggleMenu} />
          <Appbar.Content title="MiAcciona" titleStyle={styles.title} />
          <Appbar.Action
            icon="account"
            color="white"
            onPress={() => navigation.navigate("Profile")}
          />
        </Appbar.Header>

        {/* Menú deslizante */}
        <Modal visible={menuVisible} transparent animationType="none">
          <View style={styles.menuOverlay}>
            <Animated.View
              style={[
                styles.menuContainer,
                { transform: [{ translateX: slideAnim }] },
              ]}
            >
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  navigation.navigate("Profile");
                  toggleMenu();
                }}
              >
                <Text style={styles.menuText}>Incidencias</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  navigation.navigate("Settings");
                  toggleMenu();
                }}
              >
                <Text style={styles.menuText}>Reportes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  navigation.navigate("About");
                  toggleMenu();
                }}
              >
                <Text style={styles.menuText}>Vacaciones</Text>
              </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity style={styles.overlay} onPress={toggleMenu} />
          </View>
        </Modal>

        {/* Contenido principal */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Logo centrado */}
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/Logo_aplicacion.png")}
              style={styles.logo}
            />
          </View>

          {/* Texto de bienvenida */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>¡Bienvenido a MiAcciona!</Text>
            <Text style={styles.welcomeSubtitle}>
              Gestiona tus incidencias, reportes y vacaciones de manera eficiente.
            </Text>
          </View>

          {/* Acciones rápidas */}
          <View style={styles.quickActionsContainer}>
            <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
            <View style={styles.quickActions}>
              <Button
                mode="contained"
                icon="alert-circle"
                onPress={() => navigation.navigate("Profile")}
                style={styles.quickActionButton}
                labelStyle={styles.quickActionButtonLabel}
              >
                Nueva Incidencia
              </Button>
              <Button
                mode="contained"
                icon="calendar"
                onPress={() => navigation.navigate("About")}
                style={styles.quickActionButton}
                labelStyle={styles.quickActionButtonLabel}
              >
                Solicitar Vacaciones
              </Button>
            </View>
          </View>

          {/* Carrusel de destacados */}
          <View style={styles.carouselContainer}>
            <Text style={styles.sectionTitle}>Destacados</Text>
            <FlatList
              data={featuredItems}
              renderItem={renderFeaturedItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToAlignment="center"
              decelerationRate="fast"
              snapToInterval={280 + 10} // Ajustado para pantallas pequeñas
              contentContainerStyle={styles.carousel}
            />
          </View>

          {/* Información adicional */}
          <View style={styles.infoContainer}>
            <Text style={styles.sectionTitle}>Acerca de MiAcciona</Text>
            <Text style={styles.infoText}>
              MiAcciona es tu herramienta para simplificar la gestión diaria en Acciona. Reporta incidencias, consulta reportes y planifica tus vacaciones desde un solo lugar.
            </Text>
            <Button
              mode="outlined"
              onPress={() => navigation.navigate("About")}
              style={styles.infoButton}
              labelStyle={styles.infoButtonLabel}
            >
              Saber más
            </Button>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
  },
  appbar: {
    backgroundColor: "#D50032",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  welcomeContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#D50032",
    textAlign: "center",
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  quickActionsContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D50032",
    marginBottom: 10,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quickActionButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#D50032",
  },
  quickActionButtonLabel: {
    color: "#fff",
    fontSize: 14,
  },
  carouselContainer: {
    marginBottom: 20,
  },
  carousel: {
    paddingHorizontal: 15,
  },
  card: {
    width: 280,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D50032",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
  },
  cardButton: {
    backgroundColor: "#D50032",
  },
  cardButtonLabel: {
    color: "#fff",
  },
  infoContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginBottom: 15,
  },
  infoButton: {
    borderColor: "#D50032",
  },
  infoButtonLabel: {
    color: "#D50032",
  },
  menuOverlay: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  menuContainer: {
    width: 250,
    backgroundColor: "#fff",
    paddingTop: 50,
    height: "100%",
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: {
    fontSize: 18,
    color: "#D50032",
  },
  overlay: {
    flex: 1,
  },
});

export default PantallaPrincipal;