import React, { useState } from 'react';
import PantallaBienvenida from './PantallaBienvenida';
import PantallaPrincipal from './PantallaPrincipal';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función que cambia el estado de inicio de sesión
  const handleLogin = () => {
    setIsLoggedIn(true); // Cambia el estado a true cuando el usuario inicie sesión
  };

  return (
    <>{!isLoggedIn ? <PantallaBienvenida onLogin={handleLogin} /> : <PantallaPrincipal />}</>
  );
}
