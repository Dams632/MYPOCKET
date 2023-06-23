import React, { useState,useRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../themes/inex';
import { Icon } from 'react-native-elements';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';



import ExpensesList from '../components/ExpensesList';
import { FontAwesome5 } from '@expo/vector-icons';
import Ingreso from './Ingreso';
import Settings from './Settings';
import { Reports } from './Balances';
import { Expenses } from './Expenses';

const Tab = createBottomTabNavigator();



export const Casa = () =>{
  const sheetRef = useRef<BottomSheet>(null);
    return(
    <Tab.Navigator 
         initialRouteName="balances"
         screenOptions={{
          
           tabBarStyle: {
             backgroundColor:theme.colors.card,
             
           },
           //tabBarIcon: ({colors})=>screenOptions(route,colors)
           
         }}>
         <Tab.Screen
         options={{
           tabBarLabel: 'Home',
           tabBarIcon: ({  }) => (
             <Icon
               type="material-community"
               name="home"
               size={20}
               />),
         }}
          name="Home" component={Expenses}/>
         <Tab.Screen 
         options={{


         }}
         
         name="Ingreso" component={Ingreso} />
         <Tab.Screen 
         options={{headerRight: ()=>(
          <TouchableOpacity 
          onPress={()=> sheetRef.current.expand()}>
            <FontAwesome5 name="calendar-alt" size={24} color={theme.colors.primary}/>
          </TouchableOpacity>
        )}}
         name="Balances">
          {()=><Reports sheetRef={sheetRef}/>}
         </Tab.Screen>
         <Tab.Screen name="More" component={Settings} />
       </Tab.Navigator>
    );
}

export default Casa;