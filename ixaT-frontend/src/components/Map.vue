<template>
  <div class="map" ref="GMap">

  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'

  @Component
  export default class Map extends Vue {

    geolocation: Position | null = null
    map: any = null

    getLocation (): void {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: Position) => {
          this.geolocation = position
        })
      } else {
        console.log('Geolocation is not supported by this browser.')
      }
    }

    @Watch('geolocation', { immediate: true })
    onGeolocationChanged (newVal: Position | null) {
      if (newVal) {
        this.map.setCenter(new google.maps.LatLng(newVal.coords.latitude, newVal.coords.longitude))
      }
    }

    displayGMap (): void {
      try {
        const options: any = {
          zoom: 13,
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          center: new google.maps.LatLng(47.9072706, 1.903288)
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