import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PRODUCT_IMAGE_MAP } from '../../data/product-image-map'

export const FetchProduct = createAsyncThunk('fetch/products', async () => {
  const res = await (
    await fetch('https://arfat-hasaan.github.io/API/AudioGadget.json')
  ).json()
  return res
})

const BookSlice = createSlice({
  name: 'prouducts',
  initialState: {
    products: [],
    error: '',
    status: 'idle',
  },
  reducers: {},
  extraReducers: (build) => {
    build.addCase(FetchProduct.pending, (state, action) => {
      state.status = 'Pending'
    })
    build.addCase(FetchProduct.fulfilled, (state, action) => {
      state.status = 'success'
      const { payload } = action
      payload.forEach((product) => {
        product.featuredImage = PRODUCT_IMAGE_MAP[product.name].featuredImage
        product.images = PRODUCT_IMAGE_MAP[product.name].images
      })

      state.products = payload
    })

    build.addCase(FetchProduct.rejected, (state, action) => {
      state.error = 'network Fiald'
      state.status = 'fail'
    })
  },
})

export const FeatureProducts = (state) =>
  state.Data.products.filter((product) => product.is_featured)

export const HeadphonesItem = (state) =>
  state.Data.products.filter((product) => product.category === 'headphones')
export const SpeakersItem = (state) =>
  state.Data.products.filter((product) => product.category === 'speakers')
export const EarphonesItem = (state) =>
  state.Data.products.filter((product) => product.category === 'earphones')

export const Product = (state, id) =>
  state.Data.products.find((product) => product.id === id)

export default BookSlice.reducer
