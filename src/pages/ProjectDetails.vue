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
      this.modalOpen = true
      this.modalImage = imageSrc
    },
    closeModal() {
      this.modalOpen = false
      this.modalImage = ''
    },
  },
  created() {
    window.scrollTo(0, 0)
    try {
      const projectSlug = this.$route.params.slug
      this.project = this.projects.find(project => project.slug === projectSlug) || {}
    } catch (error) {
      console.error('Error in created hook:', error)
    }
  },
}
</script>

<template>
  <div class="project-details gp-container py-5 mt-3 mt-md-0">
    <h2 class="text-center mb-5">{{ project.name }}</h2>

    <div class="photos-mobile d-grid d-md-none">
      <div class="frame frame--main" @click="openModal(project.img)">
        <img class="photo" :src="project.img" :alt="project.name" loading="lazy" />
      </div>
      <div v-for="(photo, index) in project.photos" :key="'m-'+index" class="frame frame--thumb" @click="openModal(photo)">
        <img class="photo" :src="photo" :alt="`${project.name}-${index}`" loading="lazy" />
      </div>
    </div>

    <div class="photos photos--desktop d-none d-md-grid">
      <div class="frame frame--main-left" @click="openModal(project.img)">
        <img class="photo" :src="project.img" :alt="project.name" loading="lazy">
      </div>
      <div class="aside">
        <div v-for="(photo, index) in project.photos" :key="'d-'+index" class="frame frame--thumb" @click="openModal(photo)">
          <img class="photo" :src="photo" :alt="`${project.name}-${index}`" loading="lazy">
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

  .back-link {
    color: $gp-gray;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: $gp-red;
    }
  }

  h2 { color: $gp-red; }
  p  { text-align: justify; }

  .img-modal {
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    cursor: pointer;
  }
  .modal-content { width: 80%; height: 80%; overflow: hidden; }
  .img-modal img { width: 100%; height: 100%; object-fit: contain; }

  .photos-mobile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    align-items: start;
  }
  .photos-mobile .frame--main {
    grid-column: 1 / -1;
    aspect-ratio: 16 / 9;
  }
  .photos-mobile .frame--thumb { aspect-ratio: 3 / 2; }

  .photos--desktop {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    align-items: stretch;
  }

  .frame {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
    cursor: pointer;
  }
  .frame > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.3s;
    will-change: transform;
  }
  .frame:hover > img { transform: scale(1.05); }

  .frame--main-left {
    grid-column: 1;
    grid-row: 1 / span 2;
    height: 100%;
  }

  .aside {
    grid-column: 2;
    grid-row: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .aside .frame--thumb { aspect-ratio: 3 / 2; }
}
</style>
