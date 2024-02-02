import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getTopRestaurants: builder.query<Restaurants[], void>({
      query: () => 'restaurants'
    })
  })
})

export const { useGetTopRestaurantsQuery } = api

export default api
