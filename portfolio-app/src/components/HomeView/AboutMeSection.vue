<script setup>
</script>

<template>
  <section class="about-me">
    <div class="about-me-container">
      <div class="title-wrapper">
        <h2>Quem é Josafá?</h2>
        <p>Sobre mim</p>
      </div>

      <div class="description">
        <p>
          Estudante de Ciência da Computação, desempenhando o papel de suporte técnico.
          Possuindo uma sólida compreensão de problemas, mais de cinco anos de
          experiência aliando a experiência acadêmica com a prática profissional. Alto nível
          técnico em: PHP, Javascript, MySQL, Docker, Vue.js, Angular e React.js.
        </p>

        <router-link to="/about" class="see-more">Veja mais</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.about-me {
  background-color: #020100;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 5rem 0;

  .about-me-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;

    .title-wrapper {
      p, h2 {
        margin: 0;
        text-align: center;
      }

      h2 {
        font-size: 3rem;
        font-family: var(--secondary-font), sans-serif;
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      p {
        text-align: center;
      }

      .see-more {
        align-self: center;
        display: inline-block;
        text-decoration: none;
        background-color: transparent;
        border: 2px solid #FFCF00;
        padding: .5rem 2rem;
        color: #FFCF00;
        border-radius: .5rem;

        transition: all .2s;
      }

      .see-more:hover {
        color: #000;
        background-color: #FFCF00;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .about-me-container {
      flex-direction: row;
      width: 50%;

      .title-wrapper {
        display: flex;
        flex-direction: column-reverse;
        align-self: flex-start;

        p {
          width: 70%;
          align-self: center;
          text-align: left;
        }
      }

      .description {
        flex-basis: 50%;

        p {
          text-align: right;
        }

        .see-more {
          align-self: flex-end;
        }
      }
    }
  }

  @media screen and (min-width: 1336px) {
    .about-me-container {
      gap: 5rem;
    }
  }
}
</style>