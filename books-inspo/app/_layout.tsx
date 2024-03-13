import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '../styles/constants';
import TabNavigator from './(tabs)/_layout';
import BookDetailsPage from './bookDetails/[id]';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default function HomeLayout() {
  const [fontsLoaded] = useFonts({
    'Raleway-Medium': require('../assets/font/Raleway-Medium.ttf'),
    'Raleway-Italic': require('../assets/font/Raleway-Italic.ttf'),
    'Raleway-Bold': require('../assets/font/Raleway-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontFamily: 'Raleway-Bold',
          },
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="bookDetails/[id]"
          component={BookDetailsPage}
          options={{
            title: 'Book Details',

            headerBackTitleVisible: false,
            headerShadowVisible: false,
            contentStyle: {
              borderTopColor: colors.primaryColor,
              borderTopWidth: 3,
            },
          }}
        />
        {/* <Stack.Screen
          name="(auth)"
          component={BookDetailsPage}
          options={{
            title: 'Login / Sign-up',

            headerBackTitleVisible: false,
            headerShadowVisible: false,
            contentStyle: {
              borderTopColor: colors.primaryColor,
              borderTopWidth: 3,
            },
          }}
        /> */}
      </Stack.Navigator>
    </SafeAreaView>
  );
}
