<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :item-key="itemKey"
    hide-default-footer
  ></v-data-table>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  itemKey: {
    type: String,
    default: 'id',
  },
});
</script>

<style scoped>
/* No custom styles needed for Vuetify components */
</style>