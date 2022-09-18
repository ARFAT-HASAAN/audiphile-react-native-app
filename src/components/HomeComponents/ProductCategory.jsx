import { View, StyleSheet, Image, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import picture from "../../../assets/images/home-headphone.png"
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../Theme/Colors'

import Button from '../button';
import Text from '../text';
import { spacing } from '../../Theme';
export default function ProductCategory({title, picture, route, }) {

  
    

  return (

     <Pressable onPress={route}
      >
    <SafeAreaView style={{paddingVertical: spacing[8]}}>  
    <View style={styles.view} >
          <Image style={{alignSelf: "center", marginTop: -20, shadowColor: colors.black}} source={picture} />
          <Text style={{ paddingVertical: spacing[5] }} preset="h5" centered  >{ title}</Text>
      <Button style={{ alignSelf: "center", fontWeight: "bold",}} type='secondary' >  SHOP   <AntDesign name="right" size={25} color="orange" /> </Button>
          
    </View>
       </SafeAreaView>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  view: {
    alignSelf: "center",
    
      width: "90%",
        backgroundColor: colors.lightWhite ,
        borderRadius: 10,
      
    }
})