import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../themes/inex';
import { Icon } from 'react-native-elements';



import Home from '../Screens/Home';
import Ingreso from '../Screens/Ingreso';
import Settings from '../Screens/Settings';
import Balances from '../Screens/Balances';

const Tab = createBottomTabNavigator();



const Casa = ({navigate}) =>{
    return(
    <Tab.Navigator 
         initialRouteName="home"
         tabBarOptions={{
           activeTintColor: theme.colors.primary,
           inactiveTintColor: theme.colors.secondary,
         }}
         screenOptions={{
           tabBarStyle: {
             backgroundColor:theme.colors.card,
           },
           //tabBarIcon: ({colors})=>screenOptions(route,colors)
           
         }}>
         <Tab.Screen
         options={{
           tabBarLabel: 'Home',
           tabBarIcon: ({ colors }) => (
             <Icon
               type="material-community"
               name="home"
               size={20}
               />),
   
               
               
         }}
          name="Home" component={Home}/>
         <Tab.Screen name="Ingreso" component={Ingreso} />
         <Tab.Screen name="Balances" component={Balances} />
         <Tab.Screen name="Settings" component={Settings} />
       </Tab.Navigator>
    );
}

export default Casa;