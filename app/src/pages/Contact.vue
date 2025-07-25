<template>
  <v-container>
    <h1 class="text-h4 text-md-h3 font-weight-bold text-center my-8">{{ $t('contact.title') }}</h1>

    <v-sheet class="pa-6 mx-auto" max-width="600" rounded>
      <v-form @submit.prevent="submitForm">
        <v-text-field
          v-model="form.name"
          :label="$t('contact.name')"
          required
          outlined
          class="mb-4"
        ></v-text-field>

        <v-text-field
          v-model="form.company"
          :label="$t('contact.company')"
          outlined
          class="mb-4"
        ></v-text-field>

        <v-text-field
          v-model="form.address"
          :label="$t('contact.address')"
          outlined
          class="mb-4"
        ></v-text-field>

        <v-text-field
          v-model="form.email"
          :label="$t('contact.email')"
          required
          outlined
          type="email"
          class="mb-4"
        ></v-text-field>

        <v-textarea
          v-model="form.message"
          :label="$t('contact.message')"
          required
          outlined
          rows="5"
          class="mb-4"
        ></v-textarea>

        <v-btn type="submit" color="primary" large block>{{ $t('contact.submit') }}</v-btn>

        <v-alert
          v-if="message"
          :type="isSuccess ? 'success' : 'error'"
          class="mt-4"
          dense
        >
          {{ message }}
        </v-alert>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const form = ref({
  name: '',
  company: '',
  address: '',
  email: '',
  message: '',
});

const message = ref('');
const isSuccess = ref(false);

const submitForm = async () => {
  // 실제 백엔드 연동 시 여기에 API 호출 로직 추가
  // 현재는 더미 응답으로 처리
  console.log('Form submitted:', form.value);
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    isSuccess.value = true;
    message.value = t('contact.success');
    form.value = { name: '', company: '', address: '', email: '', message: '' }; // Clear form
  } catch (error) {
    isSuccess.value = false;
    message.value = t('contact.error');
  }
};
</script>

<style scoped>
/* No custom styles needed for Vuetify components */
</style>