import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiResponse, CharacterType } from '../types/fetchedData';


export const charactersApi = createApi({
    reducerPath: "charactersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
    endpoints: (builder) => ({
        getCharacters: builder.query<ApiResponse, string>({
            query: (name = '') => name ? `/character?name=${name}` : `/character/`,
        }),
        getCharacterById: builder.query<CharacterType, string>({
            query: (id) => `/character/${id}`,
        })
    })
})

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = charactersApi;