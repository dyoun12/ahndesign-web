<template>
  <v-container>
    <h1 class="text-h4 text-md-h3 font-weight-bold mb-4">{{ $t('machines.' + $i18n.locale + '.title') }}</h1>

    <div>
      <h2 class="text-h5 text-left font-weight-bold">{{ $t('machines.' + $i18n.locale + '.mockup.title') }}</h2>
      <DataTable
        :headers="mockupTableHeaders"
        :items="mockupTableItems"
      >
      </DataTable>
    </div>

    <div>
      <h2 class="text-h5 text-left font-weight-bold">{{ $t('machines.' + $i18n.locale + '.qdm.title') }}</h2>
      <DataTable
        :headers="qdmTableHeaders"
        :items="qdmTableItems"
      >
      </DataTable>
      <p v-if="$t('machines.' + $i18n.locale + '.qdm.note')" class="text-body-2">{{ $t('machines.' + $i18n.locale + '.qdm.note') }}</p>
    </div>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import DataTable from '../components/DataTable.vue';

const { t, tm, locale } = useI18n();

const mockupTableHeaders = computed(() => {
  const headers = tm('machines.' + locale.value + '.mockup.table')[0];
  return headers.map(text => ({
    title: text,
    key: text
  }));
});

const mockupTableItems = computed(() => {
  const items = tm('machines.' + locale.value + '.mockup.table').slice(1);
  const headers = tm('machines.' + locale.value + '.mockup.table')[0];
  return items.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
});

const qdmTableHeaders = computed(() => {
  const headers = tm('machines.' + locale.value + '.qdm.table')[0];
  return headers.map(text => ({
    title: text,
    key: text
  }));
});

const qdmTableItems = computed(() => {
  const items = tm('machines.' + locale.value + '.qdm.table').slice(1);
  const headers = tm('machines.' + locale.value + '.qdm.table')[0];
  return items.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
});
</script>