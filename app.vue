<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Navigation -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b"
    >
      <div class="container mx-auto px-6 py-4 w-full">
        <div class="flex items-center justify-between">
          <div class="text-xl font-bold">JL Cerezo</div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="hover:text-primary transition-colors"
              >Home</a
            >
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

    <!-- Hero Section -->
    <section
      id="home"
      class="relative h-screen bg-gradient-to-br from-background to-muted overflow-hidden flex items-center"
    >
      <!-- FlickeringGrid Background -->
      <div class="absolute inset-0 z-0">
        <ClientOnly>
          <FlickeringGrid
            class="relative inset-0 z-0 [mask-image:radial-gradient(800px_circle_at_center,gray,transparent)]"
            :square-size="6"
            :grid-gap="6"
            color="#6B7280"
            :max-opacity="0.5"
            :flicker-chance="0.1"
            :width="width"
            :height="height"
          />
        </ClientOnly>
      </div>

      <div class="container mx-auto px-6 text-center relative z-10 w-full">
        <div class="max-w-4xl mx-auto">
          <h1
            class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          >
            Hi, I'm JL Cerezo
          </h1>
          <h2 class="text-xl md:text-2xl text-muted-foreground mb-8">
            Full-Stack Software Engineer
          </h2>
          <p class="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            I build scalable web applications with a focus on user experience
            and modern technologies.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#projects">View My Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
          About Me
        </h2>
        <div class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <Card class="p-8">
              <h3 class="text-xl font-semibold mb-4">Background</h3>
              <p class="text-muted-foreground mb-6">
                I'm a passionate full-stack software engineer with expertise in
                modern web technologies. I love solving complex problems and
                creating intuitive applications that make a real impact.
              </p>
              <p class="text-muted-foreground mb-6">
                My journey in software engineering has led me to work with
                various technologies, from front-end frameworks to backend
                services and cloud platforms. I'm always eager to learn new
                technologies and stay current with industry trends.
              </p>
              <p class="text-muted-foreground">
                When I'm not coding, you'll find me contributing to open-source
                projects, reading about the latest tech innovations, or
                exploring new tools that can improve development workflows.
              </p>
            </Card>
          </div>
          <div>
            <Card class="p-8">
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
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-muted/30">
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

    <!-- Projects Section -->
    <section id="projects" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Project 1 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1]"
              >
                <CardItem :translate-z="100" class="w-full mb-4">
                  <div
                    class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-xl"
                  >
                    <Globe class="h-16 w-16 text-white" />
                  </div>
                </CardItem>

                <CardItem
                  :translate-z="50"
                  class="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                >
                  E-Commerce Platform
                </CardItem>

                <CardItem
                  as="p"
                  :translate-z="60"
                  class="text-sm text-neutral-500 dark:text-neutral-300 mb-4"
                >
                  A full-stack e-commerce solution with payment integration,
                  inventory management, and admin dashboard.
                </CardItem>

                <CardItem :translate-z="40" class="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" class="text-xs">React</Badge>
                  <Badge variant="outline" class="text-xs">Node.js</Badge>
                  <Badge variant="outline" class="text-xs">MongoDB</Badge>
                  <Badge variant="outline" class="text-xs">Stripe</Badge>
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

          <!-- Project 2 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.1]"
              >
                <CardItem :translate-z="100" class="w-full mb-4">
                  <div
                    class="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center rounded-xl"
                  >
                    <Smartphone class="h-16 w-16 text-white" />
                  </div>
                </CardItem>

                <CardItem
                  :translate-z="50"
                  class="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                >
                  Task Management App
                </CardItem>

                <CardItem
                  as="p"
                  :translate-z="60"
                  class="text-sm text-neutral-500 dark:text-neutral-300 mb-4"
                >
                  A productivity app with real-time collaboration, drag-and-drop
                  functionality, and team management.
                </CardItem>

                <CardItem :translate-z="40" class="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" class="text-xs">Vue.js</Badge>
                  <Badge variant="outline" class="text-xs">Nuxt</Badge>
                  <Badge variant="outline" class="text-xs">Socket.io</Badge>
                  <Badge variant="outline" class="text-xs">PostgreSQL</Badge>
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

          <!-- Project 3 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.1]"
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
                  Data Analytics Dashboard
                </CardItem>

                <CardItem
                  as="p"
                  :translate-z="60"
                  class="text-sm text-neutral-500 dark:text-neutral-300 mb-4"
                >
                  Real-time analytics platform with interactive charts, data
                  visualization, and automated reporting.
                </CardItem>

                <CardItem :translate-z="40" class="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" class="text-xs">Python</Badge>
                  <Badge variant="outline" class="text-xs">FastAPI</Badge>
                  <Badge variant="outline" class="text-xs">React</Badge>
                  <Badge variant="outline" class="text-xs">AWS</Badge>
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

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-muted/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
          Get In Touch
        </h2>
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-xl font-semibold mb-6">Let's work together</h3>
              <p class="text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you're looking for a developer or just want to
                connect, feel free to reach out!
              </p>

              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <Mail class="h-5 w-5 text-primary" />
                  <span>joebertcerezo@gmail.com</span>
                </div>
                <div class="flex items-center space-x-3">
                  <Linkedin class="h-5 w-5 text-primary" />
                  <a href="http://www.linkedin.com/in/joebertcerezo" class="hover:text-primary transition-colors"
                    >Joebert Cerezo</a
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <Github class="h-5 w-5 text-primary" />
                  <a href="https://github.com/joebertcerezo" class="hover:text-primary transition-colors"
                    >joebertcerezo</a
                  >
                </div>
              </div>
            </div>

            <Card class="p-6">
              <form class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button type="submit" class="w-full"> Send Message </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-2 border-t">
      <div class="container mx-auto px-6 text-center">
        <p class="text-muted-foreground">
          © 2025 JL Cerezo. Built with Nuxt, Vue, and Tailwind CSS.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
import FlickeringGrid from "@/components/ui/flickering-grid/FlickeringGrid.vue";
import IconCloud from "@/components/ui/icon-cloud/IconCloud.vue";
import {
  Menu,
  Code,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Layers,
  Wrench,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  X,
} from "lucide-vue-next";
import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Window width for FlickeringGrid
const windowWidth = ref(1920);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Set window width on client side
onMounted(() => {
  if (import.meta.client) {
    windowWidth.value = window.innerWidth;

    const handleResize = () => {
      windowWidth.value = window.innerWidth;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
  }
});

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

// SEO
useHead({
  title: "JL Cerezo - Full-Stack Software Engineer",
  meta: [
    {
      name: "description",
      content:
        "Full-Stack Software Engineer specializing in modern web applications with Vue.js, Nuxt, React, and Node.js.",
    },
    {
      name: "keywords",
      content:
        "software engineer, full-stack developer, vue.js, nuxt, react, node.js, web development",
    },
    {
      property: "og:title",
      content: "JL Cerezo - Full-Stack Software Engineer",
    },
    {
      property: "og:description",
      content:
        "Full-Stack Software Engineer specializing in modern web applications",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>
