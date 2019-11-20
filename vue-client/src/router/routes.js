import SurveyCreateForm from '../components/SurveyCreateForm.vue'
import SurveyPageForm from '../components/SurveyPageForm.vue'

export const routes = [
  { path: '', component: SurveyCreateForm },
  { path: '/survey/:id', component: SurveyPageForm }
]
