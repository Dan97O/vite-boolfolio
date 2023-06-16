<script>
export default {

}
</script>
<template>
  <div class="container-fluid">
    <div class="not_found text-center">
      <h1 class="mb-5">Page not found</h1>
      <router-link :to="{ name: 'home' }">
        <a class="btn btn-primary" role="button">Back Home</a>
      </router-link>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.container-fluid {
  height: 100vh;
  background-image: linear-gradient(#262626 50%, #1d55ce 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.not_found {
  margin-top: 4rem;
  color: rgb(206, 219, 18);
}
</style>