<template>
  <!-- Navigation -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b"
  >
    <div class="container mx-auto px-6 py-4 w-full">
      <div class="flex items-center justify-between">
        <div class="text-xl font-bold">Joebert Cerezo</div>
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="hover:text-primary transition-colors">Home</a>
          <a href="#about" class="hover:text-primary transition-colors"
            >About</a
          >
          <a href="#projects" class="hover:text-primary transition-colors"
            >Projects</a
          >
          <a href="#skills" class="hover:text-primary transition-colors"
            >Skills</a
          >
          <a href="#contact" class="hover:text-primary transition-colors"
            >Contact</a
          >
        </div>
        <Button
          variant="outline"
          size="sm"
          class="md:hidden"
          @click="toggleMobileMenu"
        >
          <Menu v-if="!isMobileMenuOpen" class="h-4 w-4" />
          <X v-else class="h-4 w-4" />
        </Button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 border-t pt-4">
        <div class="flex flex-col space-y-4">
          <a
            href="#home"
            @click="closeMobileMenu"
            class="hover:text-primary transition-colors"
            >Home</a
          >
          <a
            href="#about"
            @click="closeMobileMenu"
            class="hover:text-primary transition-colors"
            >About</a
          >
          <a
            href="#projects"
            @click="closeMobileMenu"
            class="hover:text-primary transition-colors"
            >Projects</a
          >
          <a
            href="#skills"
            @click="closeMobileMenu"
            class="hover:text-primary transition-colors"
            >Skills</a
          >
          <a
            href="#contact"
            @click="closeMobileMenu"
            class="hover:text-primary transition-colors"
            >Contact</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { Menu, X } from "lucide-vue-next";

// Mobile menu state
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
