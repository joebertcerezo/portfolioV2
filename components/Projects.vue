<template>
  <section id="projects" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
        Featured Projects
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
        <ClientOnly v-for="project in projects" class="">
          <CardContainer class="h-full w-full">
            <CardBody
              class="group/card relative size-fit w-full h-full flex flex-col justify-around rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.1]"
            >
              <CardItem :translate-z="100" class="w-full mb-4">
                <div
                  class="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center rounded-xl"
                >
                  <Database class="h-16 w-16 text-white" />
                </div>
              </CardItem>

              <CardItem
                :translate-z="50"
                class="text-xl font-bold text-neutral-600 dark:text-white mb-2"
              >
                {{ project.title }}
              </CardItem>

              <CardItem
                as="p"
                :translate-z="60"
                class="text-sm text-neutral-500 dark:text-neutral-300 mb-4"
              >
                {{ project.description }}
              </CardItem>

              <CardItem :translate-z="40" class="flex flex-wrap gap-1 mb-4">
                <Badge
                  variant="outline"
                  class="text-xs"
                  v-for="s in project.stack"
                  >{{ s }}</Badge
                >
              </CardItem>

              <div class="flex space-x-2">
                <CardItem
                  :translate-z="20"
                  as="a"
                  href="#"
                  class="flex items-center rounded-xl px-4 py-2 text-xs font-normal border border-black/[0.1] dark:border-white/[0.2] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <ExternalLink class="h-3 w-3 mr-1" />
                  Demo
                </CardItem>
                <CardItem
                  :translate-z="20"
                  as="a"
                  href="#"
                  class="flex items-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  <Github class="h-3 w-3 mr-1" />
                  Code
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  Globe,
  Smartphone,
  Database,
  ExternalLink,
  Github,
} from "lucide-vue-next";

import { projects } from "@/lib/constants/projects";
</script>
