<template>
  <v-app-bar flat color="background" :border="isScrolled ? 'b' : false" height="60">

    <v-app-bar-title>
      <RouterLink to="/" class="nav-logo">
        <img
          :src="isDark ? studio.logoDark : studio.logoLight"
          :alt="studio.name"
          class="nav-logo-img"
        />
      </RouterLink>
    </v-app-bar-title>

    <div class="d-none d-md-flex align-center ga-1">
      <v-btn
        v-for="link in links"
        :key="link.label"
        :to="link.to"
        :href="link.hash ? `#${link.hash}` : undefined"
        size="small"
        :color="isActive(link) ? 'primary' : undefined"
        variant="text"
        >
        {{ link.label }}
      </v-btn>
    </div>

    <template #append>
      <span class="lang-btn mr-2" @click="locale = locale === 'en' ? 'gr' : 'en'">
        {{ locale === 'en' ? 'GR' : 'EN' }}
      </span>
      <v-btn
        :icon="isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'"
        variant="text"
        size="small"
        @click="$emit('toggle-theme')"
        :aria-label="isDark ? 'Switch to light' : 'Switch to dark'"
        class="mr-1"
      />
      <v-btn
        to="/contact"
        variant="outlined"
        size="small"
        color="primary"
        class="d-none d-md-flex mr-3"
      >
        {{ t('nav.cta') }}
      </v-btn>
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        @click="drawer = true"
      />
    </template>

  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    width="280"
  >
    <v-list-item class="py-4">
      <template #prepend>
        <img
          :src="isDark ? studio.logoDark : studio.logoLight"
          :alt="studio.name"
          class="drawer-logo-img mr-3"
        />
      </template>
      <v-list-item-title class="logo-text">{{ studio.displayName }}</v-list-item-title>
      <template #append>
        <v-btn icon="mdi-close" variant="text" size="small" @click="drawer = false" />
      </template>
    </v-list-item>

    <v-divider />

    <v-list nav density="compact" class="mt-2">
      <v-list-item
        v-for="link in links"
        :key="link.label"
        :to="link.to"
        :href="link.hash ? `#${link.hash}` : undefined"
        :prepend-icon="link.icon"
        :title="link.label"
        color="primary"
        rounded="lg"
        @click="drawer = false"
        :active="isActive(link)"
      />
    </v-list>

    <template #append>
      <div class="pa-4">
        <v-btn
          to="/contact"
          block
          color="primary"
          variant="flat"
          @click="drawer = false"
        >
          {{ t('nav.cta') }}
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import studio from '@/data/studio.json'

const props = defineProps<{
  currentTheme: string
}>()

defineEmits<{
  'toggle-theme': []
}>()

const route = useRoute()
const { t, locale } = useI18n()
const drawer = ref(false)
const isScrolled = ref(false)

const isDark = computed(() => props.currentTheme === 'studioDarkTheme')

interface NavLink {
  to?: string
  hash?: string
  label: string
  icon: string
}

const links = computed<NavLink[]>(() => [
  { to: '/',          label: t('nav.home'),     icon: 'mdi-home-outline' },
  { hash: 'services', label: t('nav.services'), icon: 'mdi-code-braces' },
  { hash: 'projects', label: t('nav.projects'), icon: 'mdi-briefcase-outline' },
  { hash: 'team',     label: t('nav.about'),    icon: 'mdi-account-group-outline' },
  { hash: 'contact',  label: t('nav.contact'),  icon: 'mdi-email-outline' },
])

function isActive(link: NavLink) {
  if (link.to === '/') return route.path === '/'
  return false
}

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.nav-logo-img {
  height: 40px;
  width: auto;
}

.drawer-logo-img {
  height: 30px;
  width: auto;
}
 
.lang-btn {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.06em;
  opacity: 0.6;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.2s;
}

.lang-btn:hover {
  opacity: 1;
}

.logo-mark {
  width: 28px;
  height: 28px;
  border: 1.5px solid rgb(var(--v-theme-primary));
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: rgb(var(--v-theme-primary));
  font-family: var(--font-mono);
  flex-shrink: 0;
  position: relative;
}
 
.logo-mark::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 9px;
  border: 1px solid rgba(124, 111, 247, 0.35);
  animation: logo-pulse 2.5s ease-in-out infinite;
  pointer-events: none;
}
 
.logo-mark::before {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: 13px;
  border: 1px solid rgba(124, 111, 247, 0.12);
  animation: logo-pulse 2.5s ease-in-out infinite 0.4s;
  pointer-events: none;
}
 
@keyframes logo-pulse {
  0%, 100% { opacity: 0; transform: scale(0.94); }
  50%       { opacity: 1; transform: scale(1);    }
}
 
.logo-text {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: rgb(var(--v-theme-secondary));
}
</style>