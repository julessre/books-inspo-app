import React from 'react';
import { Text, View } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Home')}>Profile Screen</Text>
    </View>
  );
}
