<script>
import axios from 'axios'
import TextPortfolio from '../components/TextPortfolio.vue'
export default {
  name: 'AboutView',
  components: {
    TextPortfolio,
  },
  data() {
    return {
      project: null,
      loading: true,
      technologies: [],
      TechnologiesPath: "api/technologies",
      base_API: 'http://127.0.0.1:8000/',
      store: 'storage/',
      linkedin_link: 'https://www.linkedin.com/in/daniel-oddo-45688b113',
      siteLink: 'https://github.com/Dan97O?tab=repositories',
      instagram_link: 'https://instagram.com/daniel.oddo',
      facebook_link: 'https://it-it.facebook.com/daniel.oddo'
    }
  },
  methods: {
    getTechnologies(url) {
      axios
        .get(url)
        .then((response) => {
          this.loading = false;
          this.technologies = response.data.technologies
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, mounted() {
    this.getTechnologies(this.base_API + this.TechnologiesPath)
  }
}
</script>

<template>
  <div class="my_container">
    <div class="container mt-5">
      <div class="row row-cols-sm-4 row-cols-md-3 row-cols-lg-2">
        <div class="card w-100 mt-5 bg-transparent">
          <div class="row no-gutters">
            <div class="col-6 d-flex align-items-center d-none d-lg-block">
              <img
                src="https://camo.githubusercontent.com/c7e2ca28de4726d848194ebbb60d6f91ff1188a781fb370e0aa8dab942cc9c50/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313637302f312a5a53566d57476363317765454e6230536861775778772e676966"
                alt="" class="card-img img-fluid ">
            </div>
            <div class="col-12 col-lg-6">
              <TextPortfolio></TextPortfolio>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-4 text-white">
      <div class="row">
        <div class="col pb-5">
          <h4 class="text-center">MY SKILLS:</h4>
          <ul class="d-flex list-unstyled flex-wrap justify-content-center">
            <li class="technology my-3" v-for="technology in technologies">
              <div class="me-5 my_card card bg-transparent text-white">
                <img class="text-center card-img-top" style="width: 100px; height: 100px;"
                  :src="'http://127.0.0.1:8000/storage/public/' + technology.image" alt="">
                <p class="text-center"> <strong>{{ technology.name }} </strong> </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>




<style lang="scss" scoped>
.my_container {
  .card {
    box-shadow: 8px 8px 10px 2px black;
  }

  .my_card:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
}
</style>