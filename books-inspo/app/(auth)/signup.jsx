import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { colors } from '../../styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.text,
    fontFamily: 'Raleway-Italic',
    marginTop: 20,
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
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 25,
    marginBottom: -30,
    width: 150,
    padding: 15,
  },
  buttonText: {
    fontSize: 15,
    color: colors.text,
    fontFamily: 'Raleway-Medium',
  },
  loginText: {
    marginTop: 40,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
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
      body: JSON.stringify(userData),
    }).catch(console.error);
    const signUpResponse = await signUpRequest.json();
    console.log('signup:', signUpResponse);
  }

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={styles.title}>Username:</Text>
            <TextInput
              style={styles.input}
              value={userName}
              onChangeText={setUserName}
            />
            <Text style={styles.title}>Password:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={passwordHash}
              onChangeText={setPasswordHash}
            />
            <Text style={styles.title}>First Name:</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
            />
            <Text style={styles.title}>Last Name:</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
            />
            <Text style={styles.title}>Email:</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <View>
              <Pressable
                accessibilityLabel="Save this book to my favorites"
                onPress={handleSignup}
                activateOpacity={0.3}
                style={({ pressed }) => [
                  styles.button,
                  {
                    backgroundColor: pressed ? '#fff' : colors.primaryColor,
                  },
                ]}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </Pressable>
              <Pressable
                accessibilityLabel="Save this book to my favorites"
                onPress={handleGoBack}
                activateOpacity={0.3}
                style={({ pressed }) => [
                  styles.loginText,
                  {
                    backgroundColor: pressed ? '#fff' : colors.background,
                    borderRadius: 20,
                    padding: 5,
                  },
                ]}
              >
                <Text>Or go back to login</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
