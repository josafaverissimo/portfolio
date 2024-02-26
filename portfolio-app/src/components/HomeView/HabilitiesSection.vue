<script setup>

import LaravelIcon from "@/components/icons/LaravelIcon.vue";
import NginxIcon from "@/components/icons/NginxIcon.vue";
import VueIcon from "@/components/icons/VueIcon.vue";
import ReactjsIcon from "@/components/icons/ReactjsIcon.vue";
import JavascriptIcon from "@/components/icons/JavascriptIcon.vue";
import DockerIcon from "@/components/icons/DockerIcon.vue";
import TuxIcon from "@/components/icons/TuxIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import CodeigniterIcon from "@/components/icons/CodeigniterIcon.vue";
import GitIcon from "@/components/icons/GitIcon.vue";
import MySqlIcon from "@/components/icons/MySqlIcon.vue";
import PhpIcon from "@/components/icons/PhpIcon.vue";
import AngularIcon from "@/components/icons/AngularIcon.vue";
</script>

<template>
  <section class="habilities">
    <div class="habilities-container">
      <h2>Habilidades</h2>

      <div class="habilities-logo">
        <div class="main-logo">
          <PhpIcon />
        </div>

        <div class="others-logo">
          <LaravelIcon />
          <CodeigniterIcon />
          <MySqlIcon />
          <DockerIcon />
          <JavascriptIcon />
          <ReactjsIcon />
          <VueIcon />
          <AngularIcon />
          <GitIcon />
          <GithubIcon />
          <TuxIcon />
          <NginxIcon />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.habilities {
  display: flex;
  flex-direction: column;
  align-items: center;

  .habilities-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80%;

    h2 {
      font-size: 3rem;
      margin-bottom: 0;
    }

    @media screen and (min-width: 992px) {
      h2 {
        margin-bottom: 4rem;
      }
    }

    .habilities-logo {
      display: grid;
      grid-template-columns: 1fr;

      .others-logo {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;

        svg {
          height: 70%;
          width: 70%;
        }
      }

      @media screen and (min-width: 992px) {
        .others-logo {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }

    @media screen and (min-width: 992px) {
      .habilities-logo {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 5rem;
      }
    }
  }
}
</style>