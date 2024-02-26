<script setup></script>

<template>
  <section class="about-me">
    <div class="about-me-container">
      <div class="title-wrapper">
        <p>Sobre mim</p>
        <h2>Quem é Josafá?</h2>
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
  justify-content: center;
  color: #fff;
  padding: 5rem 0;

  .about-me-container {
    max-width: 50%;
    display: flex;

    .title-wrapper {
      flex-basis: 50%;

      p, h2 {
        margin: 0;
      }

      h2 {
        font-size: 3rem;
      }
    }

    .description {
      flex-basis: 70%;
      display: flex;
      flex-direction: column;

      .see-more {
        align-self: flex-end;
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
}
</style>