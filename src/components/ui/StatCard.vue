<template>
  <v-card variant="outlined" rounded="lg" class="stat-card pa-5">
    <p class="stat-label">{{ title }}</p>
    <p class="stat-value" :style="color ? { color: `rgb(var(--v-theme-${color}))` } : {}">
      {{ value }}
    </p>
    <p class="stat-sub">{{ subtitle }}</p>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  subtitle: string
  color?: string
}>()
</script>

<style scoped>
.stat-card {
  height: 100%;
  transition: border-color 0.2s;
}

.stat-card:hover {
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
}

.stat-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.45;
  margin-bottom: 0.6rem;
  line-height: 1.4;
}

.stat-value {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 0.5rem;
  color: rgb(var(--v-theme-on-surface));
}

.stat-sub {
  font-size: 12px;
  opacity: 0.45;
  line-height: 1.5;
}
</style>