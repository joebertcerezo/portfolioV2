<template>
  <section id="about" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
        <div class="flex lg:col-span-2">
          <Card class="p-8 flex-1">
            <h3 class="text-xl font-semibold mb-4">Background</h3>
            <p class="text-muted-foreground mb-3 leading-8">
              I'm a full-stack software engineer with expertise in
              modern web and mobile technologies. I love solving complex problems and
              creating intuitive applications that make a real impact.
            </p>
            <p class="text-muted-foreground mb-3 leading-8">
              My journey in software engineering has led me to work with various
              technologies, from front-end frameworks to backend services and
              cloud platforms. I'm always eager to learn new technologies and
              stay current with industry trends.
            </p>
            <p class="text-muted-foreground leading-8">
              When I'm not coding, you'll find me contributing to open-source
              projects, reading about the latest tech innovations, or exploring
              new tools that can improve development workflows.
            </p>
          </Card>
        </div>

        <div class="flex">
          <Card class="p-8 flex-1">
            <h3 class="text-xl font-semibold mb-6">Quick Facts</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <Code class="h-5 w-5 text-primary" />
                <span>Full-Stack Development</span>
              </div>
              <div class="flex items-center space-x-3">
                <Globe class="h-5 w-5 text-primary" />
                <span>Web Applications</span>
              </div>
              <div class="flex items-center space-x-3">
                <Smartphone class="h-5 w-5 text-primary" />
                <span>Mobile-First Design</span>
              </div>
              <div class="flex items-center space-x-3">
                <Cloud class="h-5 w-5 text-primary" />
                <span>Cloud Platforms</span>
              </div>
              <div class="flex items-center space-x-3">
                <Database class="h-5 w-5 text-primary" />
                <span>Database Design</span>
              </div>
            </div>
          </Card>
        </div>

        <div class="flex lg:col-span-3">
          <Card class="p-8 flex-1">
            <h3 class="text-xl font-semibold mb-6">Education</h3>
            <div class="space-y-6">
              <div class="border-l-2 border-primary/20 pl-6" v-for="about in abouts">
                <h4 class="font-semibold text-lg">{{ about.course }}</h4>
                <p class="text-primary font-medium">{{ about.school }}</p>
                <p class="text-sm text-muted-foreground">{{ about.year }}</p>
                <p class="text-sm text-muted-foreground mt-2">{{ about.description }}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Code, Globe, Smartphone, Cloud, Database } from "lucide-vue-next";
import { about as abouts } from "@/lib/constants/about";
</script>
