<template>
  <section id="contact" class="page-section" :class="{ 'page-section--alt': useStripColor }">
    <v-container>
      <v-card variant="outlined" rounded="lg" class="cta-card pa-10 text-center mx-auto">
        <p class="section-label mb-3">{{ $t('contact.label') }}</p>
        <h2 class="section-title mb-4">{{ $t('contact.title') }}</h2>
        <p class="cta-sub mb-8">{{ $t('contact.sub') }}</p>
        <div class="d-flex justify-center ga-4 flex-wrap">
          <v-btn color="primary" variant="flat" size="large" rounded="sm" @click="$emit('scroll-to', 'contact-form')">
            {{ $t('contact.cta') }}
          </v-btn>
          <v-btn
            :href="`mailto:${studio.email}`"
            variant="outlined"
            color="primary"
            size="large"
            rounded="sm"
          >
            {{ studio.email }}
          </v-btn>
        </div>
      </v-card>
    </v-container>
  </section>
</template>

<script setup lang="ts">
    import studio from '@/data/studio.json'
    defineProps<{ useStripColor?: boolean }>()
    defineEmits<{ 'scroll-to': [id: string] }>()
</script>

<style scoped>
.page-section { padding: 5rem 0; }
.page-section--alt { background: rgb(var(--v-theme-surface-light)); }

.cta-card { max-width: 680px; }

.section-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgb(var(--v-theme-primary));
  opacity: 0.7;
}
.section-title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 400;
  letter-spacing: -0.02em;
}
.cta-sub { font-size: 15px; opacity: 0.6; }
</style>