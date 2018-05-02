import { Module } from 'vuex'
import { RootState } from '@/store'
import { Action, Getter, Mutation, namespace, State } from 'vuex-class'
import LatLng = google.maps.LatLng
import AutocompletePrediction = google.maps.places.AutocompletePrediction

const _namespace = 'map'
export const StateMap = namespace(_namespace, State)
export const GetterMap = namespace(_namespace, Getter)
export const MutationMap = namespace(_namespace, Mutation)
export const ActionMap = namespace(_namespace, Action)

export interface MapState {
  latLng: LatLng,
  journey: { from: AutocompletePrediction, to: AutocompletePrediction } | null
}

const map = {
  namespaced: true,
  state: {
    latLng: new google.maps.LatLng(47.9072706, 1.903288),
    journey: null
  },
  getters: {
    mapLatLng (state: MapState) {
      return state.latLng
    },
    mapJourney (state: MapState) {
      return state.journey
    }
  },
  mutations: {
    setMapLatLng (state: MapState, latLng: LatLng) {
      state.latLng = latLng
    },
    setMapJourney (state: MapState, journey: { from: AutocompletePrediction, to: AutocompletePrediction } | null) {
      state.journey = journey
    }
  }
} as Module<MapState, RootState>

export default map
