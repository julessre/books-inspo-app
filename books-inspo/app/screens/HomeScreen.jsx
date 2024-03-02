import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox: {
    flex: 0.4,
    backgroundColor: colors.background,
    alignItems: 'left',
    justifyContent: 'left',
    // borderTopRightRadius: 50,
    // borderTopLeftRadius: 50,
    borderTopColor: colors.primaryColor,
    borderTopStyle: 'solid',
    borderTopWidth: 4,
    padding: 20,
    elevation: 5, // for Android
  },
  textHeadline: {
    fontSize: 35,
    color: colors.text,
    fontFamily: 'Raleway-Bold',
  },
  textAuthor: {
    fontSize: 25,
    color: colors.text,
    fontFamily: 'Raleway-Italic',
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Bild</Text>
      </View>
      <View style={styles.infoBox}>
        <Text
          style={styles.textHeadline}
          onPress={() => alert('This is the Home Screen.')}
        >
          Cleopatra and Frankenstein
        </Text>
        <Text style={styles.textAuthor}>von Coco Mellors</Text>
      </View>
    </>
  );
}
