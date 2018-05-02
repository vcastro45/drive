<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    temporary
  >
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title primary--text text-xs-center">
            ixaT
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list>
      <v-list-tile avatar v-for="(item, index) in items" :key="index" @click="item.action()">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.label }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  @Component
  export default class Navigator extends Vue {
    @Prop({type: Boolean, default: false})
    value: boolean

    drawer: boolean = false
    items: any[] = [
      {
        icon: 'mdi-home',
        label: 'Accueil',
        action: () => { this.goHome() }
      },
      {
        icon: 'mdi-history',
        label: 'Historique',
        action: () => { console.log('Historique') }
      },
      {
        icon: 'mdi-car-connected',
        label: 'Devenir chauffeur ixaT',
        action: () => { console.log('Devenir chauffeur') }
      }
    ]

    goHome (): void {
      this.$router.push({ name: 'Home' })
    }

    @Watch('value', { immediate: true })
    onOpenChanged (newVal: boolean): void {
      this.drawer = newVal
    }

    @Watch('drawer')
      onDrawerChanged (newVal: boolean): void {
      this.$emit('input', newVal)
    }
  }
</script>

