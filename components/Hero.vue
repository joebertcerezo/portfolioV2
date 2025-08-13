<template>
  <section id="home"
    class="relative h-screen bg-gradient-to-br from-background to-muted overflow-hidden flex items-center">
    <!-- FlickeringGrid Background -->
    <div class="absolute inset-0 z-0">
      <FlickeringGrid
        class="relative overflow-x inset-0 z-0 [mask-image:radial-gradient(900px_circle_at_center,transparent,gray)]"
        :square-size="10" :grid-gap="8" color="#6B7280" :max-opacity="0.5" :flicker-chance="0.1" :width="1920"
        :height="1000" />
    </div>

    <div class="container mx-auto px-6 text-center relative z-10 w-full">
      <div class="max-w-4xl mx-auto">
        <ClientOnly>
          <BlurReveal :delay="0.2" :duration="0.75">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              <span class="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Hi, I'm Joebert Cerezo
              </span>
              👋
            </h1>
          </BlurReveal>
        </ClientOnly>
        <h2 class="text-xl md:text-2xl mb-8">Full-Stack Software Engineer</h2>
        <p class="text-lg mb-10 max-w-2xl mx-auto">
          I build scalable web and mobile applications with a focus on user
          experience and modern technologies.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#projects">View My Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/joebert cerezo resume.pdf" download="Joebert_Cerezo_Resume.pdf"
              class="flex items-center space-x-2">
              <span>Download CV</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useWindowSize } from "@vueuse/core";
import { Download } from "lucide-vue-next";

const { width, height } = useWindowSize();
</script>
