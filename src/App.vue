<script>
import AppHeader from './components/AppHeader.vue';
import HomeView from './views/HomeView.vue';

export default {
    components: {
        AppHeader,
        HomeView
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <router-view></router-view>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
