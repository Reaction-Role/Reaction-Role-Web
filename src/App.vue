<template>
    <section id="app" class="hero is-dark is-fullheight">
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
                                    <router-link to="/Emojis" class="navbar-item">
                                        <b-icon icon="gem" pack="far"></b-icon>&nbsp;
                                        <span>Global Emojis</span>
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

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$blurple: #7289DA;
$fullWhite: #fff;
$greyple: #99AAB5;
$dark: #2C2F33;
$black: #23272A;

$grey-light: $dark;
$blurple-invert: findColorInvert($blurple);

$mcolors: (
  "white": ($fullWhite, $black),
  "black": ($black, $fullWhite),
  "light": ($light, $light-invert),
  "dark": ($dark, $fullWhite),
  "primary": ($primary, $primary-invert),
  "info": ($info, $info-invert),
  "success": ($success, $success-invert),
  "warning": ($warning, $warning-invert),
  "danger": ($danger, $danger-invert),
  "blurple": ($blurple, $blurple-invert),
  "fullwhite": ($fullWhite, $black)
);

$colors: map-merge($colors, $mcolors);

$footer-background-color: $dark;

$navbar-item-hover-background-color: $black;
$navbar-dropdown-arrow: $fullWhite;
$navbar-dropdown-background-color: $dark;
$navbar-dropdown-item-hover-background-color: $black;

$menu-item-color: $fullWhite;
$menu-item-hover-color: $greyple;
$menu-item-hover-background-color: $black;
$menu-item-active-background-color: $blurple;

$card-color: $fullWhite;
$card-background-color: $black;

$box-color: $fullWhite;
$box-background-color: $black;

$content-heading-color: $fullWhite;
$content-table-cell-heading-color: $fullWhite;
$content-table-head-cell-color: $fullWhite;
$content-table-foot-cell-color: $fullWhite;

$code-background: $black;

$table-color: $fullWhite;
$table-background-color: $black;
$table-cell-heading-color: $fullWhite;
$table-head-cell-color: $fullWhite;
$table-foot-cell-color: $fullWhite;
$table-row-hover-background-color: $dark;
$table-row-active-background-color: $blurple;
$table-cell-border: 1px solid $black-bis;

$input-color: $fullWhite;
$input-background-color: $black;
$input-border-color: $black;
$input-hover-border-color: $dark;
$input-focus-border-color: $dark;

$pagination-color: $fullWhite;
$pagination-current-background-color: $blurple;
$pagination-current-border-color: $blurple;

$breadcrumb-item-active-color: $blurple;
$breadcrumb-item-separator-color: $fullWhite;

@import "~bulma";
@import "~buefy/src/scss/buefy";

.diffLink {
    color: $link !important;
}
</style>
