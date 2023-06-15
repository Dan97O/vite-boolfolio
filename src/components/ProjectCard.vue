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
  <div class="container-fluid"></div>
  <div class="card h-100 shadow">
    <img class="card-img-top" :src="base_API + store + project.cover_image" alt="">
    <div class="card-body">
      <h3 class="title card-title">{{ project.title }}</h3>
      <p class="info card-text">{{ truncateText(project.content) }}</p>
      <p v-if="project.type">Type: {{ project.type.type }}</p>
      Technology :
      <ul class="d-flex list-unstyled gap-3 flex-wrap" v-if="project.technologies">
        <li class="badge bg-success d-flex align-items-center justify-content-center"
          v-for="technology in project.technologies">
          {{ technology.name }}
          <img :src="technology_image" alt="">
        </li>
      </ul>
      <p class="card-date">Date: {{ project.date_time }}</p>
      <router-link :to="{ name: 'single-project', params: { 'slug': project.slug } }">Read more</router-link>
      <nav>
        <a class="btn btn-primary me-2" :href="project.site_link" role="button">Visit Site</a>
        <a class="btn btn-secondary" :href="project.source_code" role="button">Source Code</a>
      </nav>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;

}

.card-img-top {
  object-fit: cover;
  height: 200px;
}

.card-body {
  padding: 16px;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.card-text {
  margin-bottom: 16px;
}

.card-date {
  margin-bottom: 8px;
}

.btn {
  margin-top: 8px;
}
</style>

