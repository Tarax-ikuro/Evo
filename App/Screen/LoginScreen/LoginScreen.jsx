
////rnf//// pour créer la fonction 
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../../node_modules/hooks/warmUpBrowser';
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();


export default function LoginScreen() {

    useWarmUpBrowser();
 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress=async()=>{
    //TRY CATCH 
    try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }

}
  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:70
    }}>
    <Image source={require('./../../../assets/images/logo.png')}

   style={styles.logoImage}
   />
<Image source={require('./../../../assets/images/man-charging.png')}
   style={styles.chargingImage}
   />
  
  <View style={{padding:20}}>
    <Text style={styles.heading}>Your Ultimate Evo Charging  Station Finder App</Text>
    <Text style={styles.desc}>Find  Evo charging station near you, plan trip and  much more in just one click </Text>
 
 <TouchableOpacity style={styles.button}
 onPress={onPress}
 >
  
  
    <Text style={{
        color:Colors.WHITE,
        textAlign:'center',
        fontFamily:'outfit',
        fontSize:17
    }}>
        
        Login with Google</Text>
    
 </TouchableOpacity>
 
  </View>
  
    </View>
  )



}
///STYLE 
const styles = StyleSheet.create({
logoImage:{
    width:200,
    height:70,
     bottom:20,
    objectFit:'contain'

},
chargingImage:{
    width:'100%', 
    height:270, 
    objectFit:'cover'

},

//HEADING STYLE// 
heading:{
    fontSize:25,
    fontFamily:'outfit-bold',
   textAlign:'center',
   marginTop: 20

},
desc:{
    fontSize:17,
    fontFamily:'outfit', 
    marginTop:15,
    textAlign:'center',
//ADD color 
    color:'#000',
    color:Colors.GRAY

},
button:{
    backgroundColor:Colors.PRIMARY,
    padding: 16,
    display:'flex',
    borderRadius: 90,
    marginTop:65
}


})