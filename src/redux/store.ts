import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { charactersApi } from './charactersApi';
import searchInputSlice from './searchInputSlice';


export const store = configureStore({
    reducer: {
        [charactersApi.reducerPath]: charactersApi.reducer,
        searchInputSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(charactersApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()