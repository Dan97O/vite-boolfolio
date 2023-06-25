<script>
export default {
  name: 'PlaceHolder',
  data() {
    return {
      loading: true,
    }
  },
}
</script>
<template>
  <div class="d-flex gap-3">
    <div class="col-md-12" v-for="n in 3">
      <div class="card" aria-hidden="true">
        <img height="150" src="" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card {
  border-radius: 20px;
}
</style>