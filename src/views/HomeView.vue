<script>
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'

export default {
  name: 'HomeView',
  components: { ProjectCard },
  data() {
    return {
      loading: true,
      projects: [],
      error: null,
      base_url: "http://127.0.0.1:8000/",
      projects_API: "api/projects",
      siteLink: 'https://github.com/Dan97O?tab=repositories'
    };
  },
  methods: {
    getProject(url) {
      axios
        .get(url)
        .then(response => {
          //console.log(response);
          this.projects = response.data.projects.data;
          console.log(this.projects);

          this.loading = false;
        })
        .catch(error => {
          //console.log(error);
          this.error = error.message;
        });
    },
    prevPage(path) {
      console.log(path);
      this.getProject(path);
    },
    nextPage(path) {
      this.getProject(path);
    },
  },
  mounted() {
    const url = this.base_url + this.projects_API;
    this.getProject(url);
  },

}
</script>
<template>
  <section class="projects py-5">
    <div class="container-fluid">
      <div class="p-5 mb-4 bg-transparent text-light rounded-3">
        <div class="py-3">
          <h1 class="display-5 fw-bold">Portfolio Daniel</h1>
          <p class="col-md-8 fs-4">Benvenuti nel mio Portfolio</p>
          <a class="btn btn-primary me-2" :href="siteLink" role="button">Visit Site</a>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4 pb-5">
        <div class="col" v-for="project in projects">
          <ProjectCard :project="project"></ProjectCard>
        </div>
      </div>
    </div>


    <div class="container d-flex justify-content-end mt-3">
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item">
            <button class="page-link" aria-label="Previous" v-if="projects.prev_page_url"
              @click="prevPage(projects.prev_page_url)">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li class="page-item">
            <button class="page-link" aria-label="Next" v-if="projects.next_page_url"
              @click="nextPage(projects.next_page_url)">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>


  </section>
</template>


<style lang="scss" scoped>
.projects {
  padding-top: 3rem;
  background-image: linear-gradient(#262626 50%, #1d55ce 100%);
}
</style>