import { NavigationContainer } from '@react-navigation/native';
import { theme } from '../themes/inex';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Casa from '../Screens/Casa';
import Categorias from '../Screens/Categorias';
import Ahorro from '../Screens/Ahorro';

const Stack = createNativeStackNavigator();

function Navigation() {


  return (
    <NavigationContainer theme={theme}>
      <StatusBar style='light'/>
      <Stack.Navigator>
      <Stack.Screen name="Casa" component={Casa} options={{headerShown:false}}/>
      <Stack.Screen name="Categorias" component={Categorias} />
      <Stack.Screen name="Ahorro" component={Ahorro} />
    </Stack.Navigator>
   
    </NavigationContainer>
  
  );
}

export default Navigation;