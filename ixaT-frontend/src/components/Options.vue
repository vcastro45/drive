<template>
  <v-card flat class="options">
    <v-card-text>
      <v-card-title class="primary--text pb-0">
        <span class="title-head">Vos Options</span>
      </v-card-title>
      <v-layout wrap justify-center>
        <v-flex xs12>
          <v-select
            v-model="selected"
            label="Options"
            prepend-icon="mdi-format-list-checks"
            append-icon="mdi-menu-down"
            multiple
            chips
            deletable-chips
            :items="options"
          />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  interface IOptions {
    id: number,
    text: string
  }

  @Component
  export default class Options extends Vue {
    options: IOptions[] = [
      { id: 1, text: 'Siège auto' },
      { id: 2, text: 'Fauteuil roulant' },
      { id: 3, text: 'Van' },
      { id: 4, text: 'Animaux' },
      { id: 5, text: 'Bagages' }
    ]

    selected: IOptions[] = []
  }
</script>

<style scoped>
  .title-head {
    text-transform: uppercase;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    font-weight: bold;
    font-size: 1.8em;
    letter-spacing: 1px;
  }
</style>