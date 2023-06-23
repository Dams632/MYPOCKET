import React,{useMemo, useRef} from 'react';
import { KeyboardAvoidingView, TextInput, View , Text, TouchableOpacity} from 'react-native';
import { ListItem } from '../components/ListItem';
import { theme } from '../themes/inex';
import { gestureHandlerRootHOC, ScrollView } from 'react-native-gesture-handler';

import { Picker, type PickerItem } from 'react-native-woodpicker'
//import {Picker} from '@react-native-picker/picker';
import { Recurrence } from '../types/recurrence';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
//import { Picker,onOpen } from 'react-native-actions-sheet-picker';




 const Ingresar = () => {
    const [Amount,setAmount]= React.useState('')
    const [recurrence,setRecurrence]= React.useState(Recurrence.Ninguno)
    const [category,setCategory]= React.useState('')
    const snapPoints = useMemo(()=> ['25%','50%','75%'],[])
    const sheetRef = useRef<BottomSheet>(null)
    const selectRecurrence = (recurrence: string) =>{
        
        setRecurrence(recurrence as Recurrence);
        sheetRef.current?.close();
        
    }

    
    return(
        <>
        <KeyboardAvoidingView keyboardVerticalOffset={112} style={{margin:16, flex:1}}>
            <View style={{
                borderRadius:11,
                overflow: 'hidden',
            }}>
                <ListItem
                    label='Cantidad' 
                    detail={
                    <TextInput
                    keyboardType='numeric'
                    textAlign='right'
                    onChange={(event)=>setAmount(event.nativeEvent.text)}
                    placeholder='Cantidad'
                    style={{height:40,color:'white', flex:1, borderRadius:8,paddingLeft:8}}
                    value={Amount}
                        />
                    }
                />
                <>
                <ScrollView>
                <ListItem
                label = 'Frecuencia'
               detail={
                
                <TouchableOpacity style={{
                    padding: 12,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:'center'
                }} onPress={()=>{
                    sheetRef.current?.snapToIndex(2);
                }}>
                    <Text style={{
                        color: theme.colors.primary,
                        textTransform: 'capitalize'
                    }}>{recurrence}</Text>
                </TouchableOpacity>
                
                }
                    
                />
                </ScrollView>
                </>

            </View>
            
        </KeyboardAvoidingView>
        <BottomSheet ref={sheetRef} index={-1} handleIndicatorStyle={{backgroundColor:'#FFFFFF55'}} handleStyle={{backgroundColor: theme.colors.card
         }} enablePanDownToClose snapPoints={snapPoints}>
                    <BottomSheetFlatList
                    style={{
                        backgroundColor: theme.colors.card
                    }} 
                        data={Object.keys(Recurrence)}
                        keyExtractor={(i)=>i}
                        renderItem={(item)=> (
                        <TouchableOpacity 
                            onPress={()=>selectRecurrence(item.item)}
                             style={{paddingHorizontal:18,paddingVertical:18}}>
                            <Text style={{color:'white', fontSize:18}}>{item.item}</Text>
                        </TouchableOpacity>)}
                        
                       // contentContainerStyle={styles.contentContainer}
                    />
                </BottomSheet>
        </>

    );
}
export default Ingresar