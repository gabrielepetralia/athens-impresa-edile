<script>
import TeamCard from '../partials/MemberCard.vue';

import teamData from '../../data/team-data.json';
import MemberCard from '../partials/MemberCard.vue';

export default {
  name: "Team",

  components: {
    MemberCard,
  }, 

  data() {
    return {
      members: teamData,
    };
  },
}
</script>

<template>
  <section id="team">
    <div class="gp-container">

      <h2 class="text-center mb-5">Team</h2>

      <div class="cards-container">
        <div v-for="(member, index) in members" :key="index" class="member-col">
          <MemberCard :member="member"/>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

section {
  background-color: $gp-gray;

  h2 {
    color: $gp-white;
  }

  p {
    font-size: 1.2rem;

    span {
      font-weight: 500;
    }
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .member-col {
      width: 100%;

      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
}

// media-query lg
@media screen and (min-width: 992px) {

  .cards-container {

    .member-col {
      width: calc(50% - 15px) !important;

      &:nth-child(3) {
        margin-bottom: 0 !important;
      }
    }
  }
}
</style>