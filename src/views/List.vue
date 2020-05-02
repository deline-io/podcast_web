<template>
    <v-container>
        <v-card class="episode-card" v-for="ep in episodes" :key="ep.id">
            <v-card-title>{{ ep.title }}</v-card-title>
            <v-card-subtitle>{{ ep.description }}</v-card-subtitle>

            <v-card-text>
                <v-chip-group column class="tag-container">
                    <v-chip v-for="tag in ep.tags" :key="tag" label class="ma-1">{{ tag }}</v-chip>
                </v-chip-group>

                <ul class="meta-list">
                    <li>公開日 : {{ ep.pub_date }}</li>
                    <li>再生時間 : {{ ep.duration_sec }} 秒</li>
                </ul>
            </v-card-text>

            <v-divider/>

            <v-card-actions>
                <v-spacer/>
                <v-btn text color="primary" @click="showDetail(ep.id)">
                    <v-icon left>mdi-play</v-icon> 再生
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
  name: 'List',
  data: function() {
      return {
          episodes: null
      }
  },
  methods: {
      showDetail: function(id) {
          this.$router.push({ name: 'Detail', params: { id: id } })
      }
  },
  mounted() {
    this.axios.get('list.json').then(res =>
        this.episodes = res.data
    )
  }
}
</script>

<style scoped>
.episode-card {
    margin-bottom: 1em;
}

.tag-container {
    margin-bottom: 0.5em;
}
</style>
