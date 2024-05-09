<script>
import projectsData from '../data/projects-data.json'

export default {
  name: "ProjectDetail",

  data() {
    return {
      projects: projectsData,
      project: {},
      modalOpen: false,
      modalImage: '',
    }
  },

  methods: {
    openModal(imageSrc) {
      this.modalOpen = true;
      this.modalImage = imageSrc;
    },
    closeModal() {
      this.modalOpen = false;
      this.modalImage = '';
    },
  },

   created() {
    window.scrollTo(0, 0);
    
    try {
      const projectSlug = this.$route.params.slug;
      this.project = this.projects.find(project => project.slug === projectSlug);
    } catch (error) {
      console.error('Error in created hook:', error);
    }
  },
}
</script>

<template>
  <div class="project-details gp-container py-5">

    <h2 class="text-center mb-5">{{ project.name }}</h2>

    <!-- mobile photos -->
    <div class="photos align-items-center justify-content-center d-flex d-md-none flex-column gap-2">

      <div @click="openModal(project.img)">
        <img class="photo" :src="project.img" :alt="project.name">
      </div>

      <div v-for="(photo, index) in project.photos" :key="index" class="" @click="openModal(photo)">
        <img class="photo" :src="photo" :alt="project.name + '-' + index">
      </div>

    </div>

    <!-- desktop photos -->
    <div class="photos gap-2 align-items-center justify-content-center d-none d-md-flex">

      <div class="w-50" @click="openModal(project.img)">
        <img class="photo" :src="project.img" :alt="project.name">
      </div>

      <div class="w-50">
        <div class="d-flex flex-wrap">

          <div v-for="(photo, index) in project.photos" :key="index" class="w-50 p-2" @click="openModal(photo)">
            <img class="photo" :src="photo" :alt="project.name + '-' + index">
          </div>

        </div>
      </div>

    </div>


    <p v-html="project.description" class="my-5"></p>

    <div v-if="modalOpen" class="img-modal" @click="closeModal">
      <div class="modal-content">
        <img :src="modalImage" :alt="project.name">
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.project-details {
  min-height: calc(100vh - 200px);

  .img-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    cursor: pointer;
  }

  .modal-content {
    width: 80%;
    height: 80%;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  h2 {
    color: $gp-red;
  }

  p {
    text-align: justify;
  }

  .photo {
    cursor: pointer;
  }

}
</style>