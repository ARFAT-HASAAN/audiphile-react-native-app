
import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from './text'
import { colors, spacing } from '../Theme'

export default function NewProductHighlither({ style }) {
    
    const styles = StyleSheet.compose({
        ...style
    })

  return (
    <View>
        <Text
          centered
          uppercase
          style={{ fontSize: 22, marginVertical: spacing[4] }}
          textColor={colors.lightOrange}
        >
          NEW PRODUCT{' '}
        </Text>
      </View>
  )
}