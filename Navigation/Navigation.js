import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Ingreso from '../Screens/Ingreso';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categorias from '../Screens/Categorias';



const Tab = createBottomTabNavigator();
const StackHome = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}>
     
      </Tab.Screen>
      <Tab.Screen name="Prueba" component={Categorias} />
    </Tab.Navigator>
    </NavigationContainer>
  
  );
}

export default Navigation;