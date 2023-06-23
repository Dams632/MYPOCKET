import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../themes/inex';
import { Icon } from 'react-native-elements';



import ExpensesList from '../components/ExpensesList';
import Ingreso from '../Screens/Ingreso';
import Settings from '../Screens/Settings';
import Balances from '../Screens/Balances';
import { Expenses } from './Expenses';

const Tab = createBottomTabNavigator();



const Casa = ({navigate}) =>{
    return(
    <Tab.Navigator 
         initialRouteName="balances"
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
          name="Home" component={Expenses}/>
         <Tab.Screen name="Ingreso" component={Ingreso} />
         <Tab.Screen name="Balances" component={Balances} />
         <Tab.Screen name="More" component={Settings} />
       </Tab.Navigator>
    );
}

export default Casa;