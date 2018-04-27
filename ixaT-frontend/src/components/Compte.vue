<template>
  <v-card flat class="compte">
    <v-card-title class="primary--text pb-0">
      <span class="title-head">Votre Compte</span>
    </v-card-title>
    <v-card-text>
      <v-layout wrap justify-center>
        <v-flex xs10>
          <v-text-field
            v-model="user.username"
            label="Nom complet"
            prepend-icon="mdi-account"
          />
        </v-flex>

        <v-flex xs10>
          <v-text-field
            v-model="user.email"
            label="Adresse e-mail"
            prepend-icon="mdi-at"
          />
        </v-flex>

        <v-flex xs10>
          <v-text-field
            v-model="user.password"
            label="Nouveau mot de passe"
            prepend-icon="mdi-lock-outline"
            :append-icon="showPasswd ? 'mdi-eye' : 'mdi-eye-off'"
            :append-icon-cb="() => (showPasswd = !showPasswd)"
            :type="showPasswd ? 'text' : 'password'"
            :rules="passwdRules"
          />
        </v-flex>

        <v-flex xs10>
          <v-text-field
            v-model="confPasswd"
            label="Confirmation mot de passe"
            prepend-icon="mdi-lock-outline"
            :append-icon="showConfPasswd ? 'mdi-eye' : 'mdi-eye-off'"
            :append-icon-cb="() => (showConfPasswd = !showConfPasswd)"
            :type="showConfPasswd ? 'text' : 'password'"
            :rules="confPasswdRules"
          />
        </v-flex>
        <v-flex xs10>
          <v-layout wrap justify-center class="pb-3">
            <v-flex xs6 class="px-1">
              <v-btn outline block color="red">Annuler</v-btn>
            </v-flex>
            <v-flex xs6 class="px-1">
              <v-btn block depressed color="primary">Valider</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { UserWithPasswd } from '@/api/Compte'

  @Component
  export default class Compte extends Vue {
    showPasswd: boolean = false
    showConfPasswd: boolean = false

    user: UserWithPasswd = new UserWithPasswd()
    confPasswd: string = ''

    passwdRules: any[] = [
      (v?: string | null): boolean | string => {
        return !!v || 'Veuillez saisir un mot de passe'
      }
    ]

    confPasswdRules: any[] = [
      (v?: string | null): boolean | string => {
        return v === this.user.password || 'La confirmation et le mot de passe ne sont pas identiques'
      }
    ]
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
