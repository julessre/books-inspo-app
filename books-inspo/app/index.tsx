import { useFonts } from 'expo-font';
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
import Navigation from './_components/Navigation';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      {/* <Slider /> */}
      {/* <div>
        <FlatList data={books} />
      </div> */}
      <Navigation />
    </SafeAreaView>
  );
}
