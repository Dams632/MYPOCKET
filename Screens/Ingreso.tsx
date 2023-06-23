import React,{useMemo, useRef} from 'react';
import { KeyboardAvoidingView, TextInput, View , Text, TouchableOpacity, Platform} from 'react-native';
import { ListItem } from '../components/ListItem';
import { theme } from '../themes/inex';
import { gestureHandlerRootHOC, ScrollView } from 'react-native-gesture-handler';
import  {Category}  from '../types/category';
import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

import { Picker, type PickerItem } from 'react-native-woodpicker'
//import {Picker} from '@react-native-picker/picker';
import { Recurrence } from '../types/recurrence';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import Categorias from './Categorias';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Button } from 'react-native-elements/dist/buttons/Button';
//import { Picker,onOpen } from 'react-native-actions-sheet-picker';




 const Ingresar = () => {
    const [Amount,setAmount]= React.useState('')
    const CATEGORIES: Category[]=[{

        id:'1',
        name:'Food',
        color:"#898889"
    },{
        id:'2',
        name:'candyes',
        color:"#898832"
    },
]
    const [date,setDate]= React.useState(new Date())
    const [recurrence,setRecurrence]= React.useState(Recurrence.Ninguno)
    const [sheetView,setSheetView]=React.useState<'recurrence'|'fecha'| 'categoria'>('recurrence');
    const [category,setCategory]= React.useState<Category>(CATEGORIES[0])
    const [desc,setDesc]= React.useState()
    const snapPoints = useMemo(()=> ['25%','50%','75%'],[])
    const sheetRef = useRef<BottomSheet>(null)
    const selectRecurrence = (recurrence: string) =>{
        
        setRecurrence(recurrence as Recurrence);
        sheetRef.current?.close();
        
    }
    const selectCategoria = (selectedCategory: Category) =>{ 
        setCategory(selectedCategory as Category);
        sheetRef.current?.close();
        
    }

    
    return(
        <>
        <KeyboardAvoidingView keyboardVerticalOffset={112} style={{margin:16, flex:1,alignItems: 'center'}}>
            <View style={{
                borderRadius:11,
                overflow: 'hidden',
                width: '100%'
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
                    setSheetView('recurrence');
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
                <ListItem
                label = 'Fecha'
               detail={
                
                <TouchableOpacity style={{
                    padding: 12,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:'center'
                }} onPress={()=>{
                    if(Platform.OS === 'android'){
                        DateTimePickerAndroid.open({
                            value: date,
                            onChange: (event,newDate) => setDate(newDate),
                            mode:'date',
                            is24Hour: true
                            

                        })
                    }
                }}>
                    <Text style={{
                        color: theme.colors.primary,
                        textTransform: 'capitalize'
                    }}>{date.toLocaleDateString('en-US')}</Text>
                </TouchableOpacity>
                
                
                }
                    
                />
                <ListItem
                label = 'Descripcion'
               detail={
                
                <TextInput
                textAlign='right'
               // onChange={(event)=>setDesc(event.nativeEvent.text)}
                placeholder='Descripcion'
                style={{height:40,color:'white', flex:1, borderRadius:8,paddingLeft:8}}
                value={desc}
                    />

                
                
                }
                    
                />
                <ListItem
                label = 'Categoria'
               detail={
                
                <TouchableOpacity style={{
                    padding: 12,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:'center'
                }} onPress={()=>{
                    setSheetView('categoria');
                    sheetRef.current?.snapToIndex(2);
                }}>
                    <Text style={{
                        color: category.color,
                        textTransform: 'capitalize'
                    }}>{category.name}</Text>
                </TouchableOpacity>
                
                }
                    
                />
                </>

            </View>
            <TouchableOpacity style={{
                backgroundColor: theme.colors.primary,
                paddingHorizontal: 20,
                paddingVertical:13,
                borderRadius: 10,
                marginTop: 32,


            }}>
                <Text style={{color:'white', fontWeight:'600', fontSize:20}}>Añadir</Text>
                    
            </TouchableOpacity>
            
        </KeyboardAvoidingView>
        <BottomSheet ref={sheetRef} index={-1} handleIndicatorStyle={{backgroundColor:'#FFFFFF55'}} handleStyle={{backgroundColor: theme.colors.card
         }} enablePanDownToClose snapPoints={snapPoints}>
            {sheetView === 'recurrence' && (
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
                
            )}
            {sheetView === 'fecha' && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    maximumDate={new Date()}
                    onChange={(event,newDate)=> setDate(newDate)}
                    

                />
            )}
            {sheetView === 'categoria' && (
                <BottomSheetFlatList
                style={{
                    backgroundColor: theme.colors.card
                }} 
                    data={CATEGORIES}
                    keyExtractor={({id})=>id}
                    renderItem={({item})=> (
                    <TouchableOpacity 
                        onPress={()=>selectCategoria(item)}
                        style={{paddingHorizontal:18,paddingVertical:12}}
                         >
                            <View style={{flex:1,display: 'flex', flexDirection:'row', alignItems: 'center'}}/>
                        <View
                            style={{backgroundColor: item.color, width:12, height:12, borderRadius:6,}}
                        />    
                        <Text style={{color:'white', fontSize:18}}>{item.name}</Text>
                    </TouchableOpacity>)}
                    
                   // contentContainerStyle={styles.contentContainer}
                />
                
            )}
                    
                </BottomSheet>
        </>

    );
}
export default Ingresar