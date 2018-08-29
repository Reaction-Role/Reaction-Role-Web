<template>
    <section id="app" class="hero is-sea is-fullheight">
        <div class="hero-head">
            <nav class="navbar" role="navigation" aria-label="Navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <router-link to="/" class="navbar-item">
                            <img src="/static/favicon/favicon.png">
                        </router-link>
                        <button class="button is-dark navbar-burger"
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
                            <router-link to="/Videos" class="navbar-item">
                                <b-icon icon="play-circle" pack="far"></b-icon>&nbsp;
                                <span>Videos</span>
                            </router-link>
                            <router-link to="/FAQ" class="navbar-item">
                                <b-icon icon="question-circle" pack="far"></b-icon>&nbsp;
                                <span>FAQ</span>
                            </router-link>
                            <div class="navbar-item has-dropdown is-hoverable">
                                <div class="navbar-link">
                                    <span>Misc</span>
                                </div>
                                <div class="navbar-dropdown">
                                    <router-link to="/Trends" class="navbar-item">
                                        <b-icon icon="chart-bar" pack="far"></b-icon>&nbsp;
                                        <span>Meaningless Trends</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="navbar-end">
                            <a href="https://discordbots.org/bot/441751906428256277/vote" class="navbar-item" target="_blank">
                                <b-icon icon="chevron-up"></b-icon>&nbsp;
                                <span>Vote</span>
                            </a>
                            <a href="https://discord.gg/TZ4BsrQ" class="navbar-item" target="_blank">
                                <b-icon icon="discord" pack="fab"></b-icon>&nbsp;
                                <span>Our Server</span>
                            </a>
                            <a href="https://www.patreon.com/RumbleFrog" class="navbar-item patreon-button" target="_blank">
                                <img src="/static/img/become_a_patron_button.png">
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container">
                <keep-alive><router-view></router-view></keep-alive>
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

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #06FFFF;
$primary-invert: findColorInvert($primary);

$sea: #141A2E;
$sea-invert: findColorInvert($sea);

$light-sea: #1C2237;
$light-sea-invert: findColorInvert($light-sea);

$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "sea": ($sea, $sea-invert),
    "light-sea": ($light-sea, $light-sea-invert),
);

$background: $sea;
$link: $white;

$family-sans-serif: "Montserrat", sans-serif;

$family-primary: $family-sans-serif;

$navbar-background-color: $light-sea;
$navbar-item-hover-background-color: $sea;
$navbar-item-active-color: $sea;
$navbar-dropdown-background-color: $light-sea;

$box-color: $light-sea-invert;
$box-background-color: $light-sea;

$card-color: $light-sea-invert;
$card-header-color: $light-sea-invert;
$card-background-color: $light-sea;

$content-heading-color: $light-sea-invert;
$content-table-cell-heading-color: $light-sea-invert;
$content-table-head-cell-color: $light-sea-invert;
$content-table-foot-cell-color: $light-sea-invert;

$menu-item-color: $light-sea-invert;
$menu-item-hover-background-color: $light-sea;
$menu-item-active-background-color: $light-sea;

$timeline-marker-color: $light-sea;

$table-color: $light-sea-invert;
$table-background-color: $light-sea;
$table-cell-heading-color: $light-sea-invert;
$table-head-cell-color: $light-sea-invert;
$table-foot-cell-color: $light-sea-invert;
$table-row-hover-background-color: $sea;

$code-background: $light-sea;

@import "~bulma";
@import "~bulma-extensions/bulma-timeline/src/sass/index";
@import "~buefy/src/scss/buefy";
@import "./style/fonts";
</style>

<style scoped>
.navbar {
    border-radius: 0;
}
</style>

