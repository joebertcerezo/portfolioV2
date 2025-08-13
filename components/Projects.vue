<template>
  <section id="projects" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
        Featured Projects
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ClientOnly>
          <template v-for="(project, index) in projects" :key="index">
            <CardContainer>
              <CardBody @click="openProjectDialog(project)"
                class="group/card relative h-full flex flex-col rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] hover:cursor-pointer transition-all duration-300">
                <CardItem :translate-z="100" class="w-full mb-4">
                  <div v-if="project.image" class="h-48 rounded-xl overflow-hidden">
                    <img :src="project.image" :alt="project.title"
                      class="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover/card:scale-105">
                  </div>
                  <div v-else
                    :class="`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center rounded-xl transition-transform duration-300 group-hover/card:scale-105`">
                    <component :is="getIcon(project.icon)" class="h-16 w-16 text-white" />
                  </div>
                </CardItem>

                <div class="flex flex-col flex-1">
                  <CardItem :translate-z="50"
                    class="text-xl font-bold text-neutral-600 dark:text-white mb-2 line-clamp-1">
                    {{ project.title }}
                  </CardItem>

                  <CardItem as="p" :translate-z="60"
                    class="text-sm text-neutral-500 dark:text-neutral-300 mb-4 line-clamp-3 flex-1">
                    {{ project.description }}
                  </CardItem>

                  <CardItem :translate-z="40" class="mb-4">
                    <div class="flex flex-wrap gap-1 min-h-[2rem]">
                      <Badge v-for="(tech, techIndex) in limitedTechStack(project.stack)" :key="tech" variant="outline"
                        class="text-xs">
                        {{ tech }}
                      </Badge>
                      <Badge v-if="project.stack.length > 4" variant="outline" class="text-xs bg-muted">
                        +{{ project.stack.length - 4 }}
                      </Badge>
                    </div>
                  </CardItem>

                  <div class="flex space-x-2 mt-auto">
                    <CardItem v-if="project.demo" :translate-z="20" as="a" :href="project.demo" target="_blank"
                      @click.stop
                      class="flex items-center rounded-xl px-4 py-2 text-xs font-normal border border-black/[0.1] dark:border-white/[0.2] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <ExternalLink class="h-3 w-3 mr-1" />
                      Demo
                    </CardItem>
                    <CardItem :translate-z="20" as="a" :href="project.code" target="_blank" @click.stop
                      class="flex items-center rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                      <Github class="h-3 w-3 mr-1" />
                      Code
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </template>
        </ClientOnly>
      </div>
    </div>

    <!-- Project Details Dialog -->
    <Dialog v-model:open="isDialogOpen">
      <DialogContent class="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle class="text-2xl font-bold mb-2">{{ selectedProject?.title }}</DialogTitle>
          <DialogDescription class="text-base leading-relaxed">
            {{ selectedProject?.description }}
          </DialogDescription>
        </DialogHeader>

        <div v-if="selectedProject" class="mt-6 space-y-6">
          <!-- Project Image -->
          <div class="w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <img v-if="selectedProject.image" :src="selectedProject.image" :alt="selectedProject.title"
              class="w-full h-full object-cover">
            <div v-else
              :class="`w-full h-full bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center`">
              <component :is="getIcon(selectedProject.icon)" class="h-24 w-24 text-white" />
            </div>
          </div>

          <!-- Tech Stack -->
          <div>
            <h3 class="text-lg font-semibold mb-3">Tech Stack</h3>
            <div class="flex flex-wrap gap-2">
              <Badge v-for="tech in selectedProject.stack" :key="tech" variant="secondary" class="text-sm">
                {{ tech }}
              </Badge>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-4 pt-4">
            <Button v-if="selectedProject.demo" @click="openLink(selectedProject.demo!)"
              class="flex items-center gap-2">
              <ExternalLink class="h-4 w-4" />
              View Demo
            </Button>
            <Button @click="openLink(selectedProject.code)" variant="outline" class="flex items-center gap-2">
              <Github class="h-4 w-4" />
              View Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Database,
  Keyboard,
  Smartphone,
  BookOpen,
  MessageCircle,
  QrCode,
  Gamepad2,
  ExternalLink,
  Github,
} from "lucide-vue-next";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import { projects, type Project } from "@/lib/constants/projects";

// Function to get the appropriate icon component
const getIcon = (iconName: string) => {
  const iconMap: Record<string, any> = {
    Database,
    Keyboard,
    Smartphone,
    BookOpen,
    MessageCircle,
    QrCode,
    Gamepad2,
  };
  return iconMap[iconName] || Database;
};

// Function to limit tech stack display to 4 items
const limitedTechStack = (stack: string[]) => {
  return stack.slice(0, 4);
};

// Dialog state
const isDialogOpen = ref(false);
const selectedProject = ref<Project | null>(null);

// Functions to handle dialog
const openProjectDialog = (project: Project) => {
  selectedProject.value = project;
  isDialogOpen.value = true;
};

const openLink = (url: string) => {
  window.open(url, '_blank');
};
</script>
