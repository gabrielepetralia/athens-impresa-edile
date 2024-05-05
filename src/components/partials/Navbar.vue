<script>
export default {
  name: "Navbar",

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen;

      let navToggler = document.querySelector(".nav-toggler");
      let menu = document.getElementById("menu");

      if (this.isOpen) {
        navToggler.style.width = menu.offsetWidth + "px";
        menu.style.right = 0;
      } else {
        navToggler.style.width = "60px";
        menu.style.right = "-" + (menu.offsetWidth) + "px";
      }
    },

    changeNavTogglerVisibility() {
      let vm = this;

      let navToggler = document.querySelector(".nav-toggler");
      let menu = document.getElementById("menu");

      if (window.scrollY >= 300) {
        navToggler.style.display = 'flex';
      } else {
        navToggler.style.width = "60px";
        menu.style.right = "-" + (menu.offsetWidth) + "px";

        navToggler.style.display = 'none';
      }

      window.addEventListener('scroll', function () {
        if (window.scrollY >= 300) {
          navToggler.style.display = 'flex';
        } else {
          vm.isOpen = false;
          navToggler.style.width = "60px";
          menu.style.right = "-" + (menu.offsetWidth) + "px";

          navToggler.style.display = 'none';
        }
      });
    },

    scrollToSection(sectionID) {
      this.$scrollTo(sectionID, 500);
    },
  },

  mounted() {
    this.changeNavTogglerVisibility();
  }
}
</script>

<template>
  <div class="nav-toggler justify-content-end" :class="{ 'open': isOpen }">

    <nav id="menu" class="d-flex align-items-center" :class="{ 'open': isOpen }">
      <ul class="list-unstyled d-flex mb-0">
        <li class="nav-item">
          <span class="nav-item-text" @click="scrollToSection('#header')"><i class="fa-solid fa-arrow-up"></i></span>
        </li>
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
    
    <div class="nav-toggler-btn" @click="toggleNav()" :class="{ 'open': isOpen }">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

.nav-toggler {
  width: 60px;
  height: 60px;
  position: fixed;
  padding-left: 30px;
  right: 30px;
  top: 30px;
  border-radius: 60px;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.2);
  z-index: 999;
  overflow: hidden;
  transition: all 0.5s;
  
  .nav-toggler-btn {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: $gp-red;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: $gp-gray;
    }

    .line {
      position: absolute;
      height: 3px;
      width: 50%;
      background-color: $gp-white;
      border-radius: 10px;
      opacity: 1;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s;

      &:nth-child(1) {
        top: 33%;
      }

      &:nth-child(2) {
        top: 50%;
      }

      &:nth-child(3) {
        top: 67%;
      }
    }

    &.open {
      .line:nth-child(2) {
        width: 0;
      }

      .line:nth-child(1) {
        top: 50%;
        transform: translateX(-50%) rotate(-45deg) ;
      }

      .line:nth-child(3) {
        top: 50%;
        transform: translateX(-50%) rotate(45deg);
      }
    }
  }

  nav {
    position: absolute;
    height: 60px;
    width: fit-content;
    padding: 0 85px 0 40px;
    border-radius: 60px;
    background-color: $gp-white;
    transition: all 0.5s;

    ul {
      gap: 40px;

      .nav-item {
        &:hover {
          cursor: pointer;
          overflow: visible;
        }

        .nav-item-text {
          color: $gp-gray;
          position: relative;
          font-size: 0.99rem;
          text-transform: uppercase;
          white-space: nowrap;
          font-weight: 500;
          transition: all 0.3s;

          &:hover {
            color: $gp-red;
          }
        }

      }
    }
  }
}
</style>