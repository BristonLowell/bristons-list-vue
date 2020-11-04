<template>
  <div class="jobs container-fluid">
    <h1>Jobs</h1>
    <form class="form-group" @submit.prevent="createJob()">
      <input type="text"
             class="form-control"
             aria-describedby="helpId"
             placeholder="description"
             v-model="state.newJob.description"
      >
      <button type="submit" class="btn btn-info">
        Create Job
      </button>
    </form>
    <div class="row justify-content-center">
      <job-component v-for="job in jobs" :key="job._id" :job-prop="job" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import JobComponent from '../components/JobComponent'
import { jobsService } from '../services/JobsService'
export default {
  name: 'Jobs',
  jobs: computed(() => AppState.jobs),
  setup() {
    const state = reactive({
      newJob: {}
    })
    onMounted(() => {
      jobsService.getJobs()
    })
    return {
      state,
      jobs: computed(() => AppState.jobs),
      createJob() {

      }
    }
  },
  components: { JobComponent }
}
</script>

<style lang="scss" scoped>

</style>
