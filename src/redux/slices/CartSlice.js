import { View, Text } from 'react-native'
import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'Cart',
  initialState: {
    OrderedProduct: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      console.log(payload)
      const IsitemExist = state?.OrderedProduct?.find(
        (item) => item?.id === payload?.id,
      )

      console.log(IsitemExist)
      if (IsitemExist) {
        state.OrderedProduct = state?.OrderedProduct.map((item) =>
          payload?.id === item?.id ? { ...item, ...payload } : item,
        )
      } else {
        console.log('new item added senerio')
        console.log(state)
        state.OrderedProduct = [...state?.OrderedProduct, payload]
      }
    },

    removeFromCart: (state, { payload }) => {
      console.log('payload id =>', payload)
      state.OrderedProduct = state?.OrderedProduct?.filter(
        (item) => payload !== item?.id,
      )
    },

    reset: (state) => {
      state.OrderedProduct = []
    },
  },
})

export default CartSlice.reducer
export const { reset, removeFromCart, addToCart } = CartSlice.actions

export const CartLength = (state) => {
  state.Cart.OrderedProduct.length
}

export const sellectCart = (state) => {
  state.Cart.OrderedProduct
}

export const Total = (state) =>
  state?.Cart?.OrderedProduct?.reduce(
    (acc, item) => acc + item?.QuantityPrice,
    0,
  )
