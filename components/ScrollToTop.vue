<template>
  <!-- Scroll to Top Button -->
  <Transition enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-75 translate-y-4" enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-75 translate-y-4">
    <Button v-if="isVisible" variant="default" size="icon"
      class="fixed bottom-8 right-8 z-50 shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out hover:scale-110 bg-primary hover:bg-primary/90 text-primary-foreground hover:cursor-pointer"
      :class="{ 'animate-pulse': isScrolling }" :disabled="isScrolling"
      :aria-label="isScrolling ? 'Scrolling to top...' : 'Scroll to top'" @click="scrollToTop"
      @keydown.enter="scrollToTop" @keydown.space.prevent="scrollToTop">
      <ArrowUp :size="20" class="transition-transform duration-200 ease-in-out"
        :class="{ 'animate-bounce': !isScrolling }" />
    </Button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-vue-next'

const isVisible = ref(false)
const isScrolling = ref(false)
const scrollThreshold = ref(0)

const handleScroll = () => {
  if (isScrolling.value) return

  const scrollY = window.scrollY
  const heroHeight = scrollThreshold.value

  isVisible.value = scrollY > heroHeight
}

const scrollToTop = () => {
  if (isScrolling.value) return

  isScrolling.value = true

  // Use native smooth scroll for instant but smooth scrolling
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  // Reset scrolling state after a short delay
  setTimeout(() => {
    isScrolling.value = false
  }, 500)
}


const calculateHeroHeight = () => {
  const heroElement = document.getElementById('home')
  if (heroElement) {
    scrollThreshold.value = heroElement.offsetHeight * 0.8
  } else {
    scrollThreshold.value = window.innerHeight * 0.8
  }
}


let scrollTimeout: number | null = null
const throttledHandleScroll = () => {
  if (scrollTimeout) return

  scrollTimeout = window.setTimeout(() => {
    handleScroll()
    scrollTimeout = null
  }, 16)
}

onMounted(() => {
  calculateHeroHeight()

  window.addEventListener('scroll', throttledHandleScroll, { passive: true })

  const handleResize = () => {
    calculateHeroHeight()
  }
  window.addEventListener('resize', handleResize)

  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', throttledHandleScroll)
  window.removeEventListener('resize', calculateHeroHeight)

  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})
</script>
