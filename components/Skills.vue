<template>
  <section id="skills" class="py-20 bg-muted/50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-2">
        Skills & Technologies
      </h2>
      <ClientOnly>
        <div class="grid place-content-center">
          <IconCloud :images="imageUrls" />
        </div>
      </ClientOnly>
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <Card class="p-6">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <Code class="h-5 w-5 mr-2 text-primary" />
              Languages
            </h3>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">HTML/CSS</Badge>
              <Badge variant="secondary">SQL</Badge>
            </div>
          </Card>

          <Card class="p-6">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <Layers class="h-5 w-5 mr-2 text-primary" />
              Frameworks
            </h3>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Vue.js</Badge>
              <Badge variant="secondary">Nuxt.js</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Express</Badge>
            </div>
          </Card>

          <Card class="p-6">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <Wrench class="h-5 w-5 mr-2 text-primary" />
              Tools & Others
            </h3>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Git</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">MongoDB</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Code, Layers, Wrench } from "lucide-vue-next";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "android",
  "html5",
  "css",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "androidstudio",
  "figma",
];

const imageUrls = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);
</script>
