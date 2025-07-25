<template>
  <v-container>
    <h1 class="text-h4 text-md-h3 font-weight-bold mb-4">{{ $t('technology.' + $i18n.locale + '.title') }}</h1>

    <div>
      <v-tabs
        v-model="tab"
        background-color="primary"
        dark
        grow
      >
        <v-tab value="mockup">{{ $t('technology.' + $i18n.locale + '.mockup.title') }}</v-tab>
        <v-tab value="qdm">{{ $t('technology.' + $i18n.locale + '.qdm.title') }}</v-tab>
        <v-tab value="vacuumCasting">{{ $t('technology.' + $i18n.locale + '.vacuumCasting.title') }}</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="mockup">
          <v-slide-group show-arrows>
            <v-slide-group-item
              v-for="(image, i) in mockupImages"
              :key="i"
            >
              <v-card class="ma-2" width="375" elevation="0" height="400">
                <v-img :src="image" cover></v-img>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
          <v-container>
            <v-row class="ga-10">
              <p class="text-body-1 text-left">{{ $t('technology.' + $i18n.locale + '.mockup.description') }}</p>

              <v-col>
                <v-row class="ga-5">
                  <h3 class="text-h6 font-weight-bold text-left">{{ $t('technology.' + $i18n.locale + '.mockup.title') }} {{ $t('common.idealFor') }}</h3>
                  <v-list density="compact">
                    <v-list-item
                      v-for="(item, i) in $tm('technology.' + $i18n.locale + '.mockup.idealFor')"
                      :key="i"
                      :title="item"
                      prepend-icon="mdi-check-circle-outline"
                    ></v-list-item>
                  </v-list>

                  <p v-if="$t('technology.' + $i18n.locale + '.mockup.materials')" class="text-body-1 text-left">
                    <strong>{{ $t('common.materials') }}:</strong> {{ $t('technology.' + $i18n.locale + '.mockup.materials') }}
                  </p>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>

        <v-window-item value="qdm">
          <v-slide-group show-arrows>
            <v-slide-group-item
              v-for="(image, i) in qdmImages"
              :key="i"
            >
              <v-card class="ma-2" width="375" elevation="0" height="400">
                <v-img :src="image" cover></v-img>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
            <v-container>
            <v-row class="ga-10">
              <p class="text-body-1 text-left">{{ $t('technology.' + $i18n.locale + '.qdm.description') }}</p>

              <v-col>
                <v-row class="ga-5">
                  <h3 class="text-h6 font-weight-bold text-left">{{ $t('technology.' + $i18n.locale + '.qdm.title') }} {{ $t('common.idealFor') }}</h3>
                  <v-list density="compact">
                    <v-list-item
                      v-for="(item, i) in $tm('technology.' + $i18n.locale + '.qdm.idealFor')"
                      :key="i"
                      :title="item"
                      prepend-icon="mdi-check-circle-outline"
                    ></v-list-item>
                  </v-list>

                  <p v-if="$t('technology.' + $i18n.locale + '.qdm.materials')" class="text-body-1 text-left">
                    <strong>{{ $t('common.materials') }}:</strong> {{ $t('technology.' + $i18n.locale + '.qdm.materials') }}
                  </p>
                </v-row>
              </v-col>

              <v-col>
                <v-row class="ga-5">
                  <h3 class="text-h6 font-weight-bold text-left">{{ $t('technology.' + $i18n.locale + '.qdm.tableTitle') }}</h3>
                  <DataTable
                  :headers="qdmTableHeaders"
                  :items="qdmTableItems"
                  />
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>

        <v-window-item value="vacuumCasting">
          <v-slide-group show-arrows>
            <v-slide-group-item
              v-for="(image, i) in vacuumImages"
              :key="i"
            >
              <v-card class="ma-2" width="375" elevation="0" height="400">
                <v-img :src="image" cover></v-img>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
            <v-container>
              <v-row class="ga-10">
                <p class="text-body-1 text-left">{{ $t('technology.' + $i18n.locale + '.vacuumCasting.description') }}</p>

                <v-col>
                  <v-row class="ga-5">

                  
                    <h3 class="text-h6 font-weight-bold text-left">{{ $t('technology.' + $i18n.locale + '.vacuumCasting.title') }} {{ $t('common.idealFor') }}</h3>
                    <v-list density="compact">
                      <v-list-item
                        v-for="(item, i) in $tm('technology.' + $i18n.locale + '.vacuumCasting.idealFor')"
                        :key="i"
                        :title="item"
                        prepend-icon="mdi-check-circle-outline"
                      ></v-list-item>
                    </v-list>

                    <p v-if="$t('technology.' + $i18n.locale + '.vacuumCasting.materials')" class="text-body-1 text-left">
                      <strong>{{ $t('common.materials') }}:</strong> {{ $t('technology.' + $i18n.locale + '.vacuumCasting.materials') }}
                    </p>
                  </v-row>
                </v-col>
              </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </div>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import DataTable from '../components/DataTable.vue';

const { t, tm, locale } = useI18n();

const tab = ref(null);

const mockupImages = [
  '/imgs/mockup/DEW_ 0108.jpg',
  '/imgs/mockup/DEW_ 0183.jpg',
  '/imgs/mockup/DEW_ 0185.jpg',
  '/imgs/mockup/DEW_ 0217.jpg',
  '/imgs/mockup/DEW_ 0224.jpg',
  '/imgs/mockup/DEW_ 0229.jpg',
];

const qdmImages = [
  '/imgs/QDM/DEW_ 0109.jpg',
  '/imgs/QDM/DEW_ 0124.jpg',
  '/imgs/QDM/DEW_ 0141.jpg',
  '/imgs/QDM/DEW_ 0164.jpg',
];

const vacuumImages = [
  '/imgs/vacuum/DEW_ 0230.jpg',
  '/imgs/vacuum/DEW_ 0233.jpg',
];

const qdmTableHeaders = computed(() => {
  const headers = tm('technology.' + locale.value + '.qdm.table')[0];
  return headers.map(text => ({
    title: text,
    key: text
  }));
});

const qdmTableItems = computed(() => {
  const items = tm('technology.' + locale.value + '.qdm.table').slice(1);
  const headers = tm('technology.' + locale.value + '.qdm.table')[0];
  return items.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
});

</script>

<style scoped>
/* Add any specific styles for Technology.vue here if needed */
</style>
