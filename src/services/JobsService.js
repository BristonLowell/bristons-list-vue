import { api } from './AxiosService'
import { AppState } from '../AppState'
// import router from '../router'

class JobsService {
  async getJobs(
  ) {
    try {
      const res = await api.get('jobs')
      AppState.jobs = res.data.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const jobsService = new JobsService()
