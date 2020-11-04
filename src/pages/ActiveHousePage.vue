<template>
  <div class="active-house col-3 mt-5 border border-dark shadow-lg text-center offset-4 p-2">
    <img :src="house.imgUrl" class="img-fluid" alt="">
    <h3>Bedrooms: {{ house.bedrooms }}</h3>
    <h3>Bathrooms: {{ house.bathrooms }}</h3>
    <h3>Stories: {{ house.levels }}</h3>
    <h3>Description: {{ house.description }}</h3>
    <button class="btn btn-danger btn-block mb-3" @click="removeHouse">
      Delete
    </button>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  name: 'ActiveHouse',
  setup() {
    const route = useRoute()
    onMounted(() => {
      housesService.getActiveHouse(route.params.houseId)
    })
    return {
      house: computed(() => AppState.activeHouse),
      removeHouse() {
        housesService.removeHouse(route.params.houseId)
      }
    }
  }
}
</script>

<style scoped>

</style>
