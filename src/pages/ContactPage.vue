<template>
  <div class="page">
    <HeroSection @scroll-to="scrollToSection" />
    <ContactCta @scroll-to="scrollToSection" />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import ContactCta  from '@/components/sections/ContactCta.vue'
import { useScrollNav } from '@/composables/useScrollNav'

const { scrollToSection } = useScrollNav(['hero', 'contact'])
</script>

<style scoped>
.page { padding-top: 60px; }
</style>