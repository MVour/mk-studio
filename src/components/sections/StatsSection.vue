<template>
  <section id="stats" class="stats-section" :class="{ 'stats-section--alt': useStripColor }">
    <v-container>
      <v-row>
        <v-col
          v-for="stat in stats"
          :key="stat.id"
          cols="6"
          sm="6"
          md="3"
        >
          <StatCard
            :title="stat.title"
            :value="stat.value"
            :subtitle="stat.subtitle"
            :color="stat.color ?? undefined"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import StatCard from '@/components/ui/StatCard.vue'
import statsData from '@/data/stats.json'

defineProps<{ useStripColor?: boolean }>()

const stats = statsData
</script>

<style scoped>
.stats-section {
  padding: 3rem 0;
}
.stats-section--alt { background: rgb(var(--v-theme-surface-light)); }
</style>