<script setup>
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import PhpIcon from "@/components/icons/PhpIcon.vue";
import JavascriptIcon from "@/components/icons/JavascriptIcon.vue";
import VueIcon from "@/components/icons/VueIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import GitIcon from "@/components/icons/GitIcon.vue";
import LaravelIcon from "@/components/icons/LaravelIcon.vue";
import CodeigniterIcon from "@/components/icons/CodeigniterIcon.vue";
import AngularIcon from "@/components/icons/AngularIcon.vue";
import ReactjsIcon from "@/components/icons/ReactjsIcon.vue";
import MySqlIcon from "@/components/icons/MySqlIcon.vue";
import DockerIcon from "@/components/icons/DockerIcon.vue";
import TuxIcon from "@/components/icons/TuxIcon.vue";
import NginxIcon from "@/components/icons/NginxIcon.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon.vue";
</script>

<template>
  <main>
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

    <div class="separator-right-triangle"></div>

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
  </main>
</template>

<style scoped>
  main {
    --about-me-background-color: #235789;
    display: flex;
    flex-direction: column;

    .separator-right-triangle {
      width:100%;
      height:100px;
      background: linear-gradient(to left bottom, transparent 49%, var(--about-me-background-color) 50%);
    }

    section {
      display: flex;
      align-items: center;
      flex-grow: 1;
    }

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

    section.about-me {
      background-color: var(--about-me-background-color);
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

    section.habilities {
      display: flex;
      justify-content: center;

      .habilities-container {
        display: flex;
        flex-direction: column;
        max-width: 80%;

        h2 {
          align-self: flex-end;
          font-size: 3rem;
        }

        .habilities-logo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 5rem;

          .others-logo {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;

            svg {
              height: 70%;
              width: 70%;
            }
          }
        }
      }
    }

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
  }
</style>