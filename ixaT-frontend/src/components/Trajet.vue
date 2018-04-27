<template>
  <v-card flat class="trajet">
    <v-card-text>
      <v-layout wrap justify-center>
        <v-flex xs10>
          <v-text-field
            label="Départ"
            prepend-icon="mdi-bullseye"
          />
        </v-flex>

        <v-flex xs10>
          <v-text-field
            label="Arrivée"
            prepend-icon="mdi-map-marker-radius"
          />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Trajet extends Vue {

  }
</script>