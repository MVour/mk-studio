<template>
  <v-card variant="outlined" rounded="lg" class="service-card h-100 pa-6">
    <div class="service-icon mb-4">{{ service.icon }}</div>
    <h3 class="service-name mb-3">{{ service.title }}</h3>
    <p class="service-desc">{{ service.description }}</p>
    <div class="d-flex flex-wrap ga-2 mt-5">
      <span v-for="tag in service.stack" :key="tag" class="stack-tag">
        {{ tag }}
      </span>
    </div>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  service: {
    id: string
    icon: string
    title: string
    description: string
    stack: string[]
  }
}>()
</script>

<style scoped>

.service-card {
  transition: border-color 0.3s;
  position: relative;
  overflow: visible !important;
}
 
.service-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 13px;
  background: radial-gradient(ellipse at 50% 0%, rgba(124, 111, 247, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 0;
}
 
.service-card:hover { border-color: rgba(124, 111, 247, 0.5) !important; }
.service-card:hover::before { opacity: 1; }
 
.service-icon {
  font-size: 20px;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  display: flex;
  align-items: center;
  justify-content: center;
}
 
.service-name { font-size: 16px; font-weight: 500; }
 
.service-desc {
  font-size: 13px;
  opacity: 0.6;
  line-height: 1.7;
}
 
.stack-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.04em;
  padding: 3px 9px;
  border-radius: 3px;
  background: rgba(var(--v-theme-primary), 0.08);
  color: rgb(var(--v-theme-secondary));
  border: 0.5px solid rgba(var(--v-theme-primary), 0.18);
}
</style>