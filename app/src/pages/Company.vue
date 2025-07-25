<template>
  <v-container>
    <!-- Greeting Section (Moved from Home.vue) -->
    <v-row class="ga-15" justify="center">
      <v-col cols="12" md="10">
        <v-row class="ga-10" justify="center">
          <v-col cols="12">
            <h1 class="text-h4 text-md-h3 font-weight-bold">
              {{ $t('greeting.' + $i18n.locale + '.title') }}
            </h1>
          </v-col>
          <v-col cols="12" md="5">
            <v-row class="ga-5">
              <h2 class="text-h5 text-left font-weight-bold">
                {{ $t('greeting.' + $i18n.locale + '.corporatePhilosophy.title') }}
              </h2>
              <div>
                <p v-for="(paragraph, index) in $tm('greeting.' + $i18n.locale + '.corporatePhilosophy.content')" :key="index" class="text-left mb-2">
                  {{ paragraph }}
                </p>
              </div>
            </v-row>
          </v-col>
          <v-col cols="12" md="5">
            <v-row class="ga-5">
              <h2 class="text-h5 text-left font-weight-bold">
                {{ $t('greeting.' + $i18n.locale + '.globalizationEfforts.title') }}
              </h2>
              <div>
                <p v-for="(paragraph, index) in $tm('greeting.' + $i18n.locale + '.globalizationEfforts.content')" :key="index" class="text-left mb-2">
                  {{ paragraph }}
                </p>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-col>


    <!-- Team Section (Moved from Home.vue) -->
      <v-col cols="12" md="10">
        <v-row class="ga-10" justify="center">
          <h1 class="text-h4 text-md-h3 font-weight-bold">
            {{ $t('greeting.' + $i18n.locale + '.team.title') }}
          </h1>
          <div>
            <p v-for="(paragraph, index) in $tm('greeting.' + $i18n.locale + '.team.content')" :key="index" class="text-left">
                {{ paragraph }}
            </p>
          </div>
          <DataTable
            :headers="teamTableHeaders"
            :items="teamTableItems"
          />
        </v-row>
      </v-col>


    <v-col cols="12" md="10">

      <v-row class="ga-10">
        <v-col cols="12">
          <h1 class="text-h4 text-md-h3 font-weight-bold">{{ $t('company.' + $i18n.locale + '.title') }}</h1>
        </v-col>
        <v-col cols="12">
          <v-row class="ga-5" justify="center">
            <v-col cols="12">
              <h2 class="text-h5 text-left font-weight-bold">{{ $t('company.' + $i18n.locale + '.overview.title') }}</h2>
            </v-col>
            <v-col cols="12">
              <v-list dense>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ $t('company.' + $i18n.locale + '.overview.companyName') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ $t('company.' + $i18n.locale + '.overview.headOffice.title') }}</v-list-item-title>
                    <v-list-item-subtitle>{{ $t('company.' + $i18n.locale + '.overview.headOffice.address') }}</v-list-item-subtitle>
                    <v-list-item-subtitle>TEL: {{ $t('company.' + $i18n.locale + '.overview.headOffice.tel') }} FAX: {{ $t('company.' + $i18n.locale + '.overview.headOffice.fax') }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ $t('company.' + $i18n.locale + '.overview.koreaOffice.title') }}</v-list-item-title>
                    <v-list-item-subtitle>{{ $t('company.' + $i18n.locale + '.overview.koreaOffice.address') }}</v-list-item-subtitle>
                    <v-list-item-subtitle>TEL: {{ $t('company.' + $i18n.locale + '.overview.koreaOffice.tel') }} FAX: {{ $t('company.' + $i18n.locale + '.overview.koreaOffice.fax') }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12">
              <v-list dense>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ $t('company.' + $i18n.locale + '.overview.koreanFactory') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ $t('company.' + $i18n.locale + '.overview.foundation') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ $t('company.' + $i18n.locale + '.overview.representative') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ $t('company.' + $i18n.locale + '.overview.capital') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ $t('company.' + $i18n.locale + '.overview.businessContent[0]') }}</v-list-item-title>
                    <v-list-item-subtitle>
                      <ul class="ml-4">
                        <li v-for="(item, index) in $tm('company.' + $i18n.locale + '.overview.businessContent').slice(1)" :key="index">{{ item }}</li>
                      </ul>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <v-row class="ga-5">
            <v-col cols="12">
              <h2 class="text-h5 font-weight-bold text-left">{{ $t('company.' + $i18n.locale + '.history.title') }}</h2>
            </v-col>
          <v-timeline dense>
            <v-timeline-item
              v-for="(item, index) in historyItems"
              :key="index"
              :color="index % 2 === 0 ? 'primary' : 'accent'"
              small
              fill-dot
            >
              <v-card elevation="8">
                <v-card-title class="text-h6">{{ item.year }}</v-card-title>
                <v-card-text class="pa-4">
                  <p class="text-left">{{ item.event }}</p>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          </v-row>
        </v-col>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import DataTable from '../components/DataTable.vue'; // Add this import

const { t, tm, locale } = useI18n();

const historyItems = computed(() => {
  const tableData = tm('company.' + locale.value + '.history.table');
  if (!tableData || tableData.length < 2) return [];

  const years = tableData[0];
  const events = tableData[1];

  return years.map((year, index) => ({
    year: year,
    event: events[index]
  }));
});

// Add these computed properties for the moved team table
const teamTableHeaders = computed(() => {
  const headers = tm('greeting.' + locale.value + '.team.table')[0];
  return headers.map(text => ({
    title: text,
    key: text
  }));
});

const teamTableItems = computed(() => {
  const items = tm('greeting.' + locale.value + '.team.table').slice(1);
  const headers = tm('greeting.' + locale.value + '.team.table')[0];
  return items.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
});
</script>
