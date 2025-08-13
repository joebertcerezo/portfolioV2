<template>
  <div class="min-h-screen bg-background text-foreground">
    <Header />

    <!-- Hero Section -->
    <Hero />

    <!-- About Section -->
    <About />

    <!-- Skills Section -->
    <Skills />

    <!-- Projects Section -->
    <Projects />

    <!-- Contact Section -->
    <Contact />

    <!-- Footer -->
    <Footer />

    <!-- Scroll to Top Button -->
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: "Joebert Cerezo - Full-Stack Software Engineer",
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
      content: "Joebert Cerezo - Full-Stack Software Engineer",
    },
    {
      property: "og:description",
      content:
        "Full-Stack Software Engineer specializing in modern web applications",
    },
    { property: "og:type", content: "website" },
  ],
  script: [
    {
      innerHTML: `
        (function() {
          const savedTheme = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          
          if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        })();
      `,
      type: 'text/javascript'
    }
  ]
});
</script>
