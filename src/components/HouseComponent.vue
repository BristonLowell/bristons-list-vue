<template>
  <div class="house-component col-3 border border-dark m-5 p-2 shadow-lg">
    <h3>
      ${{ houseProp.price }} | Year: {{ houseProp.year }}
    </h3>
    <router-link :to="{name: 'ActiveHouse' , params: {houseId: houseProp._id}}">
      <img :src="
             houseProp.imgUrl"
           alt="house Img"
           class="img-fluid"
      >
    </router-link>

    <!-- {{ houseProp }} -->
  </div>
</template>

<script>
export default {
  name: 'HouseComponent',
  props: ['houseProp'],
  setup(props) {
    return {
    }
  }
}
</script>

<style scoped>

</style>
