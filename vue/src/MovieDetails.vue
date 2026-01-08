<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { graphql } from './gql'
import { useQuery } from '@vue/apollo-composable'
import slugify from './slugify'

const router = useRouter()
const route = useRoute()

const MOVIE = graphql(`
  query Movie($movieId: Int!) {
    movie(where: { id: { eq: $movieId } }) {
      id
      name
      genre
      released
      actors {
        id
        firstName
        lastName
      }
    }
  }
`)

const id =
  typeof route.params.id === 'string'
    ? parseInt(route.params.id)
    : (() => {
        throw Error('Failed to get id')
      })()

const { loading, error, result } = useQuery(MOVIE, { movieId: id })
</script>

<template>
  <p v-if="loading">Loading...</p>
  <p v-else-if="error">{{ error }}</p>
  <div v-else>
    <button v-on:click="router.push('..')">go back</button>
    <h1>{{ result?.movie?.name }}</h1>
    <table>
      <tbody>
        <tr>
          <td>Released</td>
          <td>{{ new Date(result?.movie?.released).toISOString().split('T')[0] }}</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>{{ result?.movie?.genre }}</td>
        </tr>
      </tbody>
    </table>
    <section>
      <h3>Actors</h3>
      <ul :style="{ listStyle: 'none', padding: 0 }">
        <template v-for="actor in result?.movie?.actors" :key="actor.id">
          <RouterLink :to="`/actor/${actor.id}/${slugify(`${actor.firstName} ${actor.lastName}`)}`">
            <li>{{ actor.firstName }} {{ actor.lastName }}</li>
          </RouterLink>
        </template>
      </ul>
    </section>
  </div>
</template>

<style scoped></style>
