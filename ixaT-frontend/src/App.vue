<template>
  <v-app>
    <navigator v-model="drawer"/>
    <div class="burger" @click="drawer = !drawer">
      <v-icon large color="white">mdi-menu</v-icon>
    </div>
    <v-container fluid class="pa-0">
      <v-layout wrap column style="height: 100%">
        <v-flex class="p-relative">
          <carte/>
        </v-flex>
        <v-flex shrink>
          <router-view/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Carte from '@/components/Map.vue'
  import Navigator from '@/components/Navigator.vue'

  @Component({
  components: {
    Carte,
    Navigator
  }
})
export default class App extends Vue {
  drawer: boolean = false
}
</script>

<style scoped>
  .burger {
    display: inline-block;
    z-index: 1;
    text-shadow: 0px 1px 2px #646464;
    position: absolute;
    top: 10px;
    left: 10px;
  }
</style>

<style>
  .p-relative {
    position: relative;
  }
</style>