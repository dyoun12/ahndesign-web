<template>
  <v-container fluid class="pa-0">
    <!-- Hero Section (Banner with CTA) -->
    <v-row no-gutters class="hero-section align-center justify-center text-center" style="height: 80vh; background-color: #f5f5f5;"> <!-- Placeholder background -->
      <v-col cols="12">
        <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold">
          {{ $t('home.hero.title') }}
        </h1>
        <h2 class="text-h6 text-sm-h5 text-left">
          {{ $t('home.hero.subtitle') }}
        </h2>
        <v-btn color="primary" x-large class="mr-4" to="/contact">
          {{ $t('home.hero.cta1') }}
        </v-btn>
        <v-btn color="secondary" outlined x-large to="/technology">
          {{ $t('home.hero.cta2') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// No specific script logic needed for a simple hero section
</script>

<style scoped>
.hero-section {
  /* You can add a background image here if desired */
  /* background-image: url('/path/to/your/banner-image.jpg'); */
  background-size: cover;
  background-position: center;
  color: #333; /* Adjust text color for contrast */
}
</style>