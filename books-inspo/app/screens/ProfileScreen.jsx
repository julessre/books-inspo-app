import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.text,
  },
});

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => navigation.navigate('Home')}>
        Profile Screen
      </Text>
    </View>
  );
}
