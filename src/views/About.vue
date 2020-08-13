<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xl="6" lg="8" md="10" sm="12" class="mt-8">
        <div class="text-h3 text-center primary--text font-weight-black">About deline.io</div>

        <div class="text-body-1 mt-8">
          deline.io is a...
        </div>

        <div class="text-h3 text-center primary--text mt-12 font-weight-black">Who We Are?</div>

        <div class="mt-8">
          <v-list-item>
            <v-list-item-avatar color="grey darken-3">
              <v-img />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-h4 font-weight-black">Kento Kawakami</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              I am a ...
            </v-list-item-content>
          </v-list-item>
        </div>

        <div class="mt-8">
          <v-list-item>
            <v-list-item-avatar color="grey darken-3">
              <v-img />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="text-h4 font-weight-black">Ryunosuke Tada</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              I am a ...
            </v-list-item-content>
          </v-list-item>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'About',
  }
</script>

<style scoped>
</style>
