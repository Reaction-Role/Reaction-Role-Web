<template>
    <div :id="slugify(title)" class="container is-fluid">
        <h1 class="subtitle">
            <span>{{ title }}</span>
            <b-tag v-if="tag" :type="tagType">{{ tag }}</b-tag>
        </h1>

        <p><slot></slot></p>

        <hr>
    </div>
</template>

<script>
export default {
    name: 'Message',
    props: {
        title: String,
        tag: String,
        tagType: {
            type: String,
            default: 'is-success',
        },
    },
    methods: {
        slugify(Text) {
            return Text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        },
    },
};
</script>
