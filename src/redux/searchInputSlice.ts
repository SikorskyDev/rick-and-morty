import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface searchInputState {
    inputValue: string
}

const initialState: searchInputState = {
    inputValue: '',
}

export const searchInputSlice = createSlice({
    name: 'searchInput',
    initialState,
    reducers: {
        setInputValue: (state, action: PayloadAction<string>) => {
            state.inputValue = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setInputValue } = searchInputSlice.actions

export default searchInputSlice.reducer