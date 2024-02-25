<script setup>
import Logo from "@/components/Logo.vue";

</script>

<template>
  <header>
    <router-link to="/">
      <Logo width="4rem" height="4rem" />
    </router-link>

    <nav>
      <ul>
        <li>
          <router-link to="/contacts">Contatos</router-link>
        </li>
        <li>
          <router-link to="/projects">Trabalhos</router-link>
        </li>
        <li>
          <router-link to="/about">Sobre mim</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    margin-top: 1rem;

    nav {
      ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 1rem;

        li {
          a {
            text-decoration: none;
            color: #000;
            background-color: #f0f0f0;
            padding: 0.5rem 2rem;
            margin-bottom: 1rem;
            border-bottom: 2px solid #000;
            border-top-right-radius: .5rem;
            border-top-left-radius: .5rem;

            transition: all .2s;
          }

          a:hover {
            background-color: #000;
            color: #fff;
          }
        }
      }
    }
  }
</style>