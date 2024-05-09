<script>
import ProjectCard from '../partials/ProjectCard.vue';

import projectsData from '../../data/projects-data.json'

export default {
  name: "Projects",

  components: {
    ProjectCard
  },

  data() {
    return {
      projects: projectsData
    }
  }
}
</script>

<template>
  <section id="projects">
      <h2 class="text-center mb-5">Progetti</h2>

      <div class="cards-container">
        <div v-for="(project, index) in projects" :key="index" class="proj-col">
          <ProjectCard :project="project"/>
        </div>
      </div>

      <!-- <div class="my-4 d-flex justify-content-center">
        <span class="gp-btn gp-btn-red">Mostra tutti <i class="fa-solid fa-arrow-right ms-2"></i></span>
      </div> -->

  </section>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

section {
  padding-bottom: 0;
  background-color: $gp-gray;

  h2 {
    color: $gp-white;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;

    .proj-col {
      width: 100%;
    }
  }
}

// media-query md
@media screen and (min-width: 992px) {
  .proj-col {
    width: calc(100% / 2) !important;
  }
}
</style>