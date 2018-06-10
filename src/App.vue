<template>
    <section id="app" class="hero is-fullheight">
        <div class="hero-head">
            <nav class="navbar" role="navigation" aria-label="Navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <router-link to="/" class="navbar-item">
                            <img src="/static/favicon/favicon.png">
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Reaction-Role',
};
</script>

<style lang="sass">
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
