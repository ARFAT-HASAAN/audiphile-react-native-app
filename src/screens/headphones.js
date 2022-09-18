import { View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import BannerTitle from '../components/banner-title'
import CategoryTitle from '../components/category-title'
import Footer from '../components/footer'
import { useSelector } from 'react-redux'
import { HeadphonesItem } from '../redux/slices/ProductSlice'
import Card from '../components/Card'

export default function Headphones({ navigation }) {
  const headphones = useSelector(HeadphonesItem)
  const showProduct = (id) => {
    navigation.navigate('productDetialsScreen', { id })
  }

  return (
    <ScrollView>
      <BannerTitle />
      <CategoryTitle title={'HEADPHONES'} />
      <View>
        {headphones.map((product) => {
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
