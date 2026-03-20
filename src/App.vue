<template>
  <v-app :theme="theme.global.name.value">
    <AppNav @toggle-theme="toggleTheme" :current-theme="theme.global.name.value" />
    <v-main>
      <RouterView />
    </v-main>
    <AppFooter />
  </v-app>
</template>
 
<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppNav from '@/components/layout/AppNav.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
// const theme = ref<'studioDark' | 'studioLight'>('studioDark')
 
function toggleTheme() {
  theme.global.name.value = theme.global.name.value === 'studioDarkTheme'
    ? 'studioLightTheme'
    : 'studioDarkTheme'
}
</script>