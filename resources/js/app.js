import './bootstrap';
import { createApp } from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';

// Create a Vue application instance
const app = createApp({});

// Register a Vue component
app.component('example-component', ExampleComponent);

// Mount the Vue application to an HTML element with the ID 'app'
app.mount('#app');