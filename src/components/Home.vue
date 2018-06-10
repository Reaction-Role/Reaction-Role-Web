<template>
    <div id="reaction-role-container" class="columns is-vcentered">
        <div class="column is-offset-2">
            <article class="media is-centered is-vcentered">
                <figure class="media-left">
                    <img src="/static/favicon/favicon.png"
                    height="256"
                    width="256"
                    class="reaction-role">
                </figure>
                <div class="media-content">
                    <h1 class="title">Reaction Role</h1>
                    <h2 class="subtitle">
                        Clean role management using reactions!
                        Users may join/leave roles just by reacting.
                    </h2>
                    <div id="action_buttons">
                        <button class="button is-info is-large">
                            <b-icon icon="robot"></b-icon>
                            <span>Invite To Server</span>
                        </button>
                        <router-link to="/documentation"
                        class="button is-large is-outlined is-dark">
                            <b-icon icon="file-alt" pack="far"></b-icon>
                            <span>View Docs</span>
                        </router-link>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style scoped>
.reaction-role {
    -webkit-animation: mover 1.5s infinite alternate;
    animation: mover 1.5s infinite alternate;
}
#reaction-role-container {
    margin-top: 10%;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-30px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-30px); }
}
</style>

