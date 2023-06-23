import React , {useCallback, useState} from 'react';
import  Entypo  from '@expo/vector-icons/Entypo';
import { View,Button ,TouchableOpacity, Modal, KeyboardAvoidingView,Animated} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { ListItem } from'../components/ListItem';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { theme } from '../themes/inex';
import {Category}  from '../types/category';

import { CategoriasRow } from '../components/CategoriasRow';



const Categorias = ({}) =>{
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor,setSelectedColor]= useState(theme.colors.primary);
    const [newName,setNewName]= useState('')
    const [categorias,setCategorias] = useState<Category[]>([{
        id: '1',
        color: theme.colors.primary,
        name: 'golosinas'},
        {
            id:'2',
            color: theme.colors.card,
            name: 'ropa'
        }
    ]);

  const onSelectColor = ({ hex }) => {
    setSelectedColor(hex);
  };
  const crearCategoria= () =>{
    if(newName.length === 0){
        return;
    }
    setCategorias([...categorias,{
        id: Math.random().toString(),
        color: selectedColor,
        name:newName,
    }]);
    setNewName('');
    setSelectedColor(theme.colors.primary);

  }
  
    return(
        <> 
        <KeyboardAvoidingView
            
            keyboardVerticalOffset={112}
            style={{ flex: 1, margin:16 }}
        >
        
        <ScrollView style={{flex:1}}>
        <View style={{flexDirection: 'column', borderRadius: 11, overflow: 'hidden'}}>
        
                {categorias.map(({id,color,name})=>(
                    <GestureHandlerRootView>
                    <Swipeable key={id} 
                        renderRightActions={() => {
                        return(
                            <View
                                style={{
                                    backgroundColor: theme.colors.error,
                                    width: 75,
                                }}
                            >
                            <RectButton style={{backgroundColor:theme.colors.error ,justifyContent:'center', alignItems: 'center', flex:1}} 
                            onPress={() => setCategorias(categorias.filter((categoria) => categoria.id!== id))}>
                               <Ionicons name="trash-outline" size={30} color="white"  />
                            </RectButton>
                            </View>
                        );
                    }}>
                        <CategoriasRow
                        color={color}
                        name= {name}
                    />
                    </Swipeable>
                    </GestureHandlerRootView>
                 
                    

                ))}
                      
         </View>
         </ScrollView> 
         <View style={{display: 'flex', flexDirection:'row', paddingHorizontal:8, paddingVertical: 8,alignItems:'center'}}>
            
            <TouchableOpacity onPress={()=>setShowColorPicker(!showColorPicker)}>
                <View style={{backgroundColor: selectedColor, width:24,height:24,borderRadius:12,marginRight:8}} />
            </TouchableOpacity>
            <TextInput
                onChange={(event)=>setNewName(event.nativeEvent.text)}
                placeholder='Nombre de categoria'
                style={{height:40,color:'white', borderColor:theme.colors.border, borderWidth:1, flex:1, borderRadius:8,paddingLeft:8}}
                value={newName}
            />
            <TouchableOpacity style={{padding:4}} onPress={crearCategoria}>
            
            <MaterialIcons name="send" size={24} color={theme.colors.primary} />

            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
            <Modal visible={showColorPicker} animationType='slide'>
        <ColorPicker style={{ width: '70%' }} value='red' onComplete={onSelectColor}>
          <Preview />
          <Panel1 />
          <HueSlider />
          <OpacitySlider />
          <Swatches />
        </ColorPicker>

        <Button title='Ok' onPress={() => setShowColorPicker(false)} />
        
      </Modal>
      </>  
    )
}

export default Categorias;