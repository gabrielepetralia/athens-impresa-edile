<script>
export default {
  name: "ProjectCard",

  props: {
    project: Object,
  },
}
</script>

<template>
  <div class="project-card d-flex flex-column align-items-center justify-content-center">

    <img :src="project.img" :alt="project.name">
    <div class="gp-overlay"></div>

    <div class="card-content d-flex flex-column align-items-center justify-content-center">
      <h4 class="mb-4">{{ project.name }}</h4>

      <router-link :to="{ name: 'project-details', params: { slug: project.slug } }" class="project-btn">Vedi
        Progetto</router-link>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

.project-card {
  position: relative;
  background-color: $gp-red;
  height: 600px;
  color: $gp-white;
  overflow: hidden;

  img {
    position: absolute;
    height: 100%;
  }

  .card-content {
    z-index: 1;

    h4 {
      font-weight: 300;
    }

    .project-btn {
      color: $gp-white;
      font-size: 1rem;
      font-weight: 400;
      padding: 15px 30px;
      transition: all 0.3s;
      cursor: pointer;
      border: 1px solid $gp-white;

      &:hover {
        background-color: $gp-white;
        color: $gp-gray;
      }
    }
  }
}
</style>