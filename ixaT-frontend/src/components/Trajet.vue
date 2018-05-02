<template>
  <v-card flat class="trajet">
    <v-card-text>
      <v-layout wrap justify-center>
        <v-flex xs10>
          <v-select
            v-model="selectedFrom"
            label="Départ"
            prepend-icon="mdi-bullseye"
            autocomplete
            :search-input.sync="searchFrom"
            item-text="description"
            :return-object="true"
            :items="itemsFrom"
          />
        </v-flex>

        <v-flex xs10>
          <v-select
            v-model="selectedTo"
            label="Arrivée"
            prepend-icon="mdi-map-marker-radius"
            autocomplete
            :search-input.sync="searchTo"
            item-text="description"
            :return-object="true"
            :items="itemsTo"
          />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import debounce from 'lodash/debounce'
  import { GetterMap, MutationMap } from '@/store/map'
  import LatLng = google.maps.LatLng
  import AutocompletePrediction = google.maps.places.AutocompletePrediction

  @Component
  export default class Trajet extends Vue {
    @GetterMap
    mapLatLng: LatLng
    @MutationMap
    setMapJourney: (journey: { from: AutocompletePrediction, to: AutocompletePrediction } | null) => any

    searchFrom: string = ''
    searchTo: string = ''

    itemsFrom: AutocompletePrediction[] = []
    itemsTo: AutocompletePrediction[] = []

    selectedFrom: AutocompletePrediction | null = null
    selectedTo: AutocompletePrediction | null = null

    autocompleteService = new google.maps.places.AutocompleteService()

    debouncedSearch: any = debounce(this.search, 500)

    get journey (): { from: AutocompletePrediction | null, to: AutocompletePrediction | null } {
      return {
        from: this.selectedFrom,
        to: this.selectedTo
      }
    }

    search (query: string | null, field: 'from' | 'to') {
      if (query && query.length > 0) {
        this.autocompleteService.getPlacePredictions({
          input: query,
          location: this.mapLatLng,
          radius: 5000
        }, (prediction: AutocompletePrediction[]) => {
          if (prediction) {
            if (field === 'from') {
              this.itemsFrom = prediction
            } else if (field === 'to') {
              this.itemsTo = prediction
            }
          }
        })
      }
    }

    @Watch('searchFrom')
    onSearchFromChanged (newVal: string) {
      this.debouncedSearch(newVal, 'from')
    }

    @Watch('searchTo')
    onSearchToChanged (newVal: string) {
      this.debouncedSearch(newVal, 'to')
    }

    @Watch('itemsFrom')
    onItemsFromChanged () {
      if (this.selectedFrom) {
        if (this.itemsFrom.indexOf(this.selectedFrom) < 0) {
          this.itemsFrom.push(this.selectedFrom)
        }
      }
    }

    @Watch('itemsTo')
    onItemsToChanged () {
      if (this.selectedTo) {
        if (this.itemsTo.indexOf(this.selectedTo) < 0) {
          this.itemsTo.push(this.selectedTo)
        }
      }
    }

    @Watch('journey')
    onJourneyChanged () {
      if (this.journey.from !== null && this.journey.to !== null) {
        this.setMapJourney(this.journey as { from: AutocompletePrediction, to: AutocompletePrediction })
      }
    }
  }
</script>