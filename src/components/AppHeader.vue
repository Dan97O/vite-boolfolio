<script>
export default {
  name: 'AppHeader'
}
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-sm sticky-top bg-black text-white">
      <div class="container-fluid">
        <h3>My Portfolio</h3>
        <button class="navbar-toggler bg-light order-lg-2" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse order-lg-1" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-end">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ 'name': 'about' }" aria-current="page">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ 'name': 'contacts' }" aria-current="page">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>


<style lang="scss" scoped>
nav {
  position: relative;
  top: 0;
  position: fixed;
  width: 100%;
  height: 75px;
  z-index: 400;
  box-shadow: 12px 4px 10px -4px darkgray;
  background-image: linear-gradient(#000000 50%, #222121 100%);

}

a {
  color: white;
}

.nav-link:hover {
  color: gray;
  transform: scale(1.10);
  transition: transform 0.3s ease;
}
</style>