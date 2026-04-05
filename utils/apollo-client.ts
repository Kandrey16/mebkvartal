import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: `${API_ENDPOINT}/graphql`, credentials: 'include' }),

  cache: new InMemoryCache()
})
