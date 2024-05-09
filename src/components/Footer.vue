<script>

export default {
  name: "Footer"
}
</script>

<template>
  <footer>
    <div class="d-flex align-items-center justify-content-center h-100">
      <!-- <h5>Athens Cooperativa Currenti</h5>
      <p>Piazza P. Giammaria N°1 - 98035 Giardini Naxos (ME)</p>
      <p>Mail: athens.cooperativa@pec.it</p>
      <p>Cell: +39 3201616530</p>
      <p>P. Iva: 03680950833</p> -->
      <p class="copyright mb-0">&copy;2024 <em>by</em> <span>Athens Cooperativa Currenti</span></p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

footer {
  color: $gp-white;
  background-color: $gp-gray;
  font-weight: 300;
  height: 70px;

  .copyright {
    font-size: 0.9rem;

    span {
      font-weight: 500;
    } 
  }

}

</style>