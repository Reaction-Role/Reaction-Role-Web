<template>
    <div>
        <div class="columns is-multiline">

            <Video v-for="v in Videos" :key="v.id"
                :video="v"
                :author="Authors[v.snippet.channelId]" />

        </div>
        <div class="columns">
            <span class="column has-text-centered">
                Want your tutorial video featured here? Check out the
                <router-link to="FAQ" class="has-text-success">FAQ</router-link>
            for more info.</span>
        </div>
    </div>
</template>

<script>
import { Videos, Authors } from '@/assets/data/Videos.json';
import Video from './Video';

export default {
    name: 'Videos',
    data() {
        return {
            Videos,
            Authors,
        };
    },
    components: {
        Video,
    },
};
</script>
