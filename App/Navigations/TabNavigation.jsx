import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import  FavoriteScreen from '../Screen/FavoriteScreen/FavoriteScreen';
import  ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../Screen/Utils/Colors';

import { FontAwesome } from '@expo/vector-icons';
const Tab=createBottomTabNavigator();


export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,

    }}>
<Tab.Screen name='home' 
component={HomeScreen}
options={{
    tabBarLabel:'Search',   
    tabBarActiveTintColor:Colors.PRIMARY,   
    tabBarIcon:({color,size})=>(
        <FontAwesome name="search" 
    size={size} color={color} />) 

}}/>
<Tab.Screen name='favorite' 
component={FavoriteScreen}

options={{
    tabBarLabel:'Favorite',   
    tabBarActiveTintColor:Colors.PRIMARY,   
    tabBarIcon:({color,size})=>(
        <MaterialIcons name="favorite" 
    size={size} color={color} />) 

}}


/> 
<Tab.Screen name='profile' 
component={ProfileScreen}

options={{
    tabBarLabel:'Porfile',   
    tabBarActiveTintColor:Colors.PRIMARY,   
    tabBarIcon:({color,size})=>(
        <FontAwesome name="user" 
    size={size} color={color} />) 

}}

/> 
   </Tab.Navigator>
  )
}