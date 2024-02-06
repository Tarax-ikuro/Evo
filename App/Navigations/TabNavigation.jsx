import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import  FavoriteScreen from '../Screen/FavoriteScreen/FavoriteScreen';
import  ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';

const Tab=createBottomTabNavigator();


export default function TabNavigation() {
  return (
    <Tab.Navigator>
<Tab.Screen name='home' 
component={HomeScreen}
/>
<Tab.Screen name='favorite' 
component={FavoriteScreen}
/> 
<Tab.Screen name='profile' 
component={ProfileScreen}
/> 
   </Tab.Navigator>
  )
}