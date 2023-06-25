import React , {useState} from 'react';
import { View,Button ,TouchableOpacity, Modal, KeyboardAvoidingView} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


import { RectButton, TextInput } from 'react-native-gesture-handler';
import { theme } from '../themes/inex';
import RealmContext from '../realm'
import { CategoriasRow } from '../components/CategoriasRow';
import { Category } from '../models/category';
import { BSON } from 'realm';


const {useQuery,useRealm}= RealmContext;

const Categorias = ({}) =>{
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor,setSelectedColor]= useState(theme.colors.primary);
    const [newName,setNewName]= useState('');
    const realm = useRealm()
    const categoriasz = useQuery(Category);

  const onSelectColor = ({ hex }) => { 
    setSelectedColor(hex);
  };
  const crearCategoria= () =>{
    if(newName.length === 0){
        return;
    }
    realm.write(() => {
        realm.create('Category', Category.generate(newName,selectedColor))

    });
    setNewName('');
    setSelectedColor(theme.colors.primary);

  }

  const deleteCategory = (id: BSON.ObjectId) => {
    realm.write(() => {
        const categoryss = realm.objectForPrimaryKey('Category',id);
        realm.delete(categoryss);
    });
  };

  
  
    return(
        <> 
        <KeyboardAvoidingView
            
            keyboardVerticalOffset={112}
            style={{ flex: 1, margin:16 }}
        >
        
        <ScrollView style={{flex:1}}>
        <View style={{flexDirection: 'column', borderRadius: 11, overflow: 'hidden'}}>
        
                {categoriasz.map(({_id,color,name})=>(
                    <GestureHandlerRootView>
                    <Swipeable key={_id.toHexString()} 
                        renderRightActions={() => {
                        return(
                            <View
                                style={{
                                    backgroundColor: theme.colors.error,
                                    width: 75,
                                }}
                            >
                            <RectButton style={{backgroundColor:theme.colors.error ,justifyContent:'center', alignItems: 'center', flex:1}} 
                            onPress={() => deleteCategory(_id)}
                            >
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