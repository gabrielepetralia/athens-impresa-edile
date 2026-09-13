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
      projects: projectsData.slice(0, 4)
    }
  },

  // computed: {
  //   reversedProjects() {
  //     return [...this.projects].reverse();
  //   }
  // }

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

      <div class="mt-5 mb-4 d-flex justify-content-center">
        <RouterLink to="/progetti" class="gp-btn gp-btn-red">
          Scopri tutti i Progetti <i class="fa-solid fa-arrow-right ms-2"></i>
        </RouterLink>
      </div>

  </section>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

section {
  padding-bottom: 0;
  background-color: $gp-white;

  h2 {
    color: $gp-red;
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