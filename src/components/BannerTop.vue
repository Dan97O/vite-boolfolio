<script>
export default {
  name: 'BannerTop',
  data() {
    return {
      siteLink: 'https://github.com/Dan97O?tab=repositories'
    };
  },
}
</script>
<template>
  <div class="banner py-5 bg-transparent text-light rounded-3">
    <div class="py-3">
      <div class="line_block">
        <div class="title">
          <span class="block"></span>
          <div class="special_text ps-3">
            <ul>
              <li>H</li>
              <li>E</li>
              <li>L</li>
              <li>L</li>
              <li>O</li>
            </ul>
          </div>
        </div>
        <div class="advance">
          <div class="block"></div>
          <h3 class="ps-3">I am Daniel</h3>
        </div>
        <div class="advance_second">
          <div class="block"></div>
          <h3 class="ps-3">Welcome to my portfolio</h3>
        </div>
        <div class="subtitle">
          <h3 class="carousel">
            <div class="card">
              <span class="text-white">Developer.</span>
              <div>
                <ul class="flip3 p-0">
                  <li>Front-End</li>
                  <li>Web</li>
                  <li>Back-End</li>
                </ul>
              </div>
            </div>
          </h3>
        </div>
      </div>
      <div class=" d-flex justify-content-center mt-5">
        <a :href="siteLink" class="btn" type="button">
          <strong>
            Visit Site GitHub
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
  </div>
</template>



<style lang="scss" scoped>
.banner {
  height: calc(100vh - 48px);
}

.title {
  width: 100%;
  position: relative;
  display: flex;
  height: 100px;
  margin-top: 10px;

  .block {
    width: 0%;
    height: inherit;
    background-image: linear-gradient(#262626 10%, #1d55ce 100%);
    position: absolute;
    animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
    animation-delay: 1s;
    display: flex;
    border-radius: 20px;
  }

}

.special_text {
  ul {
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3em;
    letter-spacing: 15px;
    text-shadow: none;
    display: flex;
    padding: 0;
  }

  li {
    font-size: 5rem;
    animation: animate 2.1s infinite linear;
    animation-delay: 2.1s;
    opacity: 0;
    font-size: 70px;
    color: #0b2d77;
    font-weight: bolder;
  }

  @keyframes animate {
    0% {
      color: #1d55ce;
      text-shadow: 0 0 7px #1d55ce, 0 0 20px #ffd900;
      opacity: 1;
    }

    18% {
      color: #2a86ff;
      text-shadow: none;
      opacity: 1;
    }

    20% {
      color: #1d55ce;
      text-shadow: 0 0 7px #1d55ce, 0 0 20px #ffd900;
      opacity: 1;
    }

    30% {
      color: #2a86ff;
      text-shadow: none;
      opacity: 1;
    }

    35% {
      color: #1d55ce;
      text-shadow: 0 0 7px #1d55ce, 0 0 20px #ffd900;
      opacity: 1;
    }

    70% {
      color: #2a86ff;
      text-shadow: none;
      opacity: 1;
    }

    85% {
      color: #1d55ce;
      text-shadow: 0 0 7px #1d55ce, 0 0 20px #ffd900;
      opacity: 1;
    }

    90% {
      color: #ff9408;
      text-shadow: none;
      opacity: 1;
    }

    100% {
      color: #1d55ce;
      text-shadow: 0 0 7px #1d55ce, 0 0 20px #ffd900;
      opacity: 1;
    }
  }


  ul li:nth-child(1) {
    animation-delay: 2.2s;
  }

  ul li:nth-child(2) {
    animation-delay: 2.4s;
  }

  ul li:nth-child(3) {
    animation-delay: 2.6s;
  }

  ul li:nth-child(4) {
    animation-delay: 2.8s;

  }

  ul li:nth-child(5) {
    animation-delay: 3s;
  }

}


.advance {
  width: 100%;
  position: relative;
  display: flex;
  //align-items: center;
  height: 100px;
  margin-top: 2rem;

  .block {
    width: 0%;
    height: inherit;
    background-image: linear-gradient(#262626 10%, #1d55ce 100%);
    position: absolute;
    animation: secBlock 2.2s cubic-bezier(.74, .06, .4, .92) forwards;
    animation-delay: 2.2s;
    display: flex;
    border-radius: 20px;

  }

  h3 {
    animation: secFadeIn 2.2s forwards;
    animation-delay: 3.7s;
    opacity: 0;
    font-size: 4rem;
  }
}

.advance_second {
  width: 100%;
  position: relative;
  display: flex;
  height: 100px;
  margin-top: 10px;

  .block {
    width: 0%;
    height: inherit;
    background-image: linear-gradient(#262626 10%, #1d55ce 100%);
    position: absolute;
    animation: secBlock 2.2s cubic-bezier(.74, .06, .4, .92) forwards;
    animation-delay: 2.2s;
    display: flex;
    border-radius: 20px;

  }

  h3 {
    animation: secFadeIn 2.2s forwards;
    animation-delay: 3.7s;
    opacity: 0;
    font-size: 4rem;
  }
}


.carousel {
  opacity: 0;
  animation: secFadeIn 2s forwards;
  animation-delay: 4s;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  font-size: 4rem;
  color: #eee;
  padding: 3rem 0;
  height: 100px;

  .card {
    display: flex;
    flex-direction: row-reverse;
    background-color: #1d55ce81;
    padding: 0 2rem;
    border-radius: 25px;
  }

  div {
    text-align: end;
    overflow: hidden;
    position: relative;
    float: left;
    height: 100px;
    padding-top: 10px;
    margin-top: -10px;

    li {
      color: #ff9408;
      height: 45px;
      margin-bottom: 45px;
      display: block;
    }
  }
}

.flip3 {
  animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}

@keyframes flip3 {
  0% {
    margin-top: -270px;
  }

  5% {
    margin-top: -180px;
  }

  33% {
    margin-top: -180px;
  }

  38% {
    margin-top: -90px;
  }

  66% {
    margin-top: -90px;
  }

  71% {
    margin-top: 0px;
  }

  99.99% {
    margin-top: 0px;
  }

  100% {
    margin-top: -270px;
  }
}

@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;

  }

  50% {
    width: 100%;
    left: 0;

  }

  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;

  }

  50% {
    width: 100%;
    left: 0;

  }

  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: white;
    border: 0px solid #ddd;
    opacity: 0;
  }

  50% {
    width: 20px;
    height: 20px;
    background: white;
    opacity: 1;
    bottom: 60px;
  }

  65% {
    width: 17px;
    height: 17px;
    bottom: 0px;
    width: 30px
  }

  80% {
    width: 20px;
    height: 20px;
    bottom: 35px
  }

  100% {
    width: 17px;
    height: 17px;
    background: rgb(65, 38, 38);
    border: 0px solid #222;
    bottom: 28px;

  }
}

@keyframes secFadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 3rem;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #2927bd 10%, #1d10d6 45%, #232ecc 67%, #0044ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 8px 8px 10px 2px black;
  margin-top: 7rem;
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