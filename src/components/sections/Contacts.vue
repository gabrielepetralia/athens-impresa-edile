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

      <div class="d-flex flex-column align-items-center">

        <div class="d-flex flex-column align-items-center mb-4 ">
          <p title="Indirizzo"><i class="fa-solid fa-location-dot me-2"></i>Piazza Gianmaria da Casalvecchio N°1 -
            98035 Giardini Naxos
            (ME)
          </p>
          <div class="map gp-container">
            <a href="https://www.google.com/maps/place/Athens+Cooperativa+Currenti/@37.8398319,15.2679132,15z/data=!4m6!3m5!1s0x131411df93cae26f:0x2b7ce2eb1eb3b861!8m2!3d37.8411714!4d15.2778629!16s%2Fg%2F11vr5pc7_b?entry=ttu"
              target="blank">
              <img class="w-100" src="/img/currenti-maps.png" alt="Mappa">
            </a>
          </div>
        </div>

        <div class="info">
          <p title="Posta Elettronica Certificata"><i class="fa-solid fa-envelope me-2"></i>athens.cooperativa@pec.it
          </p>
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
    padding-top: 50px;
    position: relative;
    color: $gp-white;
  }

  p {
    position: relative;
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
  }

  .info {
    padding-bottom: 50px;
  }
}
</style>