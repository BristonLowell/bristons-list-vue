<template>
  <div class="active-house">
    <h1>Hello</h1>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
// import { AppState } from '../AppState'
export default {
  name: 'ActiveHouse',
  setup() {
    return {
      job: computed(() => AppState.activeJob)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
