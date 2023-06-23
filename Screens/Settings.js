import React from 'react';
import { Text,View } from 'react-native';
import { ListItem } from '../components/ListItem';
import  Entypo  from '@expo/vector-icons/Entypo';
import { theme } from '../themes/inex';


const Settings = ({navigation}) => {
  return (
    <View style={{flexDirection: 'column', margin: 16, borderRadius: 11, overflow: 'hidden'}}>
        <ListItem
          label='Categorias' 
          detail={<Entypo name="chevron-thin-right" color='white' size={20} />}
          onClick={() => {
            navigation.navigate('Categorias');
          }}
        />
    </View>
  );
}

export default Settings;

    

