import { createApp, provide, h } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

import * as BootstrapVueNext from 'bootstrap-vue-next'; // ✅ Use namespace import
import { createPinia } from 'pinia';
import { DefaultApolloClient } from '@vue/apollo-composable';
import apolloClient from './graphql/client';
import router from './ruoter';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(createPinia());
app.use(BootstrapVueNext); // ✅ still valid here
app.use(router);
app.mount('#app');