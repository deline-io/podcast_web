<template>
  <header class="primary white--text pa-4">
    <v-container>
      <v-img class="mt-4" src="../assets/logo.svg" height="136px" contain transition="scroll-y-transition" />

      <div class="mt-6 text-center text-h4 font-weight-black">
        Talking about Software Development and Gadgets.
      </div>
    </v-container>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  header {
    min-height: 280px;
  }
</style>
