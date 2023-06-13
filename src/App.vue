<script>
import axios from 'axios'
import ProjectCard from './components/ProjectCard.vue'

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            loading: true,
            projects: null,
            error: null,
            base_url: 'http://127.0.0.1:8000/',
            projects_API: 'api/projects',
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
        const url = this.base_url + this.projects_API
        this.getProject(url)

    }
}
</script>

<template>
    <section class="projects">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
                <div class="col" v-for="project in  projects ">

                    <ProjectCard :project="project"></ProjectCard>

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
