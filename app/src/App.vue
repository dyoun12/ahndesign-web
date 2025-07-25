<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <v-app>
    <Header />
    
    <v-main>
      <v-container fluid class="pa-4"> <!-- Added v-container with padding -->
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
/* Global styles can be kept here or moved to style.css if preferred */
html {
  scroll-behavior: smooth;
}
</style>