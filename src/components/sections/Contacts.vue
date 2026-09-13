<script>
export default {
  name: "Contacts",
}
</script>

<template>
  <section id="contacts">
    <div class="background-image">
      <div class="gp-overlay"></div>

      <h2 class="text-center mb-5">Contatti</h2>

      <div class="contacts-container d-flex flex-column align-items-center w-100">

        <p title="Indirizzo">
          <i class="fa-solid fa-location-dot me-2"></i>
          Piazza Gianmaria da Casalvecchio, 1 - 98035 Giardini Naxos (ME)
        </p>

        <div class="map gp-container mb-4">
          <div class="map-frame">
            <iframe
              title="Mappa - Athens, Impresa Edile Currenti"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14950.241430447913!2d15.2679132!3d37.8398319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131411df93cae26f%3A0x2b7ce2eb1eb3b861!2sAthens%2C%20Impresa%20Edile%20Currenti!5e1!3m2!1sit!2sit!4v1759579835034!5m2!1sit!2sit">
            </iframe>
          </div>
        </div>

        <div class="info">
          <p title="Posta Elettronica Certificata"><i class="fa-solid fa-envelope me-2"></i>athens.cooperativa@pec.it</p>
          <p title="Email"><i class="fa-solid fa-at me-2"></i>athenscooperative@libero.it</p>
          <p title="Telefono"><i class="fa-solid fa-phone me-2"></i>+39 3201616530</p>
          <p title="Partita IVA"><i class="fa-solid fa-file-invoice-dollar me-2"></i>03680950833</p>
        </div>

      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

section {
  padding: 0;
  background-color: $gp-white;

  .background-image {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url("/img/contacts-bg.png");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  h2 {
    position: relative;
    padding-top: 50px;
    color: $gp-white;
  }

  .contacts-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;

    p {
      color: $gp-white;
      font-size: 1.1rem;
      text-align: center;

      span {
        font-weight: 500;
      }
    }

    .map {
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      width: 100%;
    }

    .map-frame {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,.25);
    }

    .map-frame iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: 0;
      display: block;
    }
  }

  .info {
    padding-bottom: 50px;
  }

}
</style>
