import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { GrupoGastos } from '../types/grupo-gastos';
import { GastosRow } from './GastosRow';
import { theme } from '../themes/inex';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

type Props ={
  groups: GrupoGastos[];
}

export const ExpensesList = ({groups}: Props) => {
  return(
    
  
    <FlatList
      data={groups}
      keyExtractor={(item)=> item.day}
      renderItem={({item:{day,expenses,total}})=>(
        <View style={{display:'flex', flexDirection:'column', marginBottom:22}}>
        <Text style={{marginBottom:4, color: theme.colors.textPrimary, fontSize:17, fontWeight:'600'}}> {day}</Text>
        <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          marginBottom:12
        }}/>
        {expenses.map((expense)=>(
            <GastosRow key={expense.id} expense={expense} />
        ))}
        <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginBottom:12
        }}/>
        <View style={{
          width:'100%',
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}>
          <Text style={{fontSize:17, color:theme.colors.textSecondary}}>Total:</Text>
          <Text style={{fontSize:17, color:theme.colors.textSecondary,fontWeight:'600'}}>COP {total}</Text>

        </View>
        

      </View>

      )}
    />

 
)
}

export default ExpensesList

