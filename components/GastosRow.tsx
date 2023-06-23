import { Gasto } from "../types/gastos"
import {View,Text} from 'react-native'
import React from 'react';
import { theme } from "../themes/inex";


type Props ={
    expense: Gasto;
}


export const GastosRow= ({expense}:Props)=>{
    return (
        <View style={{ display: 'flex', flexDirection: 'column', marginBottom:12, }}>
            <View style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:'center'
            }}>
                <Text style={{fontSize:17, fontWeight:"600", color:theme.colors.textPrimary}}>{expense.note}</Text>
                <Text style={{fontSize:17, fontWeight:"600", color:theme.colors.textPrimary}}>COP {expense.amount}</Text>
            </View>
            <View style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:'center'
            }}>
                <View style={{ backgroundColor: `${expense.category.color}66`, paddingHorizontal: 6, paddingVertical:2, borderRadius:8,}}>
                    <Text style={{color:expense.category.color, fontSize:13}}>{expense.category.name}</Text>
                </View>
                <Text style={{
                    fontSize: 17,
                    color: theme.colors.textSecondary
                }}>{expense.date.getHours()}:{expense.date.getMinutes()}</Text>
            </View>
        </View>
    );
}