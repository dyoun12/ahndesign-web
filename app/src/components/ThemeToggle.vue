<template>
  <v-btn icon @click="toggleTheme" :flat="flat" :ripple="!noRipple">
    <v-icon size="18">{{ themeIcon }}</v-icon>
  </v-btn>
</template>

<script setup>
import { computed } from 'vue';
import { useTheme } from 'vuetify';

const props = defineProps({
  flat: {
    type: Boolean,
    default: false,
  },
  noRipple: {
    type: Boolean,
    default: false,
  },
});

const theme = useTheme();

const themeIcon = computed(() => {
  return theme.global.current.value.dark ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny';
});

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};
</script>

<style scoped>
/* Add any specific styles for ThemeToggle.vue here if needed */
</style>