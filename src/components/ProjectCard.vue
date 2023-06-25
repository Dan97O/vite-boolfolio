<script>
export default {
  data() {
    return {
      max_text_length: 100,
      technologies: [],
      type: [],
      base_API: 'https://provaportfolio.danieloddo.com/',
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
  <div id="project_card" class="card h-100 border-0">
    <img class="card-img-top" :src="base_API + store + project.cover_image" alt="">
    <div class="card-body">
      <h3 class="title card-title">{{ project.title }}</h3>
      <p class="info card-text">{{ truncateText(project.content) }}</p>
      <ul class="d-flex list-unstyled gap-1 flex-wrap m-0" v-if="project.technologies">
        <li class="badge bg-success d-flex align-items-center justify-content-center"
          v-for="technology in project.technologies">
          {{ technology.name }}
        </li>
      </ul>
      <router-link class="mt-auto" :to="{ name: 'single-project', params: { 'slug': project.slug } }">
        <a class="btn" role="button">
          <strong>
            READ MORE
          </strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </a>
      </router-link>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 8px 8px 10px 2px black;
}

.card:hover {
  transform: scale(1.04);
  transition: transform 0.3s ease;
}

.card-img-top {
  object-fit: cover;
  height: 350px;
  transition: filter 0.3s ease;
  object-position: top;
}

.card:hover .card-img-top {
  filter: brightness(70%);
}

.card-body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .card-body {
  opacity: 1;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.card-text {
  margin-bottom: 2rem;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 2rem;
  margin-top: 8px;
  list-style: none;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #1815b9 45%, #c6c92d 67%, #0044ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
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
  background: rgba(94, 83, 254, 0.636);
}

.circle:nth-of-type(2) {
  background: rgba(234, 186, 81, 0.704);
}

.btn:hover #container-stars {
  z-index: 1;
  background-color: #212121;
}

.btn:hover {
  transform: scale(1.1)
}

.btn:active {
  border: double 4px #6cff31;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.btn:active .circle {
  background: #53cefe;
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

