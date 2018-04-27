<template>
  <div class="validator" :class="{ 'hidden': hidden }">
    <div v-if="hidden" class="text-xs-center activator" @click="hidden = false" v-touch="{ up: () => { hidden = false } }">
      <v-icon>mdi-chevron-up</v-icon>
    </div>
    <transition name="slide-y-reverse-transition">
      <div v-if="!hidden" v-touch="{ down: () => { hidden = true } }">
        <v-btn block dark color="primary" @click="hidden = true">Valider</v-btn>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Validator extends Vue {
    hidden: boolean = true
  }
</script>

<style scoped>

  .activator {
    height: 40px;
    width: 40px;
    margin: auto;
    cursor: pointer;
  }

  .activator .icon {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    animation: activator 1.5s infinite, popin .5s .5s forwards;
  }

  .validator {
    position: fixed;
    bottom: 0;
    width: 100vw;
  }

  .validator:not(.hidden) {
    height: 40px;
  }

  @keyframes activator {
    0% {
      top: 50%
    }
    50% {
      top: calc(50% - 10px)
    }
    100% {
      top: 50%
    }
  }

  @keyframes popin {
    from { opacity: 0 }
    to { opacity: 1 }
  }

</style>