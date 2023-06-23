import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import ExpensesList from './components/ExpensesList';
import Navigation from './Navigation/Navigation';

import {useFonts} from 'expo-font';




export default function App() {
 
  return (
      <Navigation />
  );
}
