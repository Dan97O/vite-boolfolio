<script>
import axios from 'axios'
export default {
  name: 'SingleProjectView',
  data() {
    return {
      project: null,
      loading: true,
      base_API: 'http://127.0.0.1:8000/',
      store: 'storage/',
      showFullscreen: false,
    }
  },
  methods: {
    toggleFullscreen() {
      this.showFullscreen = !this.showFullscreen;
      if (this.showFullscreen) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = '';
      }
    },
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
          this.$router.push({ name: 'NotFound' })
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
    <div class="row mt-5">
      <div class="col-6 mt-3">
        <div v-if="project">
          <div class="img_project text-center py-3 position-relative">
            <img class=" img-fluid" height="600" :src="base_API + store + project.cover_image" alt=""
              @click="toggleFullscreen">
            <div class="eye">
              <i class="fa-solid fa-eye fa-beat"></i>
            </div>
          </div>
          <div class="fullscreen-overlay" v-if="showFullscreen" @click="toggleFullscreen">
            <div class="fullscreen-image-container">
              <img class="fullscreen-image" :src="base_API + store + project.cover_image" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 mt-4" v-if="project">
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
            <img :src="technology.image" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  background-image: linear-gradient(#262626 50%, #1d55ce 100%);
  height: calc(100vh - 48px);
  overflow-y: hidden;

  .img_project {
    position: relative;
    max-height: 600px;
    cursor: pointer;

    img {
      max-height: 600px;
      cursor: pointer;
      filter: brightness(100%);
      transition: filter 0.3s ease;
    }

    .eye {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgb(0, 0, 0);
      font-size: 24px;
      z-index: 500;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      img {
        filter: brightness(70%);
      }

      .eye {
        display: block;
        opacity: 1;
      }
    }
  }



  .fullscreen-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    cursor: pointer;
  }

  .fullscreen-image-container {
    max-width: 90%;
    max-height: 90%;
    overflow: auto;
  }

  .fullscreen-image {
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
}
</style>