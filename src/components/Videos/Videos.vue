<template>
    <div>
        <div class="columns is-multiline">
            <Video
                title="Basic Setup"
                desc="One of the most basic role assignment setup"
                src="/static/video/basic_setup.mp4" />

            <Video
                title="Rules Enforcement Setup"
                desc="Setup the ability to enforce the reading of rules before continuing"
                src="/static/video/read_rules_setup.mp4" />

            <Video
                title="Group Lock"
                desc="Demonstration of Group Locking"
                src="/static/video/group_lock.mp4" />
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
import VideoAuthors from '@/assets/data/VideoAuthors.json';
import Video from './Video';

export default {
    name: 'Videos',
    data() {
        return {
            VideoAuthors,
        };
    },
    methods: {
        a(p) {
            return this.VideoAuthors[p];
        },
    },
    components: {
        Video,
    },
};
</script>
