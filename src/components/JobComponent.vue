<template>
  <div class="job-component col-3 border border-dark m-5 p-2 shadow-lg">
    <router-link :to="{name: 'ActiveJob', params: { jobId: jobProp._id}}" class="text-dark">
      <h3>
        {{ jobProp.jobTitle }}
      </h3>
    </router-link>
    <p>
      Rate/hr: ${{ jobProp.rate }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'JobComponent',
  props: ['jobProp'],
  setup(props) {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
