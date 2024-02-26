<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon.vue";
</script>

<template>
  <section id="projects" class="projects">
    <div class="projects-container">
      <h2>Projetos</h2>

      <div class="projects-cards-container">
        <ProjectCard src="/images/projects/atacadao-portal.png">
          Portal feito para o atacadão para auxiliar na obtenção de dados como os ramais, links e documentos
          da empresa.
        </ProjectCard>


        <ProjectCard src="/images/projects/ftotem.png">
          Sistema composto por um gerenciador de dados (eventos, clientes, usuários e vídeos) e um sistema
          para gravar vídeos através da câmera do dispositivo.
        </ProjectCard>

        <ProjectCard src="/images/projects/xmgoi-webapp.png">
          Sistema para gerar pdf da lista de produtos que são negociados entre o cliente e a gerência.
        </ProjectCard>
      </div>

      <router-link to="/projects" class="see-all">
        <span>Veja todos</span>
        <i><ArrowRightIcon /></i>
      </router-link>

      <div class="send-message-container">
        <div class="send-message">
          <p>Se interessou?</p>
          <router-link to="/contacts" class="btn-send-message">Envie-me uma mensagem</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.projects {
  flex-basis: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .projects-container {
    display: flex;
    flex-direction: column;
    max-width: 80%;

    h2 {
      font-size: 3rem;
      text-align: center;
    }

    .projects-cards-container {
      width: 100%;
      display: flex;
      gap: 1rem;
    }

    .see-all {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: center;
      text-decoration: none;
      color: #000;
      padding: .5rem 2rem;
      border-radius: .5rem;
      font-size: 2rem;
      transition: all .2s;

      i {
        display: flex;
        justify-content: center;
        svg {
          width: 3rem;
          height: 3rem;
        }
      }
    }

    .see-all:hover {
      color: #7f7f7f;
    }

    .send-message-container {
      display: flex;
      justify-content: flex-end;
      width: 100%;

      .send-message {
        p {
          font-size: 1.5rem;
          text-align: right;
          margin: 0;
        }

        .btn-send-message {
          display: block;
          text-decoration: none;
          color: var(--about-me-background-color);
          border: 2px solid var(--about-me-background-color);
          transition: all .2s;
          padding: .5rem 2rem;
          border-radius: 1rem;
        }

        .btn-send-message:hover {
          background-color: var(--about-me-background-color);
          color: #fff;
        }
      }
    }
  }
}
</style>