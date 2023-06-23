import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert, TouchableWithoutFeedback, ScrollView } from 'react-native';
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
    <ScrollView>
  <View style={{
    display:'flex', 
    flexDirection: 'column',
    overflow: 'scroll',
    paddingHorizontal: 16,
    
    }}>
      <View style={{display:'flex', alignItems:'center',flexDirection:'row', marginBottom:16, justifyContent:'center'}}>
        <Text style={{color:theme.colors.textPrimary, fontSize:17}}>Total de:</Text>
        <TouchableOpacity style={{marginLeft:16}}>
          <Text style={{color:theme.colors.primary, fontSize:17}}>Esta semana</Text>
        </TouchableOpacity>
      </View>
      <View style={{display:'flex', flexDirection:'row',alignItems:'flex-start', justifyContent:'center',marginBottom:16}}>
        <Text style={{color:theme.colors.textSecondary,fontSize:17,marginTop:2}}>$</Text>
        <Text style={{color:theme.colors.textPrimary, fontSize:30, marginLeft:2,fontWeight:'600'}}>353535</Text>
      </View>
    
    {groups.map(({day,expenses,total})=>(
      
      <View key={day} style={{display:'flex', flexDirection:'column', marginBottom:22}}>
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
      
    ))}

  </View>
  </ScrollView>
)
}

export default ExpensesList

