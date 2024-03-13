import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  function handleSignup() {
    const userData = {
      userName,
      passwordHash,
      firstName,
      lastName,
      email,
    };
    alert(JSON.stringify(userData));
  }

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.title}>
        Please enter your username, password, name and email to register.{' '}
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
