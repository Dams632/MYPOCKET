import React, { MutableRefObject, useMemo, useRef, } from 'react';
import { Text,TouchableOpacity,View } from 'react-native';
import { Recurrence } from '../types/recurrence';
import ExpensesList from '../components/ExpensesList';
import { theme } from '../themes/inex';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomSheetModalRef } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModalProvider/types';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { SemanalChart } from '../components/charts/Semanal';

type Props={
    sheetRef: MutableRefObject<BottomSheetMethods>,
}

    
export const Reports = ({sheetRef}: Props) =>{
    const [recurrence,setRecurrence]= React.useState<Recurrence>(Recurrence.Semanal)
    
    const selectRecurrence = (selectedRecurrence: Recurrence)=>{
        setRecurrence(selectedRecurrence);
        sheetRef.current.close();
    }   

    

    return(
    <>
    <View style={{
        display: 'flex',
        flexDirection:'column',
        paddingHorizontal:16,
        paddingTop:16
    }}>

        <View style={{
            display:'flex',
            justifyContent:'space-between',
            width:'100%',
            flexDirection:'row',
            
    
        }}>
            <View style={{display: 'flex', flexDirection:'column'}}>
                <Text style={{
                color: theme.colors.textPrimary,
                fontSize:20
            }}>12Sep-18sep</Text>
            <View style={{display:'flex', flexDirection:'row', marginTop:8}}>
                <Text style={{color: theme.colors.textSecondary, fontSize:16}}>COP</Text>
                <Text style={{color: theme.colors.textPrimary, marginLeft:4, fontSize:17, fontWeight:'600'}}>85</Text>
            </View>
            </View>
            <View style={{display: 'flex', flexDirection:'column', alignItems:'flex-end'}}>
                <Text style={{
                color: theme.colors.textPrimary,
                fontSize:20
            }}>Promedio x Dia</Text>
            <View style={{display:'flex', flexDirection:'row', marginTop:8}}>
                <Text style={{color: theme.colors.textSecondary, fontSize:16}}>COP</Text>
                <Text style={{color: theme.colors.textPrimary, marginLeft:4, fontSize:17, fontWeight:'600'}}>85</Text>
            </View>
            </View>
            

        </View>
        <View style={{marginTop:16}}>
        {recurrence === Recurrence.Semanal &&(<SemanalChart expenses={[]}/>)}
        </View>
        
    <View style={{marginTop:16,overflow:'scroll'}}>
    <ExpensesList
        groups={[{
            day: 'Today',
            expenses: [{
                id:'1',
                amount: 100000,
                category: {
                    id:'1',
                    name: 'Food',
                    color: '#FFD600',
                },
                date: new Date("2023-01-12T00:00:00.000"),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            
            },{
                id:'2',
                amount: 200,
                category: {
                    id:'1',
                    name: 'Transport',
                    color: '#848493',
                },
                date: new Date("2023-01-13T00:00:00.000"),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            },{
                id:'3',
                amount: 300,
                category: {
                    id:'1',
                    name: 'clothes',
                    color: '#FFD600',
                },
                date: new Date("2023-01-14T00:00:00.000"),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            }],
            total:300

        },{
            day: 'Yesterday',
            expenses: [{
                id:'1',
                amount: 1000000,
                category: {
                    id:'1',
                    name: 'casa',
                    color: '#FFD600',
                },
                date: new Date("2023-01-15T00:00:00.000"),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            
            },{
                id:'2',
                amount: 20000,
                category: {
                    id:'1',
                    name: 'Trabajo',
                    color: '#848493',
                },
                date: new Date("2023-01-16T00:00:00.000"),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            },{
                id:'3',
                amount: 300,
                category: {
                    id:'1',
                    name: 'lolll',
                    color: '#FFD600',
                },
                date: new Date("2023-01-12T00:00:00.000"),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            },{
                id:'4',
                amount: 300,
                category: {
                    id:'1',
                    name: 'lolll',
                    color: '#FFD600',
                },
                date: new Date("2023-01-12T20:00:00.000"),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            }],
            total:300
        }]}
    />
    </View>
  

    </View>
    <BottomSheet ref={sheetRef} index={-1} 
    handleIndicatorStyle={{backgroundColor:'#FFFFFF55'}}
    handleStyle={{backgroundColor: theme.colors.card}} 
    enablePanDownToClose snapPoints={['40%']}>
        <BottomSheetFlatList
        style={{backgroundColor:theme.colors.card}}
            data={[Recurrence.Semanal, Recurrence.Mensual, Recurrence.Anual]}
            renderItem={({item})=>(
                <TouchableOpacity 
                    style={{paddingHorizontal: 18, paddingVertical: 12}}
                    onPress={()=>selectRecurrence(item)}
                >


                    <Text style={{
                        fontSize:18,
                        color: recurrence === item? theme.colors.primary : 'white',
                    }}>{item}</Text>

                </TouchableOpacity>
            
            )}
        
        />

    </BottomSheet>
</>
)
}
