<script>
export default {
  name: 'SocialCard',
  data() {
    return {
      linkedin_link: 'https://www.linkedin.com/in/daniel-oddo-45688b113',
      siteLink: 'https://github.com/Dan97O?tab=repositories',
      instagram_link: 'https://instagram.com/daniel.oddo',
      facebook_link: 'https://it-it.facebook.com/daniel.oddo'
    }
  },
}
</script>


<template>
  <div class="card_social">
    <span>Social</span>
    <a class="social-link" :href="linkedin_link">
      <img height="25" src="https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg" alt="">
    </a>
    <a class="social-link" :href="siteLink">
      <img height="25" src="https://www.vectorlogo.zone/logos/github/github-tile.svg" alt="">
    </a>
    <a class="social-link" :href="instagram_link">
      <img height="25" src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg" alt="">
    </a>
    <a class="social-link" :href="facebook_link">
      <img height="25" src="https://www.vectorlogo.zone/logos/facebook/facebook-tile.svg" alt="">
    </a>
  </div>
</template>


<style lang="scss" scoped>
.card_social img {
  height: 25px;
}

.card_social {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  height: 50px;
  width: 200px;
}

.card_social::before,
.card_social::after {
  position: absolute;
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  transition: 0.25s linear;
  z-index: 1;
}

.card_social::before {
  content: "";
  left: 0;
  justify-content: flex-end;
  background-color: #4d60b6;
}

.card_social::after {
  content: "";
  right: 0;
  justify-content: flex-start;
  background-color: #4453a6;
}

.card_social:hover {
  box-shadow: 8px 8px 10px 2px black;
  cursor: pointer;
}

.card_social:hover span {
  opacity: 0;
  z-index: -3;
}

.card_social:hover::before {
  opacity: 0.5;
  transform: translateY(-100%);
}

.card_social:hover::after {
  opacity: 0.5;
  transform: translateY(100%);
}

.card_social span {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: whitesmoke;
  font-size: 24px;
  font-weight: 700;
  opacity: 1;
  transition: opacity 0.25s;
  z-index: 2;
}

.card_social .social-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  color: whitesmoke;
  font-size: 24px;
  text-decoration: none;
  transition: 0.25s;
}

.card_social .social-link img {
  text-shadow: 1px 1px rgba(31, 74, 121, 0.7);
  transform: scale(1);
}

.card_social .social-link:hover {
  background-color: rgba(249, 244, 255, 0.774);
  animation: bounce_613 0.4s linear;
}

@keyframes bounce_613 {
  40% {
    transform: scale(1.4);
  }

  60% {
    transform: scale(0.8);
  }

  80% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>