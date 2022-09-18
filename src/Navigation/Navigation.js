import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Earphone from '../screens/earnphones'
import Headphone from '../screens/headphones'
import Speacker from '../screens/speacker'
import ProductDetails from '../screens/porductDetails'
import Cart from '../screens/cart'
import Cheakout from '../screens/checkout'
import {
  Entypo,
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons'
import { FetchProduct } from '../redux/slices/ProductSlice'

import { colors } from '../Theme/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { CartLength } from '../redux/slices/CartSlice'

//  home, shopping-cart, earphones-alt headphones speaker
const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    background: 'white',
  },
}

const HomeStack = createNativeStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
    </HomeStack.Navigator>
  )
}
const EarphoneStack = createNativeStackNavigator()

function EarphoneStackScreen() {
  return (
    <EarphoneStack.Navigator screenOptions={{ headerShown: false }}>
      <EarphoneStack.Screen name="EarphoneScreen" component={Earphone} />
      <EarphoneStack.Screen
        name="productDetialsScreen"
        component={ProductDetails}
      />
    </EarphoneStack.Navigator>
  )
}
const HeadphoneStack = createNativeStackNavigator()

function HeadphoneStackScreen() {
  return (
    <HeadphoneStack.Navigator screenOptions={{ headerShown: false }}>
      <HeadphoneStack.Screen name="HeadphoneScreen" component={Headphone} />
      <HeadphoneStack.Screen
        name="productDetialsScreen"
        component={ProductDetails}
      />
    </HeadphoneStack.Navigator>
  )
}
const SpeckerStack = createNativeStackNavigator()

function SpeackerStackScreen() {
  return (
    <SpeckerStack.Navigator screenOptions={{ headerShown: false }}>
      <SpeckerStack.Screen name="SpeakerScreen" component={Speacker} />
      <SpeckerStack.Screen
        name="productDetialsScreen"
        component={ProductDetails}
      />
    </SpeckerStack.Navigator>
  )
}
const CartStack = createNativeStackNavigator()

function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="cartScreen" component={Cart} />
      <CartStack.Screen name="CheckoutScreen" component={Cheakout} />
    </CartStack.Navigator>
  )
}

const TabBarIcon = ({ fontFamily, name, color }) => {
  if (fontFamily === 'home') {
    return <Entypo name={name} size={24} color={color} />
  } else if (fontFamily === 'headphones') {
    return <FontAwesome5 name={name} size={24} color={color} />
  } else if (fontFamily === 'earphones-alt') {
    return <SimpleLineIcons name={name} size={24} color={color} />
  } else if (fontFamily === 'shopping-cart') {
    return <FontAwesome5 name={name} size={24} color={color} />
  } else if (fontFamily === 'speaker') {
    return <MaterialIcons name={name} size={24} color={color} />
  }
}

const Tab = createBottomTabNavigator()

export default function Navigation() {
  const CartLength = useSelector((state) => state.Cart.OrderedProduct.length)
  console.log(CartLength)
  const Dispatch = useDispatch(FetchProduct())

  useEffect(() => {
    Dispatch(FetchProduct())
  }, [])

  const status = useSelector((state) => state.Data.status)
  console.log(status)
  if (status === 'idle' || status === 'Pending') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    )
  }

  return (
    <NavigationContainer theme={Theme}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {
            paddingVertical: 15,
            height: 60,
            borderRadius: 10,
            marginBottom: 10,
          },
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <TabBarIcon fontFamily="home" name="home" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="HeadphoneTab"
          component={HeadphoneStackScreen}
          options={{
            title: 'Headphones',
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={'headphones'}
                name="headphones"
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="EarphoneTab"
          component={EarphoneStackScreen}
          options={{
            title: 'Earphones',
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={'earphones-alt'}
                name="earphones-alt"
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="SpeakerTab"
          component={SpeackerStackScreen}
          options={{
            title: 'Speakers',
            tabBarIcon: ({ color }) => (
              <TabBarIcon fontFamily="speaker" name="speaker" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="CartTab"
          component={CartStackScreen}
          options={{
            tabBarBadge: CartLength >
              0 ? CartLength : null,
            tabBarBadgeStyle: { backgroundColor: 'red' },
            title: 'Cart',
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily="shopping-cart"
                name="shopping-cart"
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
