<script>
import ProjectCard from '../components/partials/ProjectCard.vue';
import projectsData from '../data/projects-data.json'

export default {
  name: "Projects",

  components: {
    ProjectCard
  },

  data() {
    return {
      projects: projectsData
    }
  },

  created() {
    window.scrollTo(0, 0)
  }
}
</script>

<template>
  <div class="progetti-page pt-5">
    <h2 class="text-center mb-5">Progetti</h2>

    <div class="cards-container">
      <div v-for="(project, index) in projects" :key="index" class="proj-col">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.progetti-page {
  min-height: calc(100vh - 200px);

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

@media screen and (min-width: 992px) {
  .proj-col {
    width: calc(100% / 2) !important;
  }
}
</style>
