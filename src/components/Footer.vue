<template>
  <v-footer class="d-block pa-0 white--text">
    <div class="secondary darken-1">
      <v-container class="text-center">
        <v-btn v-for="item in menuItems" :key="item.displayName" class="mx-1" small text dark :to="{ name: item.routeName }">
          {{ item.displayName }}
        </v-btn>
      </v-container>
    </div>

    <div class="secondary darken-2">
      <v-container>
        <p class="mb-0 text-center">
          {{ new Date().getFullYear() }} — <strong>deline.io</strong>
        </p>
      </v-container>
    </div>
  </v-footer>
</template>

<script>
  import { menuItems } from '../menu'

  export default {
    name: 'Footer',
    data: function() {
      return {
        menuItems
      }
    }
  }
</script>

<style scoped>
footer > div {
  flex-basis: 100%;
}
</style>
