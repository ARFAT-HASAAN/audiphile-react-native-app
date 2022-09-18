import { View, Text } from 'react-native'
import React from 'react'
import BannerTitle from '../components/banner-title'
import Banner from '../components/HomeComponents/Banner'
import { ScrollView } from 'react-native'
import ProductCategory from '../components/HomeComponents/ProductCategory'
import HEADPHONES from '../../assets/images/home-headphone.png'
import EARPHONES from '../../assets/images/home-earphone.png'
import SPEAKER from '../../assets/images/home-speaker.png'
import { useDispatch, useSelector } from 'react-redux'
import { FeatureProducts } from '../redux/slices/ProductSlice'
import FeatureProductComponents from '../components/HomeComponents/FeatureProducts'
import Button from '../components/button'
import { reset } from '../redux/slices/CartSlice'

export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const Featureproduct = useSelector(FeatureProducts)

  function Routefunc(route) {
    navigation.navigate(route)
  }

  return (
    <ScrollView>
      <BannerTitle />
      <Banner />
      <ProductCategory
        title={'HEADPHONES'}
        picture={HEADPHONES}
        route={() => Routefunc('HeadphoneTab')}
      />
      <ProductCategory
        title={'EARPHONES'}
        picture={EARPHONES}
        route={() => Routefunc('EarphoneTab')}
      />
      <ProductCategory
        title={'SPEAKER'}
        picture={SPEAKER}
        route={() => Routefunc('SpeakerTab')}
      />

      <View>
        {Featureproduct.map((product) => {
          return (
            <FeatureProductComponents
              key={product.id}
              category={product.category}
              image={product.featuredImage.source}
              desc={product.features}
            />
          )
        })}
      </View>
    </ScrollView>
  )
}
