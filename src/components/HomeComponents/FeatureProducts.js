import { View, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import Text from '../text'
import { colors, spacing } from '../../Theme'

import Picture from '../../../assets/images/home-earphone.png'
import Button from '../button'

export default function FeatureProductComponents({ category, image }) {
  const { width } = useWindowDimensions()

  return (
    <View style={styles.view}>
      <View style={styles.OuterBox}>
        <View style={styles.InnerBox}>
          <Image
            style={{ alignSelf: 'center', position: 'absolute', top: 20 }}
            source={image}
          />
        </View>
      </View>

      <View style={styles.ProductDetailsContainer}>
        <Text preset="h2" centered white uppercase>
          {category}
        </Text>
        <Text
          centered
          style={{ fontSize: 20, marginVertical: spacing[5] }}
          white
        >
          Upgrade to premium speaker that are phenomilaly build to deliver truly
          remarkable sound
        </Text>
      </View>
      <Button
        style={{ alignSelf: 'center', backgroundColor: colors.black }}
        type="primary"
      >
        See Product
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 600,
    backgroundColor: colors.orange,
    marginVertical: spacing[5],
  },

  OuterBox: {
    width: '100%',
    height: 350,
    borderWidth: 1,
    padding: spacing[7],
    borderColor: colors.white,
    borderRadius: 250,
  },
  InnerBox: {
    height: 290,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 150,
  },

  ProductDetailsContainer: {
    marginTop: -40,
    alignSelf: 'center',
  },
})
