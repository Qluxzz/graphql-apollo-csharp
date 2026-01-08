<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { graphql } from './gql'
import { useRoute, useRouter } from 'vue-router'
import slugify from './slugify'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const ACTOR = graphql(`
  query Actor($actorId: Int!) {
    actor(where: { id: { eq: $actorId } }) {
      id
      firstName
      lastName
      movies {
        id
        name
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

const { loading, error, result } = useQuery(ACTOR, { actorId: id })

const actor = computed(() => result.value?.actor)
</script>

<template>
  <p v-if="loading">Loading...</p>
  <p v-else-if="error">{{ error }}</p>
  <div v-else-if="actor">
    <button v-on:click="router.push('/')">go back</button>
    <h1>{{ actor.firstName }} {{ actor.lastName }}</h1>
    <ul>
      <template v-for="movie in actor.movies" :key="movie.id">
        <RouterLink :to="`/movie/${movie.id}/${slugify(movie.name)}`">
          <li>{{ movie.name }}</li>
        </RouterLink>
      </template>
    </ul>
  </div>
</template>
