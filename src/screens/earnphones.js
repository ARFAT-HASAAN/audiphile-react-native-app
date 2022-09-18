import { ScrollView, View } from 'react-native'
import React from 'react'
import BannerTitle from '../components/banner-title'
import CategoryTitle from '../components/category-title'
import Footer from '../components/footer'
import { useSelector } from 'react-redux'
import { EarphonesItem } from '../redux/slices/ProductSlice'
import Card from '../components/Card'

export default function Earnphones({ navigation }) {
  const showProduct = (id) => {
    navigation.navigate('productDetialsScreen', { id })
  }

  const earphone = useSelector(EarphonesItem)
  return (
    <ScrollView>
      <BannerTitle />
      <CategoryTitle title={'EARPHONES'} />
      <View>
        {earphone.map((product) => {
          return (
            <Card
              key={product.id}
              name={product.name}
              desc={product.description}
              picture={product.featuredImage.source}
              id={product.id}
              showProduct={showProduct}
            />
          )
        })}
      </View>
      <Footer />
    </ScrollView>
  )
}
