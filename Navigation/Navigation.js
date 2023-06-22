import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Ingreso from '../Screens/Ingreso';
import { NavigationContainer } from '@react-navigation/native';
import Categorias from '../Screens/Categorias';
import { theme } from '../themes/inex';
import { StatusBar } from 'expo-status-bar';
import Settings from '../Screens/Settings';

//const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();
//const StackHome = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style='light'/>
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: {
          backgroundColor:theme.colors.card,
        },
        
      }}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Ingreso" component={Ingreso} />
      <Tab.Screen name="Categorias" component={Categorias} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    </NavigationContainer>
  
  );
}

export default Navigation;