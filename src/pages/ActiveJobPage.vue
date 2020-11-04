<template>
  <div class="active-job col-3 mt-5 border border-dark shadow-lg text-center offset-4 p-2">
    <img :src="job.imgUrl" class="img-fluid" alt="">
    <h1> {{ job.company }}</h1>
    <h3>Hours per Week: {{ job.hours }}</h3>
    <p>Description: {{ job.description }}</p>
    <button class="btn btn-danger btn-block mb-3" @click="removeJob">
      Delete
    </button>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { jobsService } from '../services/JobsService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  name: 'ActiveJob',
  setup() {
    const route = useRoute()
    onMounted(() => {
      jobsService.getActiveJob(route.params.jobId)
    })
    return {
      job: computed(() => AppState.activeJob),
      removeJob() {
        jobsService.removeJob(route.params.jobId)
      }
    }
  }
}
</script>

<style scoped>

</style>
