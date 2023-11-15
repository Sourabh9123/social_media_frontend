import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { accountApi } from './services/accounts'




export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [accountApi.reducerPath]: accountApi.reducer,

      
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(accountApi.middleware),
  })



  setupListeners(store.dispatch)