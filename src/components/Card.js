import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import Button from './button'
import Text from './text'
import { colors, spacing } from '../Theme'
import NewProductHighlither from './NewProductHighlither'

export default function Card({ name, desc, picture, id, showProduct }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.ImageBox}>
        <Image style={{ alignSelf: 'center' }} source={picture} />
      </View>

      <NewProductHighlither />

      <View>
        <Text preset="h4" centered>
          {name}
        </Text>

        <Text
          centered
          style={{
            fontSize: 16,
            marginVertical: spacing[5],
          }}
        >
          {desc}
        </Text>

        <Button onPress={() => showProduct(id)} style={{ alignSelf: 'center' }}>
          {' '}
          See Product{' '}
        </Button>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    paddingVertical: spacing[5],
    paddingHorizontal: spacing[3],
  },

  ImageBox: {
    backgroundColor: colors.lightWhite,
    borderRadius: 10,

    padding: spacing[4],
  },
})
