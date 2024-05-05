<script>

export default {
  name: "Jumbotron",

  methods: {
    scrollToSection(sectionID) {
      this.$scrollTo(sectionID, 500);
    },
  }
}
</script>

<template>
  <div class="jumbotron d-flex align-items-center">
    <div class="gp-container">

      <p class="jumbo-text">
        <span class="text-black">ATHENS</span><br>
        <span class="txt-red">Cooperativa</span><br>
        <span>Currenti</span><br>
      </p>

      <span class="gp-btn gp-btn-red" @click="scrollToSection('#contacts')">Contattaci <i class="fa-solid fa-arrow-down ms-2"></i></span>

    </div>

    <img src="/img/architecture-project.png" alt="">
  </div>

</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.jumbotron {
  padding: 20px 0s;
  position: relative;
  height: calc(100vh - 130px);
   overflow-x: hidden;
  
  .jumbo-text {
    font-weight: 600;
    font-size: 2.5rem;
    margin-bottom: 50px;
    line-height: 120%;
  }

  .jumbo-text span:first-child {
    font-size: 3rem;
  }

  .gp-btn {
    font-size: 1.15rem;
  }

  img {
    position: absolute;
    right: -60%;
    bottom: 5%;
    opacity: 30%;
    height: 90%;
    z-index: -1;
  }
}

// media-query md
@media screen and (min-width: 768px) {
  .jumbotron {
    
    img {
      right: 2%;
      bottom: 8%;
    }
  }
}

// media-query lg
@media screen and (min-width: 992px) {
  .jumbotron {

    .jumbo-text {
      font-size: 3.5rem;
    }

    .jumbo-text span:first-child {
      font-size: 4rem;
    }
  }
}
</style>