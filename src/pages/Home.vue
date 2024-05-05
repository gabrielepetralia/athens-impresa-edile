<script>
import Navbar from '../components/partials/Navbar.vue';

import Jumbotron from '../components/Jumbotron.vue';
import About from '../components/sections/About.vue';
import Projects from '../components/sections/Projects.vue';
import Team from '../components/sections/Team.vue';
import Contacts from '../components/sections/Contacts.vue';

export default {
  name: "Home",
  
  components : {
    Navbar,
    Jumbotron,
    About,
    Projects,
    Team,
    Contacts
  }
}
</script>

<template>
  <div class="d-none d-md-block">
    <Navbar/>
  </div>

  <div>
    <Jumbotron/>
    <About/>
    <Projects/>
    <Team/>
    <Contacts/>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

</style>