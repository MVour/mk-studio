<template>
  <section id="hero" class="hero-section">
      <canvas ref="canvasRef" class="hero-canvas" />
      <div class="hero-sweep" />
      <v-container class="hero-content">
        <p class="section-label mb-4">{{ $t('hero.label') }}</p>
        <h1 class="hero-title">
            {{ $t('hero.titleLine1') }}<br>
            {{ $t('hero.titleLine2') }}
            <span class="hero-accent" :data-text="$t('hero.accentText')">
                {{ $t('hero.accentText') }}
            </span>
        </h1>
        <p class="hero-sub mt-6">{{ $t('hero.sub') }}</p>
        <div class="d-flex align-center ga-4 flex-wrap mt-8">
          <v-btn color="primary" variant="flat" size="large" rounded="sm" @click="$emit('scroll-to', 'contact')">
            {{ $t('hero.cta') }}
          </v-btn>
          <v-btn variant="outlined" color="primary" size="large" rounded="sm" @click="$emit('scroll-to', 'projects')">
            {{ $t('hero.seeWork') }}
          </v-btn>
        </div>
        <StatsSection />
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import StatsSection from '@/components/sections/StatsSection.vue'
defineEmits<{ 'scroll-to': [id: string] }>()

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animFrame: number

const ICONS = ['◈', '◎', '▣', '⬡', '◇', '○', '□', '△', '⬟', '◉']

interface Particle {
  x: number; y: number; icon: string; size: number
  vx: number; vy: number; rot: number; rotSpeed: number; alpha: number
}

function initCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')!

  function resize() {
    canvas!.width  = canvas!.offsetWidth
    canvas!.height = canvas!.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const particles: Particle[] = Array.from({ length: 30 }, () => ({
    x: Math.random() * canvas!.width,
    y: Math.random() * canvas!.height,
    icon: ICONS[Math.floor(Math.random() * ICONS.length)],
    size: 30 + Math.random() * 8,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.005,
    alpha: 0.12 + Math.random() * 0.2,
  }))

  function draw() {
    ctx.clearRect(0, 0, canvas!.width, canvas!.height)
    particles.forEach(p => {
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot)
      ctx.globalAlpha = p.alpha
      ctx.fillStyle = '#7c6ff7'
      ctx.font = `${p.size}px monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(p.icon, 0, 0)
      ctx.restore()
      p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed
      if (p.x < -20) p.x = canvas!.width  + 20
      if (p.x > canvas!.width  + 20) p.x = -20
      if (p.y < -20) p.y = canvas!.height + 20
      if (p.y > canvas!.height + 20) p.y = -20
    })
    animFrame = requestAnimationFrame(draw)
  }
  draw()
}

onMounted(initCanvas)
onUnmounted(() => cancelAnimationFrame(animFrame))
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
}

.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.4;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hero-title {
  font-size: clamp(2.6rem, 6vw, 5rem);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.02em;
}


.hero-sweep {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
 
.hero-sweep::after {
  content: '';
  position: absolute;
  top: -60%;
  left: -30%;
  width: 55%;
  height: 200%;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(124, 111, 247, 0.06) 50%,
    transparent 60%
  );
  animation: hero-sweep 2.8s ease-out forwards;
}
 
@keyframes hero-sweep {
  0%   { transform: translateX(-10%); }
  100% { transform: translateX(320%); }
}
 

.hero-accent {
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
}


.hero-accent {
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
  position: relative;
  display: inline-block;
  animation: text-glow 3s ease-in-out infinite;
}
 
@keyframes text-glow {
  0%, 100% {
    text-shadow:
      0 0 20px rgba(124, 111, 247, 0.3),
      0 0 40px rgba(124, 111, 247, 0.15);
  }
  50% {
    text-shadow:
      0 0 30px rgba(124, 111, 247, 0.7),
      0 0 60px rgba(124, 111, 247, 0.4),
      0 0 100px rgba(124, 111, 247, 0.2);
  }
}
 
 
/* @keyframes text-glow {
  0%, 100% { opacity: 0.25; }
  50%       { opacity: 0.7;  }
} */

.hero-sub {
  font-size: clamp(15px, 2vw, 18px);
  opacity: 0.6;
  font-weight: 300;
  line-height: 1.7;
}

.section-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgb(var(--v-theme-primary));
  opacity: 0.7;
}
</style>