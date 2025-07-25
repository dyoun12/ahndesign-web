<template>
  <v-menu :offset-y="!menuUp" :top="menuUp">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        icon
        v-bind="activatorProps"
        :flat="flat"
        :ripple="!noRipple"
      >
        <v-icon size="18">mdi-web</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item @click="changeLanguage('ja')">
        <v-list-item-title>日本語</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeLanguage('en')">
        <v-list-item-title>English</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const props = defineProps({
  menuUp: {
    type: Boolean,
    default: false,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  noRipple: {
    type: Boolean,
    default: false,
  },
});

const { locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
};
</script>

<style scoped>
/* Add any specific styles for LanguageSwitcher.vue here if needed */
</style>
