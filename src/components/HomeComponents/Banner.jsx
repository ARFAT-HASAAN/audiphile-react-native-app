import {
    View, StyleSheet , Image, useWindowDimensions
} from 'react-native'
import React from 'react'
import { colors } from '../../Theme/Colors'
import Text from '../text'

export default function Banner() {

    const {width, height} = useWindowDimensions()

  return (
      <View style={styles.banner} >
          <View>
              
      <Image style={{ width: "100%", alignSelf: "center",   }} resizeMode="cover" source={require("../../../assets/images/home-banner.png")} />
          </View>
          
          <View  style={{position: "absolute", top: 200, width: "100%"}}   >
              <Text centered preset="h2" white >Welcome</Text>
              <Text style={{
                  marginTop: 40, fontSize: 20, width : width - 40, alignSelf: "center"}} centered white > some dummy text about the app , i want more text to look pretty, some more</Text>
          </View>

    </View>
  )
}

const styles = StyleSheet.create({

    banner: {
        width: "100%",
        backgroundColor: colors.black,
        paddingBottom: 30,
    }

})