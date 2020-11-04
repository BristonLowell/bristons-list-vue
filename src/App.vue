<template>
  <div id="nav">
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link> |
    <router-link :to="{name: 'Cars'}">
      Cars
    </router-link> |
    <router-link :to="{name: 'Houses'}">
      Houses
    </router-link> |
    <router-link :to="{name: 'Jobs'}">
      Jobs
    </router-link>
  </div>
  <router-view />
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  setup() {
    return { appState: computed(() => AppState) }
  }
}
</script>
