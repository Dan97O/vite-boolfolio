<script>
import axios from 'axios'

export default {
  name: 'SingleProjectView',

  data() {
    return {
      project: null,
      loading: true,
      base_API: 'http://127.0.0.1:8000/'

    }
  },

  mounted() {
    console.log(this.$route)
    const url = this.base_API + 'api/projects/' + this.$route.params.slug;
    console.log(url);

    axios.get(url)
      .then(response => {
        console.log(response);
        if (response.data.success) {
          this.project = response.data.result
        }
        else {

          console.log(response.data.result);
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div v-if="project">
          <img :src="project.cover_image" alt="">
          <h1>{{ project.title }}</h1>
          <p>{{ project.content }}</p>
          <p>Date: {{ project.date_time }}</p>
          <nav class="pb-3">
            <a class="me-1 badge bg-secondary text-decoration-none" :href="project.site_link">Site Link</a>
            <a class=" badge bg-primary text-decoration-none" :href="project.source_code">Source Code</a>
          </nav>
          <p v-if="project.type">Type: {{ project.type.type }}</p>
          <ul v-if="project.technologies">
            <li v-for="technology in project.technologies">
              {{ technology.name }}
              <img :src="technology_image" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>