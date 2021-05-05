import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { adapter } from '../../Pages/Home/helper'

export const fetchInitialData = createAsyncThunk(
  'swapi.dev/api/',
  async url => {
    const response = await fetch(url)
    const json = await response.json()
    return adapter(json)
  }
)

export const fetchFinalData = createAsyncThunk(
  'swapi.dev/api/selection',
  async url => {
    const response = await fetch(url)
    const json = await response.json()
    return json
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState: { initial: [], final:{}, loading: 'idle' },
  reducers: {},
  extraReducers: {
    [fetchInitialData.fulfilled]: (state, action) => {
      state.initial = action.payload
    },
    [fetchFinalData.fulfilled]: (state, action) => {
      state.final = action.payload
    },
  },
})

export default dataSlice.reducer
