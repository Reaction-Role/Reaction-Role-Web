<template>
    <div>
        <Video
            title="Basic Setup"
            subtitle="1 Minute 32 Seconds"
            desc="One of the most basic role assignment setup"
            src="/static/video/basic_setup.mp4" />

        <Video
            title="Rules Enforcement Setup"
            subtitle="3 Minutes 59 Seconds"
            desc="Setup the ability to enforce the reading of rules before continuing"
            src="/static/video/read_rules_setup.mp4" />

        <Video
            title="Group Lock"
            subtitle="27 Seconds"
            desc="Demo of the Patron's feature: Group Locking"
            src="/static/video/group_lock.mp4" />
    </div>
</template>

<script>
import Video from './Video';

export default {
    name: 'Videos',
    components: {
        Video,
    },
};
</script>
