<template>
  <div class="page">
    <HeroSection @scroll-to="scrollToSection" />
    <TeamSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import TeamSection from '@/components/sections/TeamSection.vue'
import { useScrollNav } from '@/composables/useScrollNav'

const { scrollToSection } = useScrollNav(['hero', 'team'])
</script>

<style scoped>
.page { padding-top: 60px; }
</style>