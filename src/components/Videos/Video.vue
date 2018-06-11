<template>
    <div class="columns">
        <div class="column is-3">
            <h2 class="title">
                {{ title }}
            </h2>
            <p class="subtitle has-text-grey-light">
                {{ subtitle }}
            </p>
            <div class="content is-medium">
                <p>
                    {{ desc }}
                </p>
            </div>
        </div>
        <div class="column is-8 is-offset-1">
            <video controls>
                <source :src="src">
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Video',
    props: {
        title: String,
        subtitle: String,
        desc: String,
        src: String,
    },
};
</script>
