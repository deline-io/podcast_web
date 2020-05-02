<template>
    <v-container>
        <h1 class="display-1">{{ episode.title }}</h1>
        <h2 class="subtitle-1">{{ episode.description }}</h2>

        <v-chip-group column class="tag-container">
            <v-chip v-for="tag in episode.tags" :key="tag" label class="ma-1">{{ tag }}</v-chip>
        </v-chip-group>

        <v-card class="show-note">
            <v-card-text>
                <div>
                    <audio :src="episode.file_url" controls/>
                </div>

                <span>{{ episode.pub_date }}</span>
            </v-card-text>

            <v-card-actions>
                <v-spacer/>
                <v-btn icon @click="isVisible = !isVisible">
                    <v-icon>{{ isVisible ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                 </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="isVisible">
                <v-divider></v-divider>

                <v-card-text>
                    <span v-html="episode.show_note"/>
                </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </v-container>
</template>

<script>
export default {
  name: 'Detail',
  data: function() {
      return {
          episode: null,
          isVisible: false
      }
  },
  mounted() {
    this.axios.get(`episodes/${this.$route.params.id}.json`).then(res =>
        this.episode = res.data
    )
  }
}
</script>

<style scoped>
.show-note {
    margin: 1em 0;
}
</style>