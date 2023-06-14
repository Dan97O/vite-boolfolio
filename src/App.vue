<script>


export default {
    components: {

    },

}
</script>

<template>
    <header>
        <nav class="nav justify-content-center">
            <router-link class="nav-link" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
            <router-link class="nav-link" :to="{ 'name': 'about' }" aria-current="page">About</router-link>
            <router-link class="nav-link" :to="{ 'name': 'contacts' }" aria-current="page">Contact</router-link>
        </nav>
    </header>
    <router-view></router-view>
    <!--  <HomeView></HomeView> -->
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
