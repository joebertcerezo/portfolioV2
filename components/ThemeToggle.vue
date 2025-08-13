<template>
  <Button @click="toggleTheme" variant="ghost" size="icon"
    class="relative h-9 w-9 hover:bg-accent hover:text-accent-foreground transition-colors" aria-label="Toggle theme">
    <!-- Sun icon for light mode -->
    <Sun v-if="isDark" class="h-4 w-4 transition-all duration-300 rotate-0 scale-100" />
    <!-- Moon icon for dark mode -->
    <Moon v-else class="h-4 w-4 transition-all duration-300 rotate-0 scale-100" />
  </Button>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

// Theme state
const isDark = ref(false)

// Check for saved theme preference or default to light mode
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})

// Toggle theme function
const toggleTheme = () => {
  isDark.value = !isDark.value

  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// Listen for system theme changes
onMounted(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleChange = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
      if (e.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  mediaQuery.addEventListener('change', handleChange)

  // Cleanup listener on unmount
  onUnmounted(() => {
    mediaQuery.removeEventListener('change', handleChange)
  })
})
</script>
