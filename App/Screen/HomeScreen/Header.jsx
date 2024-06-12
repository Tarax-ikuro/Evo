import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
export default function Header() {
  const {user}=useUser(); 

  
    return (
    <View
 style={styles.container}
 >
    <Image source={{uri:user?.imageUrl}}
    style ={{width:45,height:45,top:20,borderRadius:99}}
    
    />

  <Image source={require('./../../../assets/images/logo.png')}
  style={{width:260,height:50,top:20,objectFit:'contain'}}
  
  />
    
    <MaterialIcons name="filter-list" size={35} color="black" 
    style={{top:20}}
    
    />
 
    </View>

 
 )
    }

   const styles = StyleSheet.create({
    container:{
        display:'flex',
    flexDirection:'row',

    justifyContent: 'space-between',
    alignItems:'center',
  
}
   }) 