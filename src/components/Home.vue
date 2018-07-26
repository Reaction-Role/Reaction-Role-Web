<template>
    <div class="is-vcentered animated fadeInDown">
        <div id="reaction-role-container" class="columns">
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
                            <a id="invite_btn"
                            href="https://discordapp.com/oauth2/authorize?client_id=441751906428256277&permissions=8&scope=bot"
                            target="_blank" class="button is-info is-large">
                                <b-icon icon="robot"></b-icon>
                                <span>Invite To Server</span>
                            </a>
                            <router-link id="doc_btn"
                            to="/Documentation"
                            class="button is-large is-outlined is-dark">
                                <b-icon icon="file-alt" pack="far"></b-icon>
                                <span>View Docs</span>
                            </router-link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div class="column is-7 container sponsor is-centered has-text-centered">
            <h1 class="title">Patreon Supporters</h1>
            <p class="sponsor-desc is-size-5">
                Through donations, and sponsorship, you allow Reaction Role to blossom.
                Your donation contributes directly to the hosting cost, and the development effort.
                Without these individuals, the project wouldn't have made it this far.
            </p>
            <h2 class="title sponsor-title">Sponsor</h2>
            <div>
                <a href="#">
                    <img src="~@/assets/img/sponsor.png">
                </a>
            </div>
            <h2 class="title sponsor-title">Patrons</h2>
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
    margin-top: 30vh;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-30px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-30px); }
}
.sponsor-title {
    margin: 1.5em 0 1em;
    font-size: 2rem;
}
.sponsor-desc {
    margin-bottom: 1em;
}
.sponsor {
    padding: 5em 1em;
}
</style>

