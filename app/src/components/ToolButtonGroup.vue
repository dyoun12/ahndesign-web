<template>
  <div>
    <ThemeToggle :flat="flat" :no-ripple="noRipple" />
    <LanguageSwitcher :flat="flat" :no-ripple="noRipple" :menu-up="menuUp" />
  </div>
</template>

<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue';
import ThemeToggle from './ThemeToggle.vue';

const props = defineProps({
  flat: {
    type: Boolean,
    default: false,
  },
  noRipple: {
    type: Boolean,
    default: false,
  },
  menuUp: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
/* Add any specific styles for ToolButtonGroup.vue here if needed */
</style>