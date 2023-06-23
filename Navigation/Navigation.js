import { NavigationContainer } from '@react-navigation/native';
import { theme } from '../themes/inex';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Casa from '../Screens/Casa';
import Categorias from '../Screens/Categorias';

const Stack = createNativeStackNavigator();

function Navigation() {


  return (
    <NavigationContainer theme={theme}>
      <StatusBar style='light'/>
      <Stack.Navigator>
      <Stack.Screen name="Casa" component={Casa} options={{headerShown:false}}/>
      <Stack.Screen name="Categorias" component={Categorias} />
    </Stack.Navigator>
   
    </NavigationContainer>
  
  );
}

export default Navigation;