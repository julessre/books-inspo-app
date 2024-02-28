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

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => alert('This is the Home Screen.')}
      >
        Home Screen
      </Text>
    </View>
  );
}
