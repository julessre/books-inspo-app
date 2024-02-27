import React from 'react';
import { Text, View } from 'react-native';

export default function FavScreen({ navigation }) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Home')}>Favorites Screen</Text>
    </View>
  );
}
