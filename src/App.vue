<template>
  <v-app>
    <div id="app" class="d-flex flex-column">

      <v-app-bar app class="flex-grow-0">
        <v-app-bar-nav-icon class="d-flex d-md-none mr-2" @click="isDrawerVisible =! isDrawerVisible"/>

        <v-img class="mr-4" src="./assets/square_logo.svg" max-width="36px" max-height="36px" transition="false" />

        <div class="d-none d-md-block">
          <v-btn v-for="item in menuItems" :key="item.displayName" class="mx-1" text :to="{ name: item.routeName }">
            {{ item.displayName }}
          </v-btn>
        </div>
      </v-app-bar>

      <v-navigation-drawer app temporary v-model="isDrawerVisible">
        <v-list-item class="text-capitalize" v-for="item in menuItems" :key="item.displayName" link :to="{ name: item.routeName }">
          {{ item.displayName }}
        </v-list-item>
      </v-navigation-drawer>

      <v-main class="flex-grow-1">
        <router-view/>
      </v-main>

      <Footer />
    </div>
  </v-app>
</template>

<script>
  import { menuItems } from './menu'
  import Footer from "./components/Footer"

  export default {
    data: function() {
      return {
        menuItems,
        isDrawerVisible: false
      }
    },
    components: {
      Footer
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }
  body {
    min-width: 320px;
  }
</style>
