<script>
export default {
  name: "MemberCard",

   props: {
    member: Object,
  },
}
</script>

<template>
  <div class="team-card d-flex flex-column align-items-center">
    <!-- <div class="member-img d-flex justify-content-center align-items-center mb-3">
      <img :src="member.img" alt="">
    </div> -->

    <div class="d-flex justify-content-center align-items-center mb-4">
      <i class="fa-solid member-icon" :class="member.icon"></i>
    </div>

    <span class="member-name mb-1">{{ member.name }}</span>
    <span class="member-role mb-3">{{ member.role }}</span>
    <p class="description mb-0" v-html="member.description"></p>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

.team-card {
  text-align: center;
  color: $gp-gray;
  background-color: $gp-white;
  padding: 60px;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.2);

  .member-img {
    border-radius: 50%;
    // border: 4px solid $gp-red;
    height: 200px;
    width: 200px;
    overflow: hidden;

    img {
      height: 100%;
    }
  }

  .member-name {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .member-role {
    color: $gp-red;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .member-icon {
    font-size: 70px;
  }
}
</style>