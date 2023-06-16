<script>
export default {

}
</script>
<template>
  <div class="container-fluid">
    <div class="not_found text-center">
      <div class="special_text">
        <ul>
          <li>P</li>
          <li>A</li>
          <li>G</li>
          <li>E</li>
          <li>N</li>
          <li>O</li>
          <li>T</li>
          <li>F</li>
          <li>O</li>
          <li>U</li>
          <li>N</li>
          <li>D</li>
        </ul>
      </div>
      <router-link :to="{ name: 'home' }">
        <a class="btn btn-primary" role="button">Back Home</a>
      </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.container-fluid {
  height: 100vh;
  background-image: linear-gradient(#262626 50%, #1d55ce 100%);
  display: flex;
  justify-content: center;
  align-items: center;


  ul {
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3em;
    letter-spacing: 15px;
    text-shadow: none;
    display: flex;
  }

  li {
    font-size: 3em;
    animation: animate 1s infinite linear;
  }

  @keyframes animate {
    0% {
      color: #484848;
      text-shadow: none;
    }

    18% {
      color: #484848;
      text-shadow: none;
    }

    20% {
      color: #fff900;
      text-shadow: 0 0 7px #fff900, 0 0 20px #ff6c00;
    }

    30% {
      color: #484848;
      text-shadow: none;
    }

    35% {
      color: #fff900;
      text-shadow: 0 0 7px #fff900, 0 0 20px #ff6c00;
    }

    70% {
      color: #484848;
      text-shadow: none;
    }

    85% {
      color: #fff900;
      text-shadow: 0 0 7px #fff900, 0 0 20px #ff6c00;
    }

    90% {
      color: #484848;
      text-shadow: none;
    }

    100% {
      color: 484848;
      text-shadow: none;
    }
  }


  ul li:nth-child(1) {
    animation-delay: 1s;
  }

  ul li:nth-child(2) {
    animation-delay: 1.2s;
  }

  ul li:nth-child(3) {
    animation-delay: 1.4s;
  }

  ul li:nth-child(4) {
    animation-delay: 1.6s;
    margin-right: 7rem;

  }

  ul li:nth-child(5) {
    animation-delay: 1.8s;
  }

  ul li:nth-child(6) {
    animation-delay: 2s;
  }

  ul li:nth-child(7) {
    animation-delay: 2.2s;
    margin-right: 7rem;
  }

  ul li:nth-child(8) {
    animation-delay: 2.4s;

  }

  ul li:nth-child(9) {
    animation-delay: 2.6s;
  }

  ul li:nth-child(10) {
    animation-delay: 2.8s;
  }

  ul li:nth-child(11) {
    animation-delay: 3s;
  }

  ul li:nth-child(12) {
    animation-delay: 3.2s;
  }
}
</style>