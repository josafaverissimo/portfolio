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
          <router-link to="/contacts">Contato</router-link>
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
        animation: fadeInRightTop .3s;
        visibility: visible;
      }

      ul {
        transition: all 75ms;
        opacity: 0;
        visibility: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        position: absolute;
        right: 0;
        border-radius: .7rem;
        padding: 0;
        border: 2px solid #aaa;
        box-shadow: 5px 5px 0 1px #aaa;

        li {
          width: 100%;
          height: 100%;
          a {
            display: block;
            color: #000;
            padding: 1rem 3rem;
            font-size: 1.3rem;
            white-space: nowrap;
          }

          a:hover, a:active {
            opacity: .7;
          }
        }
      }

      ul::after {
        content: 'x';
        width: 100%;
        height: 100%;
        display: block;
        text-align: center;
        font-size: 2.3rem;
        cursor: pointer;
      }
    }
  }

  @keyframes fadeInRightTop {
    0% {
      top: -5px;
      right: -5px;
      opacity: .2;
    }
    50% {
      top: 120%;
      right: 20%;
      opacity: .5;
    }
    100% {
      opacity: 1;
      top: 100%;
      right: 0;
    }
  }
</style>