<template>
    <tr>
        <td>{{ name }}</td>
        <td><router-link :to="typeRef">{{ type }}</router-link></td>
        <td><b-icon icon="check" v-if="!opt"></b-icon></td>
        <td>{{ desc }}</td>
    </tr>
</template>

<script>
export default {
    name: 'ParamRow',
    props: {
        name: String,
        type: String,
        typeRef: String,
        opt: {
            type: Boolean,
            default: false,
        },
        desc: String,
    },
};
</script>
