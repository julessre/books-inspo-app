import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Redirect, Slot } from 'expo-router';
// import React, { useEffect, useState } from 'react';
// import Slider from './_components/Slider';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from '../styles/constants';
import TabNavigator from './(tabs)/_layout';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default function App() {
  return <Redirect href={'./(tabs)/HomeScreen'} />;
}
