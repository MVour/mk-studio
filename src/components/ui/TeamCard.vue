<template>
  <v-card variant="outlined" rounded="lg" class="pa-6 h-100">
    <div class="d-flex align-center ga-4 mb-4">
      <v-avatar color="primary" variant="tonal" size="48">
        <v-img v-if="member.photo" :src="member.photo" :alt="member.name" cover />
        <span v-else class="member-initials">{{ member.initials }}</span>
      </v-avatar>
      <div>
        <p class="member-name">{{ member.name }}</p>
        <p class="member-role">{{ member.role }}</p>
      </div>
    </div>
    <p class="member-bio">{{ member.bio }}</p>
    <div class="d-flex ga-2 mt-5">
        <v-btn
            v-if="member.linkedin"
            :href="member.linkedin"
            target="_blank"
            icon="mdi-linkedin"
            variant="tonal"
            size="large"
            color="primary"
        />

        <v-btn
            v-if="member.github"
            :href="member.github"
            target="_blank"
            icon="mdi-github"
            variant="tonal"
            size="large"
            color="primary"
        />

        <v-btn
            v-if="member?.portfolio"
            :href="member.portfolio"
            target="_blank"
            icon="mdi-open-in-new"
            variant="tonal"
            size="large"
            color="primary"
        />
    </div>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  member: {
    id: string
    initials: string
    name: string
    role: string
    bio: string
    linkedin: string
    github: string
    portfolio?: string
    photo?: string
  }
}>()
</script>

<style scoped>
.member-initials { font-family: var(--font-mono); font-size: 13px; font-weight: 700; }
.member-name { font-size: 15px; font-weight: 500; }
.member-role {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  color: rgb(var(--v-theme-primary));
  opacity: 0.8;
}
.member-bio { font-size: 13px; opacity: 0.6; line-height: 1.7; }
</style>