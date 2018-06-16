<template>
    <div>
        <h1 class="title">Heartbeat (24h)</h1>

        <Trend v-if="loaded" :data="heartbeat"
            :gradient="['#00c6ff', '#F0F', '#FF0']"
            auto-draw smooth></Trend>

        <h1 class="title">Reaction Roles (24h)</h1>

        <Trend v-if="loaded" :data="reaction_roles"
            :gradient="['#00c6ff', '#F0F', '#FF0']"
            auto-draw smooth></Trend>

        <h1 class="title">Difference (24h)</h1>

        <Trend v-if="loaded" :data="difference"
            :gradient="['#00c6ff', '#F0F', '#FF0']"
            auto-draw smooth></Trend>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'Statistics',
    data() {
        return {
            reaction_roles: null,
            difference: null,
            heartbeat: null,
            loaded: false,
        };
    },
    mounted() {
        Axios
            .get('https://api.reaction-role.com/stats')
            .then((response) => {
                this.reaction_roles = response.data.reaction_roles.map(e => e.y);
                this.difference = response.data.difference.map(e => e.y);
                this.heartbeat = response.data.heartbeat.map(e => e.y);
                this.loaded = true;
            })
            .catch(() => {
                // Test
            });
    },
};
</script>
