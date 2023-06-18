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
          <a :href="siteLink" class="btn" type="button">
            <strong>
              Visit Site
            </strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </a>
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

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 3rem;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #FE53BB 45%, #8F51EA 67%, #0044ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 8px 8px 10px 2px black;

}

#container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
}

strong {
  z-index: 2;
  font-size: 12px;
  letter-spacing: 5px;
  color: #FFFFFF;
  text-shadow: 0 0 4px white;
}

#glow {
  position: absolute;
  display: flex;
  width: 12rem;
}

.circle {
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulse_3011 4s infinite;
  z-index: -1;
}

.circle:nth-of-type(1) {
  background: rgba(254, 83, 186, 0.636);
}

.circle:nth-of-type(2) {
  background: rgba(142, 81, 234, 0.704);
}

.btn:hover #container-stars {
  z-index: 1;
  background-color: #212121;
}

.btn:hover {
  transform: scale(1.1)
}

.btn:active {
  border: double 4px #FE53BB;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.btn:active .circle {
  background: #FE53BB;
}

#stars {
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
}

#stars::after {
  content: "";
  position: absolute;
  top: -10rem;
  left: -100rem;
  width: 100%;
  height: 100%;
  animation: animStarRotate 90s linear infinite;
}

#stars::after {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
}

#stars::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 60s linear infinite;
}

#stars::before {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>