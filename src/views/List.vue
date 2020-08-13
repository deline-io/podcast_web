<template>
  <div>
    <HomeHeader />

    <v-container>
      <v-row>
        <v-col v-for="ep in episodes" :key="ep.id" cols="12" sm="12" md="6" xl="4">
          <EpisodeListItem class="episode-card" :episode="ep" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import HomeHeader from "../components/HomeHeader"
  import EpisodeListItem from "../components/EpisodeListItem"

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
    },
    components: {
      HomeHeader,
      EpisodeListItem
    }
  }
</script>

<style scoped>
</style>
