import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../styles/constants';
// Screens
import FavScreen from './screens/FavScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

// Screen names
const homeName = 'Home';
const favName = 'Favorites';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === homeName) {
      iconName = focused ? 'book' : 'book-outline';
    } else if (route.name === favName) {
      iconName = focused ? 'heart' : 'heart-outline';
    } else if (route.name === profileName) {
      iconName = focused ? 'person' : 'person-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },

  tabBarActiveTintColor: colors.primaryColor,
  tabBarInactiveTintColor: colors.text,
  tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
  tabBarStyle: { padding: 30, height: 70 },
});

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={homeName} screenOptions={screenOptions}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={favName} component={FavScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
