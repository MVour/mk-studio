<template>
  <section id="projects" class="page-section" :class="{ 'page-section--alt': useStripColor }">
    <v-container>
      <p class="section-label mb-2">{{ $t('projects.label') }}</p>
      <h2 class="section-title mb-8">{{ $t('projects.title') }}</h2>
      <v-row>
        <v-col v-for="project in projects" :key="project.id" cols="12" md="6">
          <ProjectCard :project="project" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ui/ProjectCard.vue'
import projectsData from '@/data/projects.json'

defineProps<{ useStripColor?: boolean }>()

const projects = projectsData
</script>

<style scoped>
.page-section { padding: 5rem 0; }
.page-section--alt { background: rgb(var(--v-theme-surface-light)); }
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
</style>