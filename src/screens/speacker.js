import { View, ScrollView } from 'react-native'
import React from 'react'
import BannerTitle from '../components/banner-title'
import CategoryTitle from '../components/category-title'
import Footer from '../components/footer'
import { useSelector } from 'react-redux'
import { SpeakersItem } from '../redux/slices/ProductSlice'
import Card from '../components/Card'

export default function Speacker({ navigation }) {
  const speaker = useSelector(SpeakersItem)

  const showProduct = (id) => {
    navigation.navigate('productDetialsScreen', { id })
  }
  return (
    <ScrollView>
      <BannerTitle />
      <CategoryTitle title={'SPEAKERS'} />
      <View>
        {speaker.map((product) => {
          return (
            <Card
              key={product.id}
              name={product.name}
              desc={product.descripton}
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
