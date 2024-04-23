import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../pages/Home'
import { dish } from '../pages/Profile'

type PurchasePayload = {
  products: dish[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number?: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        mounth: number
        year: number
      }
    }
  }
}

type PurchuseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getTopRestaurantes: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<PurchuseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetTopRestaurantesQuery, usePurchaseMutation } = api

export default api
