import Forms from './Forms/Forms.vue'
import Store from './store/Store.vue'
import Home from './Home.vue'

export const routes = [
  { path: '', component: Home },
  { path: '/forms', component: Forms },
  { path: '/store', component: Store }
]
