import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#1abc9c',
        secondary: '#2c3e50',
        accent: '#e67e22',
      },
    },
  },
});
