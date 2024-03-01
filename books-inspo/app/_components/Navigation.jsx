import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../styles/constants';
// Screens
import FavScreen from '../screens/FavScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Screen names
const homeName = 'Home';
const favName = 'Favorites';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    // <View
    //   style={{
    //     backgroundColor: colors.primaryColor,
    //     borderRadius: 20,
    //     padding: 10,
    //     shadowColor: 'black',
    //     shadowOpacity: 0.5,
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowRadius: 2,
    //     elevation: 5, // for Android
    //   }}
    // />;
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
    paddingBottom: 10,
    display: 'none',
  },
  tabBarStyle: {
    padding: 20,
    height: 90,
    backgroundColor: colors.background,
  },
  tabBarOptions: {
    showLabel: false,
  },
});

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName={homeName} screenOptions={screenOptions}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={favName} component={FavScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}