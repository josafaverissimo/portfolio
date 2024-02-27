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

    nav {
      position: relative;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;

        .hamburger-menu-icon {
          width: 3rem;
        }
      }

      &:focus-within ul {
        opacity: 1;
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        transform: scaleX(1) scaleY(1);
        transition-duration: 100ms;
      }

      ul {
        transform: scaleX(0) scaleY(0);
        transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
        transition: all 75ms;
        opacity: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        position: absolute;
        right: 1rem;
        top: 100%;
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
            text-wrap: nowrap;
          }

          a:hover, a:active {
            opacity: .7;
          }
        }
      }

      ul::after {
        content: 'x';
        width: 30%;
        height: 100%;
        display: block;
        text-align: center;
        border-radius: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--white);
        background-color: var(--black);
      }
    }
  }
</style>