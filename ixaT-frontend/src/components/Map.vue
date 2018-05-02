<template>
  <div class="map" ref="GMap">

  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import { GetterMap, MutationMap } from '@/store/map'
  import LatLng = google.maps.LatLng

  @Component
  export default class Map extends Vue {

    @GetterMap
    mapLatLng: LatLng
    @MutationMap
    setMapLatLng: (latLng: LatLng) => any

    map: any = null

    getLocation (): void {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: Position) => {
          this.setMapLatLng(new google.maps.LatLng(position.coords.latitude, position.coords.longitude))
        })
      } else {
        console.log('Geolocation is not supported by this browser.')
      }
    }

    @Watch('mapLatLng', { immediate: true })
    onGeolocationChanged (newVal: Position | null) {
      if (newVal && this.map) {
        this.map.setCenter(this.mapLatLng)
      }
    }

    displayGMap (): void {
      try {
        const options: any = {
          zoom: 13,
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          center: this.mapLatLng
        }

        this.map = new google.maps.Map((this as any).$refs.GMap, options)
        this.getLocation()
      } catch (e) {
        setTimeout(() => {
          this.displayGMap()
        }, 100)
      }
    }

    mounted () {
      this.displayGMap()
    }
  }
</script>

<style scoped>
  .map {
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>