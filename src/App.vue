<script>
import axios from 'axios'
import HelloWorld from './components/HelloWorld.vue'

export default {
    components: {
        HelloWorld,
    },
    data() {
        return {
            loading: true,
            projects: null,
            error: null,
            base_API: 'http://127.0.0.1:8000/',
            projects_path: 'api/projects',
        }
    },
    methods: {
        getProject(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.projects = response.data.projects
                    this.loading = false
                })
                .catch(error => {
                    console.log(error);
                    this.error = error.message
                })
        },
    },
    mounted() {
        const url = this.base_API + this.projects_path

        this.getProject(url)

    }
}
</script>

<template>
    <section class="vue-home">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex flex-column justify-content-center align-items-center vh-100">
                    <div class="logos">
                        <a href="https://vitejs.dev" target="_blank">
                            <img src="/vite.svg" class="logo" alt="Vite logo" />
                        </a>
                        <a href="https://vuejs.org/" target="_blank">
                            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
                        </a>
                    </div>
                    <HelloWorld />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';

.vue-home {
    color: #2c3e50;
    background: #181818;
    transition: color 0.5s, background-color 0.5s;
    line-height: 1.6;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
