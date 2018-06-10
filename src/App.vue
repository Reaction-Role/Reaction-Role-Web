<template>
    <section id="app" class="hero is-fullheight">
        <div class="hero-head">
            <nav class="navbar" role="navigation" aria-label="Navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <router-link to="/" class="navbar-item">
                            <img src="/static/favicon/favicon.png">
                        </router-link>
                        <button class="button navbar-burger"
                            @click="navMenuActive = !navMenuActive">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div class="navbar-menu" :class="{'is-active': navMenuActive}">
                        <div class="navbar-start">
                            <router-link to="/Documentation" class="navbar-item">
                                <b-icon icon="file-alt" pack="far"></b-icon>&nbsp;
                                <span>Documentation</span>
                            </router-link>
                            <router-link to="/faq" class="navbar-item">
                                <b-icon icon="question-circle" pack="far"></b-icon>&nbsp;
                                <span>FAQ</span>
                            </router-link>
                        </div>
                        <div class="navbar-end">
                            <a href="https://discordbots.org/bot/441751906428256277/vote" class="navbar-item" target="_blank">
                                <b-icon icon="chevron-up"></b-icon>&nbsp;
                                <span>Vote</span>
                            </a>
                            <a href="https://discord.gg/TZ4BsrQ" class="navbar-item" target="_blank">
                                <b-icon icon="discord" pack="fab"></b-icon>&nbsp;
                                <span>Support Server</span>
                            </a>
                            <a href="https://www.patreon.com/RumbleFrog" class="navbar-item patreon-button" target="_blank">
                                <img src="/static/img/become_a_patron_button@2x.png">
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
        <div class="hero-footer">
            <div class="container">
                <footer class="footer">
                    <div class="content has-text-centered">
                        Constructed and curated by <a href="https://keybase.io/rumblefrog" target="_blank">Fishy!#6593</a>
                    </div>
                </footer>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Reaction-Role',
    data() {
        return {
            navMenuActive: false,
        };
    },
};
</script>

<style lang="sass">
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

<style>
.footer {
    background-color: inherit;
}
</style>

