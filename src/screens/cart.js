import { Alert, Image, Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import BannerTitle from '../components/banner-title'
import Text from '../components/text'

import { colors, spacing } from '../Theme'
import Button from '../components/button'
import CounterButton from '../components/counter-button'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  removeFromCart,
  reset,
  Total,
} from '../redux/slices/CartSlice'

export default function Cart({ navigation }) {
  const SellectedItem = useSelector((state) => state.Cart.OrderedProduct)
  const ProductTotal = useSelector(Total)
  const dispatch = useDispatch()

  const onAmmountChange = (value, item) => {
    if (value === 0) {
      return Alert.alert('Are you sure?', 'You want to remove', [
        {
          text: 'cencle',
          onPress: () => {},
          style: 'default',
        },
        {
          text: 'Remove',
          onPress: () => {
            dispatch(removeFromCart(item.id))
          },
        },
      ])
    }

    const CartItem = {
      ...item,
      Ammount: value,
      QuantityPrice: item.price * value,
    }
    console.log('recheeck', CartItem)
    dispatch(addToCart(CartItem))
  }

  return (
    <ScrollView>
      <BannerTitle></BannerTitle>
      <View style={Styles.constainer}>
        <View style={Styles.topView}>
          <Text preset="h4">CART ({SellectedItem.length} )</Text>
          <Pressable onPress={() => dispatch(reset())}>
            <Text>remove all</Text>
          </Pressable>
        </View>

        <View
          style={{ paddingVertical: spacing[7], marginVertical: spacing[5] }}
        >
          {SellectedItem.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: spacing[5],
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      padding: spacing[2],
                      backgroundColor: colors.lightWhite,
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      resizeMethod="resize"
                      style={{
                        width: 50,
                        height: 50,
                      }}
                      source={item?.featuredImage?.source}
                    />
                  </View>
                  <View style={{ padding: spacing[1] }}>
                    <Text
                      style={{ paddingBottom: spacing[1] }}
                      preset="h6"
                      uppercase
                    >
                      {item?.name}
                    </Text>
                    <Text style={{ paddingTop: spacing[1] }}>
                      {' '}
                      $ {item?.QuantityPrice}{' '}
                    </Text>
                  </View>
                </View>

                <View>
                  <CounterButton
                    initailValue={item?.Ammount}
                    setAmmount={(value) => {
                      onAmmountChange(value, item)
                    }}
                  />
                </View>
              </View>
            )
          })}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text>Total</Text>
          <Text preset={'h6'}>$ {ProductTotal}</Text>
        </View>

        <View style={{ paddingVertical: spacing[5] }}>
          <Button
            onPress={() => navigation.navigate('CheckoutScreen')}
            fullWidth
          >
            CHECKOUT
          </Button>
        </View>
      </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  constainer: {
    padding: spacing[4],
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
