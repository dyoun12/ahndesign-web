import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n' // i18n 인스턴스를 가져옵니다.

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2', // Blue
          secondary: '#424242', // Grey
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#F5F5F5',
          surface: '#FFFFFF',
        },
      },
      dark: {
        colors: {
          primary: '#2196F3', // Lighter Blue
          secondary: '#B0BEC5', // Lighter Grey
          accent: '#FF4081',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#121212',
          surface: '#212121',
        },
      },
    },
  },
})

// 서브도메인에 따라 초기 언어 설정
const hostname = window.location.hostname;
let initialLocale = 'ja'; // 기본값은 일본어

if (hostname.startsWith('en.')) {
  initialLocale = 'en';
} else if (hostname.startsWith('jp.')) {
  initialLocale = 'ja';
}

// i18n 인스턴스의 locale을 설정
i18n.global.locale.value = initialLocale;

createApp(App).use(router).use(i18n).use(vuetify).mount('#app')