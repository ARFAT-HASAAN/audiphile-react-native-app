import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import { store } from './src/redux/store/Store'
import { Provider } from 'react-redux'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Navigation from './src/Navigation/Navigation'
import FlashMessage from 'react-native-flash-message'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

export default function App() {
  const [fontsLoaded] = useFonts({
    'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <Navigation />
          </SafeAreaView>
          <FlashMessage position="top" />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
    paddingVertical: 10,
  },
})
