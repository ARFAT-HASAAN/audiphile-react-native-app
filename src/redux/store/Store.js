import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from './../slices/ActionSlice'
import BookReducer from '../slices/ProductSlice'
import CartReducer from '../slices/CartSlice'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  blacklist: ['counter, Data '],
}

const rootReducers = combineReducers({
  counter: counterReducer,
  Data: BookReducer,
  Cart: CartReducer,
})

const persistReducers = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
