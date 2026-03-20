<template>
  <v-card variant="outlined" rounded="lg" class="project-card pa-6 h-100">
    <div class="d-flex align-center justify-space-between mb-4">
      <div class="project-initial">{{ project.initials }}</div>
      <v-chip
        size="x-small"
        :color="project.status === 'active' ? 'success' : 'warning'"
        variant="tonal"
        class="text-uppercase"
        style="font-family: var(--font-mono); letter-spacing: 0.08em;"
      >
        {{ project.status }}
      </v-chip>
    </div>
    <p class="project-client mb-1">{{ project.client }}</p>
    <h3 class="project-name mb-3">{{ project.title }}</h3>
    <p class="project-desc">{{ project.description }}</p>
    <div class="d-flex flex-wrap ga-2 mt-5">
      <span v-for="tag in project.stack" :key="tag" class="stack-tag">
        {{ tag }}
      </span>
    </div>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    id: string
    initials: string
    client: string
    title: string
    description: string
    stack: string[]
    status: string
    year: number
  }
}>()
</script>

<style scoped>

.project-card {
  transition: border-color 0.3s;
  position: relative;
  overflow: visible !important;
}
 
.project-card::before {
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
 
.project-card:hover { border-color: rgba(124, 111, 247, 0.5) !important; }
.project-card:hover::before { opacity: 1; }
 
.project-initial {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgba(var(--v-theme-primary), 0.1);
  border: 0.5px solid rgba(var(--v-theme-primary), 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
}
 
.project-client {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.4;
}
 
.project-name { font-size: 16px; font-weight: 500; }
 
.project-desc {
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