import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    color: colors.text,
    fontFamily: 'Raleway-Medium',
    marginBottom: 20,
    width: 250,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: colors.primaryColor,
    fontSize: 15,
    color: colors.text,
    fontFamily: 'Raleway-Medium',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    width: 250,
  },
});

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  async function handleSignup() {
    const userData = {
      userName,
      passwordHash,
      firstName,
      lastName,
      email,
    };
    const signUpRequest = await fetch(`/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userData }),
    }).catch(console.error);
    const signUpResponse = await signUpRequest.json();
    console.log('signup:', signUpResponse);
  }

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Please enter your username, password, name and email to register.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={passwordHash}
        onChangeText={setPasswordHash}
      />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Button title="Go back to login" onPress={handleGoBack} />
    </View>
  );
}
