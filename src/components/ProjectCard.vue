<script>
export default {
  props: ['project']
}
</script>

<template>
  <div class="card h-100">
    <img class="card-img-top" :src="project.cover_image" alt="">
    <div class="card-body">
      <h3>
        {{ project.title }}
      </h3>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>

