<template>
  <div v-if="episode">
    <header class="primary white--text pa-4">
      <v-container>
        <div class="text-h4">{{ pubDateString }}</div>
        <div class="text-h2 mt-2 font-weight-black">{{ episode.title }}</div>
        <div class="text-h5 mt-6">{{ episode.description }}</div>
      </v-container>
    </header>

    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-text class="pb-0">
              <v-row justify="center" :no-gutters="true">
                <v-col cols="12" xs="12" sm="10" md="8" lg="6">
                  <vuetify-audio :file="episode.file_url" :flat="true" />
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-title class="py-0 font-weight-black">
              Keywords
            </v-card-title>
            <v-card-text class="mt-2">
              <div>
                <v-chip v-for="tag in episode.tags" :key="tag" class="ma-1" color="primary" outlined small>{{ tag }}</v-chip>
              </div>
            </v-card-text>

            <v-divider />

            <v-card-text>
              <div v-html="episode.show_note"/>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import VuetifyAudio from 'vuetify-audio'

  export default {
    name: 'Detail',
    data: function() {
      return {
        episode: null
      }
    },
    mounted() {
      this.axios.get(`episodes/${this.$route.params.id}.json`).then(res =>
        this.episode = res.data
      )
    },
    computed: {
      pubDateString: function() {
        var date = new Date(Date.parse(this.episode.pub_date))
        return date.toLocaleDateString()
      }
    },
    components: {
      VuetifyAudio
    }
  }
</script>

<style scoped>
  header {
    min-height: 280px;
  }
</style>
