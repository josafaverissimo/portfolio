<script setup>
import Logo from "@/components/Logo.vue";
import MenuHamburguer from "@/components/icons/MenuHamburguer.vue";

</script>

<template>
  <header>
    <router-link to="/">
      <Logo width="4rem" height="4rem" />
    </router-link>

    <nav>
      <button>
        <MenuHamburguer class="hamburger-menu-icon" />
      </button>

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
    padding:  1rem;

    nav:has(button:focus) ul {
      display: flex;
    }

    nav:has(a:hover) ul {
      display: flex;
    }

    nav {
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;

        .hamburger-menu-icon {
          width: 3rem;
        }
      }

      @media screen and (min-width: 5768px) {
        button {
          display: none;
        }
      }

      ul {
        display: none;
        flex-direction: column;
        align-items: center;
        background: #fff;
        position: absolute;
        right: 1rem;
        top: 0;
        border-radius: 2rem;
        padding: 0;

        li {
          width: 100%;
          height: 100%;
          a {
            display: block;
            color: #000;
            padding: 1rem 3rem;
            font-size: 1.3rem;
          }

          a:hover, a:active {
            opacity: .7;
          }
        }
      }

      ul::after {
        content: 'x';
        width: 100%;
        display: block;
        text-align: center;
        font-size: 2rem;
        cursor: pointer;
      }
    }
  }
</style>