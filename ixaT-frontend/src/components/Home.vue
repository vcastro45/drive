<template>
    <div class="home">
        <v-tabs icons-and-text dark color="secondary" grow v-model="tab">
            <v-tabs-slider style="height: 3px;" color="primary"></v-tabs-slider>
            <v-tab :to="{ name: 'Home' }" exact>
                Trajet
                <v-icon>mdi-map-marker-multiple</v-icon>
            </v-tab>
            <v-tab :to="{ name: 'Options' }">
                Options
                <v-icon>mdi-flask-outline</v-icon>
            </v-tab>
            <v-tab :to="{ name: 'Account' }">
                Compte
                <v-icon>mdi-account</v-icon>
            </v-tab>
            <v-tab-item
              id="/"
            >
              <trajet/>
            </v-tab-item>

          <v-tab-item
            id="/options"
          >
            <options/>
          </v-tab-item>

          <v-tab-item
            id="/account"
          >
            <compte/>
          </v-tab-item>
        </v-tabs>
        <validator/>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Trajet from './Trajet.vue'
import Compte from './Compte.vue'
import Options from './Options.vue'
import Validator from './Validator.vue'

@Component({
  components: {
    Trajet,
    Compte,
    Options,
    Validator
  }
})
export default class Home extends Vue {
  tab: string = '/'
}
</script>

<style scoped>
  .home {
      height: 100%;
  }

  .home /deep/ .tabs__items {
    height: 35vh;
    background-color: white;
    overflow: auto;
  }
</style>
