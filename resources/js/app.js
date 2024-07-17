import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

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
      .mount(el);
  },
});

InertiaProgress.init();