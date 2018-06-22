<template>
    <div class="column is-4">
        <div class="card">
            <div class="card-image">
                <video controls>
                    <source :src="src">
                </video>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img :src="author.avatar_url" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{ title }}</p>
                        <p class="subtitle is-6">By {{ author.name }}</p>
                    </div>
                </div>
                <div class="content">
                    {{ desc }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Video',
    props: {
        title: String,
        author: {
            type: Object,
            default() {
                return {
                    name: 'Fishy!',
                    avatar_url: 'https://cdn.discordapp.com/avatars/105122038586286080/d64cb41df894db5471f6e54bf21562d8.png?size=64',
                };
            },
        },
        desc: String,
        src: String,
    },
};
</script>

<style scoped>
.card {
    height: 100%;
}
</style>
