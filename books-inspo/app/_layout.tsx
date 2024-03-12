import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '../styles/constants';
import TabNavigator from './(tabs)/_layout';
import BookDetailsPage from './bookDetails/[id]';

// const { width, height } = Dimensions.get('window');

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
      {/* <View style={styles.container}>
    //     <Slot />
    //   </View> */}
      {/* <NavigationContainer> */}
      <Stack.Navigator>
        <Stack.Screen
          name="(tabs)"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="bookDetails/[id]" component={BookDetailsPage} />
      </Stack.Navigator>
      {/* </NavigationContainer> */}
    </SafeAreaView>
  );
}
