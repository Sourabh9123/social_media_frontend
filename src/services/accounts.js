import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
    
    endpoints: (builder) => ({
      signup: builder.mutation({
      
        query : (userData) => ({
          url : 'account/signup/',
          method : 'POST',
          headers: {
                 "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            
        })
       
      }),
      login: builder.mutation({
        query : (userData) => ({
          url : 'account/login/',
          method : 'POST',
          headers: {
                 "Content-Type": "application/json",
                
              },
              body: JSON.stringify(userData),
            
        })
      }),
      changepassword: builder.mutation({
        query : (userData,token) => ({
          url : 'account/change-passowrd/',
          method : 'POST',
          headers: {
                 "Content-Type": "application/json",
                 'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify(userData),
            
        })
      }),
      getProduct:  builder.query({
        query :  () => ({
          url : 'store/products/',
          method :  'GET',
          headers: {
                 "Content-Type": "application/json",
                 
              },
              
            
        })
      }),

    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useSignupMutation, useLoginMutation , useChangepasswordMutation, useGetProductQuery} = accountApi
