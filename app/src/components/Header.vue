<template>
  <v-app-bar app flat>
    <v-container class="d-flex align-center py-0">
      <v-toolbar-title>
        <router-link to="/" class="text-decoration-none text-h5 font-weight-bold">AHN DESIGNS JAPAN</router-link>
      </v-toolbar-title>

      <!-- Desktop Navigation and Tool Buttons -->
      <div class="d-none d-md-flex align-center flex-grow-1">
        <v-spacer></v-spacer> <!-- Left spacer for menu centering -->
        <v-btn text to="/technology" class="text-none font-weight-bold">
          {{ $t('navigation.technology') }}
        </v-btn>
        <v-btn text to="/machines" class="text-none font-weight-bold">
          {{ $t('navigation.machines') }}
        </v-btn>
        <v-btn text to="/company" class="text-none font-weight-bold">
          {{ $t('navigation.company') }}
        </v-btn>
        <v-btn text to="/contact" class="text-none font-weight-bold">
          {{ $t('navigation.contact') }}
        </v-btn>
        <v-spacer></v-spacer> <!-- Right spacer for menu centering -->

        <ToolButtonGroup :flat="true" :no-ripple="true" />
      </div>

      <!-- Mobile Navigation Icon -->
      <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer v-model="drawer" app temporary right>
    <v-list nav dense>
      <v-list-item link to="/technology">
        <v-list-item-title>{{ $t('navigation.technology') }}</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/machines">
        <v-list-item-title>{{ $t('navigation.machines') }}</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/company">
        <v-list-item-title>{{ $t('navigation.company') }}</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/contact">
        <v-list-item-title>{{ $t('navigation.contact') }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <ToolButtonGroup :menu-up="true" :flat="true" :no-ripple="true" />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import ToolButtonGroup from './ToolButtonGroup.vue';

const drawer = ref(false);
</script>