<template>
  <div class="page">
    <HeroSection @scroll-to="scrollToSection" />
    <ServicesSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection     from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import { useScrollNav } from '@/composables/useScrollNav'

const { scrollToSection } = useScrollNav(['hero', 'services'])
</script>

<style scoped>
.page { padding-top: 60px; }
</style>