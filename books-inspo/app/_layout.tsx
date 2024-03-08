import { useFonts } from 'expo-font';
// import { Slot, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '../styles/constants';
import Header from './_components/Header';
import Navigation from './_components/Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: 40,
  },
  // slot: {
  //   flex: 1,
  //   paddingLeft: 30,
  //   paddingRight: 30,
  // },
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
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      {/* <Slider /> */}
      {/* <Header /> */}
      <Navigation />
    </SafeAreaView>
  );
}
