<template>
  <div class="houses-page container-fluid">
    <h1>Houses</h1>
    <form class="form-group" @submit.prevent="createHouse">
      <input type="number"
             class="form-control"
             aria-describedby="helpId"
             placeholder="bedrooms"
             v-model="state.newHouse.bedrooms"
      >
      <input type="number"
             class="form-control"
             aria-describedby="helpId"
             placeholder="bathrooms"
             v-model="state.newHouse.bathrooms"
      >
      <input type="text"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Description"
             v-model="state.newHouse.description"
      >
      <input type="text"
             class="form-control"
             aria-describedby="helpId"
             placeholder="ImgUrl"
             v-model="state.newHouse.imgUrl"
      >
      <input type="number"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Year"
             v-model="state.newHouse.year"
      >
      <input type="number"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Price"
             v-model="state.newHouse.price"
      >
      <input type="number"
             class="form-control"
             aria-describedby="helpId"
             placeholder="Stories"
             v-model="state.newHouse.levels"
      >
      <button type="submit" class="btn btn-info">
        Create House
      </button>
    </form>
    <div class="row justify-content-center">
      <house-component v-for="house in houses" :key="house._id" :house-prop="house" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { housesService } from '../services/HousesService'
import HouseComponent from '../components/HouseComponent'
import { AppState } from '../AppState'
export default {
  name: 'HousesPage',
  components: { HouseComponent },
  setup() {
    const state = reactive({
      newHouse: {}
    })
    onMounted(() => {
      housesService.getAllHouses()
    })
    return {
      state,
      houses: computed(() => AppState.houses),
      createHouse() {
        housesService.createHouse(state.newHouse)
      }
    }
  }
}
</script>

<style scoped>

</style>
