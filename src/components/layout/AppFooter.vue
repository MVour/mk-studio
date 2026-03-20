<template>
  <v-footer color="background" class="app-footer py-10">
    <v-container>

      <v-row>
        <v-col cols="12" md="5" class="mb-6 mb-md-0">
          <RouterLink to="/" class="footer-logo mb-4">
            <img
              :src="isDark ? studio.logoDark : studio.logoLight"
              :alt="studio.name"
              class="footer-logo-img"
            />
          </RouterLink>
          <p class="footer-tagline mt-4">
            {{ studio.tagline }}
            <br>{{ $t('footer.basedIn') }} {{ studio.location }}.
          </p>
        </v-col>

        <v-col cols="6" md="3">
          <p class="footer-section-label mb-3">{{ $t('footer.navigation') }}</p>
          <div class="d-flex flex-column ga-1">
            <RouterLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="footer-link"
            >
              {{ link.label }}
            </RouterLink>
          </div>
        </v-col>

        <v-col cols="6" md="4">
          <p class="footer-section-label mb-3">{{ $t('footer.contact') }}</p>
          <a :href="`mailto:${studio.email}`" class="footer-link footer-email mb-4 d-block">
            {{ studio.email }}
          </a>
          <div class="d-flex ga-2 mt-4">
            <v-btn
              v-for="social in studio.socials"
              :key="social.url"
              :href="social.url"
              :icon="social.icon"
              :aria-label="social.label"
              target="_blank"
              variant="outlined"
              size="small"
              color="primary"
            />
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6" />

      <div class="d-flex align-center justify-space-between flex-wrap ga-2">
        <span class="footer-copy">
          © {{ year }} {{ studio.displayName }}. {{ $t('footer.rights') }}
        </span>
        <span class="footer-copy">
          {{ studio.location }}
        </span>
      </div>

    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'
import studio from '@/data/studio.json'

const theme = useTheme()
const { t } = useI18n()
const isDark = computed(() => theme.global.current.value.dark)
const year = new Date().getFullYear()

const links = computed(() => [
  { to: '/',         label: t('nav.home')     },
  { to: '/services', label: t('nav.services') },
  { to: '/projects', label: t('nav.projects') },
  { to: '/about',    label: t('nav.about')    },
  { to: '/contact',  label: t('nav.contact')  },
])
</script>

<style scoped>
.app-footer {
  border-top: 0.5px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.footer-logo-img {
  height: 44px;
  width: auto;
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
}

.logo-text {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: rgb(var(--v-theme-secondary));
}

.footer-tagline {
  font-size: 13px;
  color: rgba(var(--v-theme-on-surface), 0.5);
  line-height: 1.7;
}

.footer-section-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(var(--v-theme-on-surface), 0.4);
}

.footer-link {
  font-size: 13px;
  color: rgba(var(--v-theme-on-surface), 0.6);
  text-decoration: none;
  transition: color 0.2s;
  width: fit-content;
}

.footer-link:hover {
  color: rgb(var(--v-theme-primary));
}

.footer-email {
  font-family: var(--font-mono);
  font-size: 12px;
}

.footer-copy {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  color: rgba(var(--v-theme-on-surface), 0.3);
}
</style>