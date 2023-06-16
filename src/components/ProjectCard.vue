<script>
export default {
  data() {
    return {
      max_text_length: 100,
      technologies: [],
      type: [],
      base_API: 'http://127.0.0.1:8000/',
      store: 'storage/'
    }
  },
  props: ['project'],
  methods: {
    truncateText(text) {
      if (text.length > this.max_text_length) {
        return text.slice(0, this.max_text_length)
      }
      return text
    },
  },
}
</script>


<template>
  <div class="card h-100 border-0">
    <img class="card-img-top" :src="base_API + store + project.cover_image" alt="">
    <div class="card-body">
      <h3 class="title card-title">{{ project.title }}</h3>
      <p class="info card-text">{{ truncateText(project.content) }}</p>
      <ul class="d-flex list-unstyled gap-1 flex-wrap m-0" v-if="project.technologies">
        <li class="badge bg-success d-flex align-items-center justify-content-center"
          v-for="technology in project.technologies">
          {{ technology.name }}
        </li>
      </ul>
      <div class="mt-auto">
        <router-link :to="{ name: 'single-project', params: { 'slug': project.slug } }">
          <a class="btn btn-primary" role="button">Read More</a>
        </router-link>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.card {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 8px 8px 10px 2px black;
}

.card-img-top {
  object-fit: cover;
  height: 250px;
  transition: filter 0.3s ease;
}

.card:hover .card-img-top {
  filter: brightness(70%);
}

.card-body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .card-body {
  opacity: 1;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.card-text {
  margin-bottom: 16px;
}

.btn {
  margin-top: 8px;
}
</style>

