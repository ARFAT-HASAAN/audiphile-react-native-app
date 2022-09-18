import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../redux/slices/ProductSlice'
import Text from '../components/text'
import { colors, spacing } from '../Theme'
import { ScrollView } from 'react-native'
import Picture from '../../assets/images/home-speaker.png'
import CounterButton from '../components/counter-button'
import Button from '../components/button'
import { useState } from 'react'
import NewProductHighlither from '../components/NewProductHighlither'
import { addToCart } from '../redux/slices/CartSlice'
import { showMessage } from 'react-native-flash-message'
import BannerTitle from '../components/banner-title'

export default function ProductDetails({ route }) {
  const dispatch = useDispatch()

  const [Ammount, setAmmount] = useState(0)
  const { id } = route.params

  const SellectedProduct = useSelector((state) => Product(state, id))
  const {
    category,
    description,
    features,
    featuredImage,
    images,
    name,
    price,
    includedItems,
  } = SellectedProduct

  const addCart = () => {
    console.log('add cart hitted')

    if (Ammount === 0) {
      return showMessage({
        message: 'Something wrong',
        description: 'You cant add 0 items',
        type: 'danger',
      })
    } else {
      showMessage({
        message: 'congrats',
        description: 'successfully add a new product',
        type: 'success',
      })

      const SelectProduct = {
        id,
        name,
        price,
        Ammount,
        featuredImage,
        QuantityPrice: price * Ammount,
      }

      dispatch(addToCart(SelectProduct))
    }
  }

  return (
    <ScrollView>
      <BannerTitle />
      <View style={styles.container}>
        <View style={styles.ImageBox}>
          <Image
            style={{ alignSelf: 'center' }}
            source={featuredImage.source}
          />
        </View>

        <NewProductHighlither />

        <View>
          <Text preset="h3">{name}</Text>
          <Text style={{ fontSize: 18, marginVertical: spacing[5] }}>
            {description}
          </Text>
          <Text preset="h5"> $ {price}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginVertical: spacing[5] }}>
          <CounterButton
            setAmmount={setAmmount}
            initailValue={Ammount}
            style={{ marginRight: spacing[5] }}
          />
          <Button onPress={() => addCart()} type="primary">
            {' '}
            ADD{' '}
          </Button>
        </View>

        <View style={styles.FeatureContainer}>
          <Text preset="h3">FEATURE</Text>
          <Text style={{ marginVertical: 20, fontSize: 20 }}> {features} </Text>
        </View>

        <View>
          <Text uppercase preset="h4">
            in the box
          </Text>

          {includedItems.length > 0 &&
            includedItems.map((item, index) => {
              return (
                <View
                  style={{ flexDirection: 'row', marginVertical: spacing[3] }}
                  key={index + 1}
                >
                  <Text style={{ color: colors.orange }}> {item.name}x </Text>
                  <Text>{item.name}</Text>
                </View>
              )
            })}
        </View>

        <View>
          {images.map((image, index) => {
            return (
              <View key={index} style={{ marginVertical: spacing[2] }}>
                <Image source={image.source} />
              </View>
            )
          })}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
  },
  ImageBox: {
    backgroundColor: colors.lightWhite,
    padding: spacing[4],
  },

  FeatureContainer: {
    marginVertical: spacing[9],
  },
})
