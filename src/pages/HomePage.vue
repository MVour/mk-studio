<template>
  <div class="page">
    <HeroSection @scroll-to="scrollToSection" />
    <ServicesSection @scroll-to="scrollToSection"  />
    <ProjectsSection @scroll-to="scrollToSection" />
    <TeamSection @scroll-to="scrollToSection"  />
    <ContactCta @scroll-to="scrollToSection" use-strip-color  />
  </div>
</template>

<script setup lang="ts">
import HeroSection    from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import TeamSection    from '@/components/sections/TeamSection.vue'
import ContactCta     from '@/components/sections/ContactCta.vue'
import StatsSection from '@/components/sections/StatsSection.vue'
import { useScrollNav } from '@/composables/useScrollNav'

const SECTION_IDS = ['hero', 'services', 'projects', 'team', 'contact']
const { scrollToSection } = useScrollNav(SECTION_IDS)
</script>

<style scoped>
.page { padding-top: 60px; }
</style>