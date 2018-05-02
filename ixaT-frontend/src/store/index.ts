import Vue from 'vue'
import Vuex from 'vuex'
import map from './map'

Vue.use(Vuex)

export interface RootState {
  [stateKey: string]: any
}

export default new Vuex.Store<RootState>({
  state: {} as RootState,
  modules: {
    map
  },
  strict: false
})
