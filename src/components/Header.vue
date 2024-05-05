<script>

export default {
  name: "Header",

  methods: {
    scrollToSection(sectionID) {
      this.$scrollTo(sectionID, 500);
    },
  }
}
</script>

<template>
  <header id="header">
    <div class="gp-container d-flex justify-content-between align-items-center h-100">

      <div class="logo h-100">
        <a href="/">
          <img src="/img/logo-currenti-no-bg.png" alt="Logo" class="h-100">
        </a>
      </div>

      <div v-if="$route.path !== '/'">
        <a href="/" class="gp-btn gp-btn-red"><i class="fa-solid fa-arrow-left"></i><span class="d-none d-md-inline-block ms-2">Torna alla Home</span></a>
      </div>

      <nav v-else class="h-100 d-none d-md-block">
        <ul class="list-unstyled d-flex align-items-center mb-0 h-100">
          <li class="nav-item">
            <span class="nav-item-text" @click="scrollToSection('#about')">Chi Siamo</span>
          </li>
          <li class="nav-item">
            <span class="nav-item-text" @click="scrollToSection('#projects')">Progetti</span>
          </li>
          <li class="nav-item">
            <span class="nav-item-text" @click="scrollToSection('#team')">Team</span>
          </li>
          <li class="nav-item">
            <span class="nav-item-text" @click="scrollToSection('#contacts')">Contatti</span>
          </li>
        </ul>
      </nav>

    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

header {
  height: 130px;
  // position: fixed;
  // width: 100%;
  // top: 0;
  // left: 0;
  // z-index: 900;
  padding-top: 30px;

  nav {
    ul {
      gap: 40px;

      .nav-item {
        position: relative;
        overflow: hidden;

        &:hover {
          cursor: pointer;
          overflow: visible;
        }

        .nav-item-text {
          color: $gp-gray;
          position: relative;
          font-size: 0.99rem;
          text-transform: uppercase;
          font-weight: 500;

          &::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 3px;
            bottom: -5px;
            left: 0;
            background-color: $gp-red;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }
        }

        &:hover .nav-item-text::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }

    }
  }
  
}

</style>