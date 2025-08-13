<template>
  <section id="contact" class="py-20 bg-muted/50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
        Get In Touch
      </h2>
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-xl font-semibold mb-6">Let's work together</h3>
            <p class="text-muted-foreground mb-8">
              I'm always interested in new opportunities and exciting projects.
              Whether you're looking for a developer or just want to connect,
              feel free to reach out!
            </p>

            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <Mail class="h-5 w-5 text-primary" />
                <span>joebertcerezo@gmail.com</span>
              </div>
              <div class="flex items-center space-x-3">
                <Linkedin class="h-5 w-5 text-primary" />
                <a href="http://www.linkedin.com/in/joebertcerezo" class="hover:text-primary transition-colors">Joebert
                  Cerezo</a>
              </div>
              <div class="flex items-center space-x-3">
                <Github class="h-5 w-5 text-primary" />
                <a href="https://github.com/joebertcerezo"
                  class="hover:text-primary transition-colors">joebertcerezo</a>
              </div>
            </div>
          </div>

          <Card class="p-6">
            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-2">Name</label>
                <input type="text"
                  class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Email</label>
                <input type="email"
                  class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Message</label>
                <textarea rows="4"
                  class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message..."></textarea>
              </div>
              <Button type="submit" class="w-full"> Send Message </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Github, Mail, Linkedin, Download } from "lucide-vue-next";
</script>
