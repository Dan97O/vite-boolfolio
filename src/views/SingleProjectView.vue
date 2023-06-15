<script>
import axios from 'axios'


export default {
  name: 'SingleProjectView',

  data() {
    return {
      project: null,
      loading: true,
      base_API: 'http://127.0.0.1:8000/',
      store: 'storage/'

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
        } else {
          //console.log(router);
          this.$router.push({ name: 'not-found' })
          //console.log(response.data.result);
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<template>
  <div class="container-fluid text-white mt-5">
    <div class="row">
      <div class="col mt-3">
        <div v-if="project">
          <div class="text-center py-3">
            <img height="600" :src="base_API + store + project.cover_image" alt="">
          </div>
          <h1>{{ project.title }}</h1>
          <p>{{ project.content }}</p>
          <p>Date: {{ project.date_time }}</p>
          <nav class="pb-3">
            <a class="me-1 badge bg-secondary text-decoration-none" :href="project.site_link">Site Link</a>
            <a class=" badge bg-primary text-decoration-none" :href="project.source_code">Source Code</a>
          </nav>
          <p v-if="project.type">Type: {{ project.type.type }}</p>
          Technology :
          <ul class="d-flex list-unstyled gap-3" v-if="project.technologies">
            <li class="badge bg-success d-flex align-items-center justify-content-center"
              v-for="technology in project.technologies">
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