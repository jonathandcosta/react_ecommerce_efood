import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getTopRestaurantes: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetTopRestaurantesQuery } = api

export default api
