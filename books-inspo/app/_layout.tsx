import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
// import { Slot, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '../styles/constants';
// import Header from './_components/Header';
import TabNavigator from './(tabs)/_layout';
import BookDetailsPage from './bookDetails/[id]';

// const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    backgroundColor: colors.background,
  },
});

// function routeMapping(pathname: string) {
//   switch (pathname) {
//     case '/':
//       return 'Guest List';
//     case '/new-guest':
//       return 'New Guest';
//     default:
//       return '';
//   }
// }

export default function HomeLayout() {
  // const pathname = usePathname();
  // const label = routeMapping(pathname);
  const [fontsLoaded] = useFonts({
    'Raleway-Medium': require('../assets/font/Raleway-Medium.ttf'),
    'Raleway-Italic': require('../assets/font/Raleway-Italic.ttf'),
    'Raleway-Bold': require('../assets/font/Raleway-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <View style={styles.container}>
    //     <Slot />
    //   </View> */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerTitle: '',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="bookDetails/[id]"
          options={{
            title: 'Book Details',
            headerBackTitleVisible: false,
            // headerTintColor: 'black',
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
