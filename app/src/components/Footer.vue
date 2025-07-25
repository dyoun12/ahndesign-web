<template>
  <v-footer class="py-8">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="4" class="text-center text-md-left">
          <div class="text-h6 font-weight-bold mb-2">AHN DESIGNS JAPAN Inc.</div>
          <div class="text-body-2 text-grey-darken-1">
            <p class="mb-1">{{ $t('company.' + $i18n.locale + '.overview.headOffice.title') }}: {{ $t('company.' + $i18n.locale + '.overview.headOffice.address') }}</p>
            <p class="mb-1">TEL: {{ $t('company.' + $i18n.locale + '.overview.headOffice.tel') }} FAX: {{ $t('company.' + $i18n.locale + '.overview.headOffice.fax') }}</p>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="text-center text-md-center">
          <div class="text-body-2 text-grey-darken-1">
            &copy; {{ new Date().getFullYear() }} AHN DESIGNS JAPAN Inc. All rights reserved.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>


