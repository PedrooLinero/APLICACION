import { NativeBaseProvider } from "native-base";
import { GluestackUIProvider } from "./../components/ui/gluestack-ui-provider";
import PantallaCombinada from "./../src/navigation/screens/PantallaCombinada";

function App() {
  return (
    <NativeBaseProvider>
      <GluestackUIProvider mode="light">
        <PantallaCombinada />
      </GluestackUIProvider>
    </NativeBaseProvider>
  );
}

export default App;