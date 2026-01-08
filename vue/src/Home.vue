<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { graphql } from './gql'

const MOVIES = graphql(`
  query Movies {
    movies(order: { released: DESC }) {
      id
      name
      released
      actors {
        id
      }
    }
  }
`)

const { loading, error, result } = useQuery(MOVIES)
</script>

<template>
  <span v-if="loading">Loading</span>
  <span v-else-if="error">{{ error }}</span>
  <div v-else-if="result?.movies">
    <ul>
      <template v-for="movie in result.movies" :key="movie.id">
        <RouterLink :to="`/movie/${movie.id}`">
          <li>{{ movie.released }} - {{ movie.name }}</li>
        </RouterLink>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>
