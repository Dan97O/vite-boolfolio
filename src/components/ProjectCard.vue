<script>
export default {
  data() {
    return {
      max_text_length: 100,
      technologies: [],
      type: [],
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
  <div class="card h-100 shadow">
    <img class="card-img-top" :src="'storage/' + project.cover_image" alt="">
    <div class="card-body">
      <h3 class="card-title">{{ project.title }}</h3>
      <p class="card-text">{{ truncateText(project.content) }}</p>
      <div v-if="project.technologies || project.type">
        <p v-for="technology in project.technologies" :key="technology.id">
          Technology: {{ technology.name }}
        </p>
        <p v-if="project.type">Type: {{ project.type.type }}</p>
      </div>
      <p class="card-date">Date: {{ project.date_time }}</p>
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

