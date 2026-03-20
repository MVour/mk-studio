import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollNav(sectionIds: string[]) {
  const activeSection = ref<string>(sectionIds[0])
  let isScrolling = false
  let scrollTimer: ReturnType<typeof setTimeout> | null = null

  function scrollToSection(id: string) {
    const el = document.getElementById(id)
    if (!el) return

    isScrolling = true
    activeSection.value = id
    history.replaceState(null, '', `#${id}`)

    el.scrollIntoView({ behavior: 'smooth', block: 'start' })

    if (scrollTimer) clearTimeout(scrollTimer)
    scrollTimer = setTimeout(() => {
      isScrolling = false
    }, 800)
  }

  function onScroll() {
    if (isScrolling) return

    const scrollY = window.scrollY + window.innerHeight * 0.4

    let current = sectionIds[0]
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el && el.offsetTop <= scrollY) {
        current = id
      }
    }
    if (current !== activeSection.value) {
      activeSection.value = current
      history.replaceState(null, '', `#${current}`)
    }
  }

  function handleHashChange() {
    const hash = window.location.hash.replace('#', '')
    if (sectionIds.includes(hash)) {
      scrollToSection(hash)
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('hashchange', handleHashChange)
    if (window.location.hash) handleHashChange()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('hashchange', handleHashChange)
    if (scrollTimer) clearTimeout(scrollTimer)
  })

  return { activeSection, scrollToSection }
}