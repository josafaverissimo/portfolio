<script setup>
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
</script>

<template>
  <section class="short-presentation">
    <div class="short-presentation-container">
      <div class="wrapper">
        <div class="title">
          <h1>Desenvolvedor Web</h1>
          <p>Olá! Sou o Josafá, sou capaz de construir ideias! Vamos tirar a sua do papel?</p>
          <a href="#projects">Projetos</a>
        </div>

        <div class="img-wrapper">
          <img src="/me.webp" alt="Foto do Josafá"/>

          <div class="social-links">
            <a href="https://instagram.com/josafa.verissimo" target="_blank">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com/in/josafaverissimo" target="_blank">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll">
      <span>scroll</span>
    </div>
  </section>
</template>

<style scoped>
section.short-presentation {
  flex-grow: 1;
  flex-basis: 80vh;

  .short-presentation-container {
    display: flex;
    flex-grow: 1;
    justify-content: center;

    .wrapper {
      display: flex;
      gap: 2rem;

      .title {
        display: flex;
        flex-direction: column;

        h1 {
          font-size: 3rem;
          margin: 0;
        }

        p {
          font-size: 1rem;
          margin: 0;
        }

        a {
          text-decoration: none;
          color: #000;
          background-color: transparent;
          border: 2px solid #000;
          padding: .5rem 2rem;
          align-self: flex-end;
          border-radius: .5rem;
          margin-top: .5rem;

          transition: all .2s;
        }

        a:hover {
          color: #fff;
          background-color: #000;
        }
      }

      .img-wrapper {
        img {
          width: 25rem;
          height: 25rem;
          object-fit: cover;
          border-radius: 100%;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          width: 100%;

          a {
            display: block;
            text-decoration: none;
            color: #000;
            width: 3rem;
            height: 100%;
          }
        }
      }
    }
  }

  .scroll {
    position: absolute;
    z-index: -1;
    bottom: 3rem;
    left: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      display: block;
    }
  }

  .scroll::after {
    display: block;
    content: "";
    background-color: #000;
    width: 2px;
    height: 10rem;
  }
}
</style>