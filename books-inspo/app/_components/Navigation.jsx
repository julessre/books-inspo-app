import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../styles/constants';
// Screens
import FavScreen from '../screens/FavScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

// Screen names
const homeName = 'Home';
const favName = 'Favorites';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === homeName) {
      iconName = focused ? 'book' : 'book';
    } else if (route.name === favName) {
      iconName = focused ? 'heart' : 'heart';
    } else if (route.name === profileName) {
      iconName = focused ? 'person' : 'person';
    }

    return <Ionicons name={iconName} size={size + 5} color={color} />;
  },

  tabBarActiveTintColor: colors.primaryColor,
  tabBarInactiveTintColor: colors.text,
  tabBarLabelStyle: {
    paddingBottom: 20,
    display: 'none',
  },
  tabBarStyle: {
    height: 80,
    paddingTop: 10,
    backgroundColor: colors.background,
  },
  tabBarOptions: {
    showLabel: false,
  },
  headerShown: false,
});

export default function Navigation() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer
        independent={true}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={screenOptions}
        >
          <Tab.Screen
            name={homeName}
            component={HomeScreen}
            headerShown={false}
          />
          <Tab.Screen
            name={favName}
            component={FavScreen}
            headerShown={false}
          />
          <Tab.Screen
            name={profileName}
            component={ProfileScreen}
            headerShown={false}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
