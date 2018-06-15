<template>
    <div>
        TestSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    </div>
</template>

<script>
import Axios from 'axios';
// import { Line } from 'vue-chartjs';

export default {
    name: 'Statistics',
    data() {
        return {
            reaction_roles: null,
            difference: null,
            heartbeat: null,
        };
    },
    mounted() {
        Axios
            .get('https://api.reaction-role.com/stats')
            .then((response) => {
                this.reaction_roles = response.data.reaction_roles;
                this.difference = response.data.difference;
                this.heartbeat = response.data.heartbeat;
            })
            .catch(() => {
                // Test
            });
    },
    methods: {
        render() {
            
        },
    },
};
</script>
