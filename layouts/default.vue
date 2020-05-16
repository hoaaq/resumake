<template>
  <v-app>
    <v-app-bar fixed app>
      <div class="flex-grow-1 text-center">
        <v-toolbar-title @click="$router.push('/')" v-text="'Resumake'" />
      </div>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {}
</script>
