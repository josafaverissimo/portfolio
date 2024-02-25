<script setup>
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
</script>

<template>
  <div class="wrapper">
    <h1>Contato</h1>

    <main>
      <div class="send-email">
        <form>
          <div class="input-wrapper">
            <label for="sender">Remetente</label>
            <input id="sender" name="sender" />
          </div>

          <div class="input-wrapper">
            <label for="title">Título</label>
            <input id="title" name="title" />
          </div>

          <div class="input-wrapper">
            <label for="message">Mensagem</label>
            <textarea id="message" name="message"></textarea>
          </div>

          <div class="btns-actions-wrapper">
            <button type="button">Anexar arquivo</button>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>

      <div class="contacts-info">
        <div>
          <p>Email: josafaverissimo98@gmail.com</p>
          <p>Telefone: (82) 9 8185-2058</p>
        </div>

        <div class="social-links-wrapper">
          <a href="https://linkedin.com/in/josafaverissimo">
            <LinkedinIcon />
          </a>

          <a href="https://instagram.com/josafa.verissimo">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;

    main {
      display: flex;
      width: 100vw;
      gap: 5rem;
      justify-content: center;

      .send-email {
        flex-basis: 50%;

        form {
          flex-basis: 50vw;
          display: flex;
          flex-direction: column;
          gap: 2rem;

          .input-wrapper {
            display: flex;
            flex-direction: column;

            input, textarea {
              outline: none;
              background-color: #fff;
              padding: 1rem;
              border: 1px solid #235789;
            }

            input {
              border-radius: 2rem;
            }

            textarea {
              border-radius: 1rem;
            }
          }

          textarea {
            resize: vertical;
          }

          .btns-actions-wrapper {
            display: flex;
            justify-content: space-between;

            button {
              background: transparent;
              border: none;
              padding: .5rem 2rem;
              border-radius: 1rem;
              cursor: pointer;
            }

            button[type="button"] {
              color: #020100;
              border: 2px solid #020100;
              transition: all .2s;
            }

            button[type="button"]:hover {
              color: #fff;
              background-color: #020100;
            }

            button[type="submit"] {
              color: #235789;
              border: 2px solid #235789;
            }

            button[type="submit"]:hover {
              color: #fff;
              background-color: #235789;
            }
          }
        }
      }

      .contacts-info {
        display: flex;
        flex-direction: column;

        .social-links-wrapper {
          display: flex;
          justify-content: center;
          gap: 1rem;
          width: 100%;

          a {
            width: 20%;
            text-decoration: none;
            color: #000;
          }
        }
      }
    }
  }
</style>
