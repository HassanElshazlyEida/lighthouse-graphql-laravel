import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { apolloProvider } from './apollo'; // Import the Apollo provider
import VueApolloComponents from '@vue/apollo-components'
import './assets/main.css';

const pages = import.meta.glob('./Pages/**/*.vue');

createInertiaApp({
  resolve: name => {
    const importPage = pages[`./Pages/${name}.vue`];
    if (!importPage) {
      throw new Error(`Unknown page ${name}. Is it located under Pages with a .vue extension?`);
    }
    return importPage();
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(apolloProvider) 
      .use(VueApolloComponents)

      .mount(el);
  },
});

InertiaProgress.init();