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
                desc="Demo of the Patron's feature: Group Locking"
                src="/static/video/group_lock.mp4" />

            <Video
                title="Your Video"
                desc="If you want your Reaction Role tutorials featured here,
                check out FAQ page for info"
                src="/static/video/holder.mp4"
                :author="a('holder')" />
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
