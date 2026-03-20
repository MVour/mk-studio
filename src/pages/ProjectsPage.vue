<template>
  <div class="page">
    <HeroSection @scroll-to="scrollToSection" />
    <ProjectsSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection     from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import { useScrollNav } from '@/composables/useScrollNav'

const { scrollToSection } = useScrollNav(['hero', 'projects'])
</script>

<style scoped>
.page { padding-top: 60px; }
</style>