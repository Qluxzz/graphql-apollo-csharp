import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'

import { DefaultApolloClient } from '@vue/apollo-composable'
// HTTP connection to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:5034/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp(App)

app.provide(DefaultApolloClient, apolloClient)
app.use(router)

app.mount('#app')
