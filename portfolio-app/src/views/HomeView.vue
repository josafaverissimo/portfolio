<script setup>
import ShortPresentationSection from "@/components/HomeView/ShortPresentationSection.vue";
import AboutMeSection from "@/components/HomeView/AboutMeSection.vue";
import HabilitiesSection from "@/components/HomeView/HabilitiesSection.vue";
import ProjectsSection from "@/components/HomeView/ProjectsSection.vue";
import RightTriangle from "@/components/Separators/RightTriangle.vue";
</script>

<template>
  <main>
    <ShortPresentationSection />
    <RightTriangle backgroundColor="#020100">
      <AboutMeSection />
    </RightTriangle>
    <HabilitiesSection />
    <ProjectsSection />
  </main>
</template>

<style scoped>
  h1 {
    color: red;
  }

  main {
    display: flex;
    flex-direction: column;

    section {
      display: flex;
      align-items: center;
      flex-grow: 1;
    }
  }
</style>