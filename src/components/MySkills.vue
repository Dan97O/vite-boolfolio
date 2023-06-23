<script>
import axios from 'axios'

export default {
  name: 'MySkills',

  data() {
    return {
      technologies: [],
      TechnologiesPath: "api/technologies",
      base_API: 'http://127.0.0.1:8000/',
      store: 'storage/',
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
    },

  }, mounted() {
    this.getTechnologies(this.base_API + this.TechnologiesPath)
  }
}
</script>

<template>
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
</template>


<style lang="scss" scoped>
.my_container {
  .card {
    box-shadow: 8px 8px 10px 2px black;
  }

  .my_card:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
    cursor: pointer;
  }
}
</style>