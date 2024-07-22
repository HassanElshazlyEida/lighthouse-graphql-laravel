import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import graphqlLoader from "vite-plugin-graphql-loader";
import tailwindcss from 'tailwindcss';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        graphqlLoader(),
    ],
     css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
    
});