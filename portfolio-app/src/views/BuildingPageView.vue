<script setup>
import GithubIcon from "@/components/icons/GithubIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
</script>

<template>
  <main>
    <h2>Esta página está em construção. Desculpe-me o transtorno.</h2>

    <div class="socialMedias">
      <p>Consulte minhas redes socias:</p>

      <div class="socialMedias__linksWrapper">
        <a href="https://linkedin.com/in/josafaverissimo" target="_blank">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/josafaverissimo" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://instagram.com/josafa.verissimo" target="_blank">
          <InstagramIcon />
        </a>
      </div>

      <router-link to="/">Voltar à home</router-link>
    </div>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    h2 {
      text-align: center;
    }

    .socialMedias {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      .socialMedias__linksWrapper {
        display: flex;
        justify-content: center;
        gap: 2rem;

        a {
          display: block;
          text-decoration: none;
          color: #000;
          width: 2rem;
          height: 100%;
        }
      }
    }
  }
</style>