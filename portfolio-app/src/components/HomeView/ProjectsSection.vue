<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon.vue";
import { Swiper } from "swiper";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {onMounted} from "vue";

import 'swiper/css/bundle';
import 'swiper/css/pagination';

let swiper = {}

onMounted(() => {
  swiper = new Swiper('.swiper',{
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 5000
    }
  })
})

</script>

<template>
  <section id="projects" class="projects">

    <div class="projects-container">
      <h2>Projetos</h2>

      <div class="swiper">
        <div class="swiper-pagination"></div>

        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <h3 class="projects__title">FTotem (CMS)</h3>

            <ProjectCard src="/images/projects/ftotem-cms.webp">
              Sistema feito para gerenciar dados de eventos, clientes, usuários e vídeos.
            </ProjectCard>
          </div>
          <div class="swiper-slide">
            <h3 class="projects__title">FTotem</h3>

            <ProjectCard src="/images/projects/ftotem.webp">
              Aplicação web para os convidados do evento gravarem vídeos.
            </ProjectCard>
          </div>

          <div class="swiper-slide">
            <h3 class=projects__title>AluraBooks</h3>
            <ProjectCard src="/images/projects/alurabooks.webp">
              Projeto desenvolvido durante o curso HTML e CSS: responsividade e mobile-first da alura.
            </ProjectCard>
          </div>

          <div class="swiper-slide">
            <h3 class="projects__title">Portal Atacadão</h3>

            <ProjectCard src="/images/projects/atacadao-portal.webp" style="background: #fff">
              Portal feito para o atacadão para auxiliar na busca de dados como os ramais, links e outros documentos
              da empresa.
            </ProjectCard>
          </div>

          <div class="swiper-slide">
            <h3 class="projects__title">Xmgoi13 WebApp</h3>

            <ProjectCard src="/images/projects/xmgoi13.webp">
              Sistema para gerar pdf da lista de produtos que são negociados entre o cliente e a gerência.
            </ProjectCard>
          </div>
        </div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
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
.swiper {
  max-width: 100%;

  .swiper-pagination {
    position: static;
  }

  .swiper-wrapper {
    position: relative;
  }
}

section.projects {
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 1rem;
  width: 100%;
  box-shadow: 0 0 10px #f0f0f0  ;

  .projects-container {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 2rem;

    h2 {
      font-size: 3rem;
      text-align: center;
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
          font-size: 1.1rem;
          text-align: right;
          margin: 0;
        }

        .btn-send-message {
          display: block;
          text-decoration: none;
          color: #020100;
          border: 2px solid #020100;
          transition: all .2s;
          padding: .5rem 2rem;
          border-radius: 1rem;
        }

        .btn-send-message:hover {
          background-color: #020100;
          color: #fff;
        }
      }
    }

    .projects__title {
      font-weight: normal;
    }

    @media screen and (min-width: 768px) {
      & {
        max-width: 768px;
      }
    }
  }

  @media screen and (min-width: 992px) {
    width: 90%;
  }

  @media screen and (min-width: 1336px) {
    width: 70%;
  }
}
</style>