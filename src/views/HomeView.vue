<script>
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'
import PlaceHolder from '../components/PlaceHolder.vue';
import BannerTop from '../components/BannerTop.vue';


export default {
  name: 'HomeView',
  components: {
    ProjectCard,
    PlaceHolder,
    BannerTop
  },
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
          //console.log(this.projects);
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
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col">
          <BannerTop></BannerTop>
        </div>
      </div>
    </div>
    <div class="container-fluid px-3">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 g-3 pb-5">
        <!--  <PlaceHolder v-if="loading" :loading="loading"></PlaceHolder> -->
        <div class="col mb-5" v-for="project in projects">
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
  background-image: url('https://res.cloudinary.com/practicaldev/image/fetch/s--StRkI7Ze--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://codesandtags.github.io/blog/static/0c42bdee6c2a7e213cacc2b33ac3039c/a0304/hero.webp');
  background-attachment: fixed;
  background-position: top;
  background-size: cover;
}
</style>