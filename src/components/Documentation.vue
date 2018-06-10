<template>
    <div class="columns animated fadeIn">
        <div class="column is-3">
            <div class="fixed-menu">
                <h1 class="title">Documentation</h1>
                <nav aria-label="breadcrumbs" class="breadcrumb">
                    <ul>
                        <li>
                            <router-link to="/">Reaction Role</router-link>
                        </li>
                        <li class="is-active">
                            <router-link to="/Documentation">Documentation</router-link>
                        </li>
                    </ul>
                </nav>
                <aside class="menu">
                    <p class="menu-label">
                        Overview
                    </p>
                    <ul class="menu-list">
                        <li>
                            <router-link to="/Documentation"
                            exact-active-class="is-active">Prerequisite</router-link>
                        </li>
                        <li>
                            <router-link to="/Documentation/ParameterTypes"
                            exact-active-class="is-active">Parameter Types</router-link>
                        </li>
                    </ul>
                    <p class="menu-label">
                        Commands
                    </p>
                    <ul class="menu-list">
                        <li>
                            <router-link to="/Documentation/MessageEmbed"
                            exact-active-class="is-active">Message Embed</router-link>
                            <ul>
                                <li>
                                    <router-link to="/Documentation/MessageEmbed#Create"
                                    exact-active-class="is-active">
                                        Create Embed
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/Documentation/MessageEmbed#Edit"
                                    exact-active-class="is-active">
                                        Edit Embed
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Reaction Role</a>
                            <ul>
                                <li><a>Create Reaction Role</a></li>
                                <li><a>Delete Reaction Role</a></li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
        <div class="column">
            <div class="box">
                <div class="content">
                    <keep-alive><router-view class="animated fadeIn"></router-view></keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Documentation',
};
</script>

<style scoped>
.fixed-menu {
    position: fixed;
}
</style>


<style>
tr > td:nth-child(3) {
    text-align: center;
}
</style>
