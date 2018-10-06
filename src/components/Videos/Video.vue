<template>
    <div class="column is-4">
        <div class="card">
            <div class="card-image embed-container">
                <iframe :src="GetVideoLink()"></iframe>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img :src="author.snippet.thumbnails.default.url"
                                :alt="video.snippet.channelTitle">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{ video.snippet.title }}</p>
                        <p class="subtitle is-6">
                            <span>By</span>
                            <a :href="GetChannelLink()" target="_blank">
                                {{ video.snippet.channelTitle }}
                            </a>
                        </p>
                    </div>
                </div>
                <div class="content">
                    {{ video.snippet.description.substr(0, 80) + '...' }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Video',
    props: {
        video: Object,
        author: Object,
    },
    methods: {
        GetVideoLink() {
            return `https://www.youtube.com/embed/${this.video.id}`;
        },
        GetChannelLink() {
            return `https://www.youtube.com/channel/${this.author.id}`;
        },
    },
};
</script>

<style scoped>
.card {
    height: 100%;
}
.embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    height: auto;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
