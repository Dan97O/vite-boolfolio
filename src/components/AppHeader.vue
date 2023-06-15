<script>
export default {
  name: 'AppHeader'
}
</script>
<template>
  <header>
    <nav class="navbar bg-black navbar-expand-lg p-0 text-white py-3">
      <div class="container-fluid d-flex">
        <h3>My Portfolio</h3>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav">
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
}

a {
  color: white;
}

.nav-link:hover {
  color: gray;
}
</style>