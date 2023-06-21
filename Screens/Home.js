import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert, TouchableWithoutFeedback } from 'react-native';
import {useFonts} from 'expo-font';
import Ingreso from '../Screens/Ingreso';
import { createStackNavigator } from '@react-navigation/stack';





const Home = ({navigation}) =>{
  



  return (
    
    <View style={{marginTop:25}}>
    
      
      <View>
        <Text style={styles.titulo}>My Pocket</Text>

      </View>
      <View style={styles.signs}>
        <TouchableWithoutFeedback /*onPress={()=> Alert.alert('Presionado el mas')}*/>
       
        <Image
        style= {{width: 100, height: 100}}
        source={require('../assets/icons/pluss.png')}
        />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={{}}>
          
        <Image
        style= {{width: 100, height: 100}}
        source={require('../assets/icons/minus.png')}
        />
        </TouchableWithoutFeedback>


      </View>


    </View>
  );
}

export default Home;


const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 101,
    alignSelf: 'center',
    marginTop: 1,
    marginBottom: 100,
  },
  header:{
   // backgroundColor: 'gray',
    alignSelf: 'center',
    paddingTop: 2,
  },
  signs: {
    //justifyContent: 'space-between',
   //alignSelf: 'center',
   //justifyContent: 'center',
   justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    alignSelf: 'center',
    marginBottom: 100,
    fontFamily: 'Roboto',
  }

});