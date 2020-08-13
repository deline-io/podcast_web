<template>
  <v-card class="d-flex flex-column" height="100%">
    <v-card-title class="font-weight-black">{{ episode.title }}</v-card-title>
    <v-card-subtitle class="white--text mt-1">{{ episode.description }}</v-card-subtitle>

    <v-card-text class="flex-grow-1">
      <span class="d-block mr-4 caption" v-for="prop in properties" :key="prop.name">
        <v-icon class="mr-1" small>{{ prop.icon }}</v-icon> {{ prop.value }}
      </span>

      <div class="mt-4">
        <v-chip v-for="tag in episode.tags" :key="tag" class="ma-1" color="primary" outlined small>{{ tag }}</v-chip>
      </div>
    </v-card-text>

    <v-divider/>

    <v-card-actions>
      <v-spacer/>
      <v-btn text color="accent" @click="showDetail(episode.id)">
        view details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'EpisodeListItem',
    props: {
      episode: Object
    },
    methods: {
      showDetail: function(id) {
        this.$router.push({ name: 'Detail', params: { id: id } })
      }
    },
    computed: {
      properties: function() {
        var date = new Date(Date.parse(this.episode.pub_date))
        var pubDateString = date.toLocaleString()

        var rawSeconds = this.episode.duration_sec
        var minutes = Math.floor(rawSeconds / 60.0)
        var seconds = rawSeconds - minutes * 60
        var durationString = `${minutes} minutes and ${seconds} seconds`

        return [
          {
            icon: "mdi-calendar",
            value: pubDateString
          },
          {
            icon: "mdi-clock-outline",
            value: durationString
          }
        ]
      }
    }
  }
</script>
