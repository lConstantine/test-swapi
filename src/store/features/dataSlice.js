import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { adapter } from '../../Pages/Home/helper'
import { finalDataAdapter } from '../../Pages/DataDisplay/helper'

export const fetchData = createAsyncThunk('swapi', async (url, thunkAPI) => {
  try {
    const response = await fetch(url)
    const json = await response.json()
    console.log('payload', json)
    return json
  } catch (err) {
    console.log(err)
    return err
  }
})

const dataSlice = createSlice({
  name: 'data',
  initialState: { initialData: [], finalData: {}, loading: 'idle', error: '' },
  reducers: {},
  extraReducers: {
    [fetchData.pending]: state => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    [fetchData.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
      }
      console.log('action.payload', action.payload)
      if (!action.payload.count) {
        state.initialData = adapter(action.payload)
      } else {
        state.finalData = finalDataAdapter(action.payload)
      }
    },
    [fetchData.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
      }
      state.error = action.payload
    },
  },
})

export default dataSlice.reducer
