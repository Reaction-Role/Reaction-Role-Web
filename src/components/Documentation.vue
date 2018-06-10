<template>
    <div class="columns animated fadeIn">
        <div class="column is-3">
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
                        exact-active-class="is-active">
                            <b-icon icon="list-ul"></b-icon>
                            <span>Prerequisite</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Documentation/ParameterTypes"
                        exact-active-class="is-active">
                            <b-icon icon="clone" pack="far"></b-icon>
                            <span>Parameter Types</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Documentation/FindMessageID"
                        exact-active-class="is-active">
                            <b-icon icon="search"></b-icon>
                            <span>Find Message ID</span>
                        </router-link>
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
                        <router-link to="/Documentation/ReactionRole"
                        exact-active-class="is-active">Reaction Role</router-link>
                        <ul>
                            <li>
                                <router-link to="/Documentation/ReactionRole#Create"
                                exact-active-class="is-active">
                                    Create Reaction Role
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Documentation/ReactionRole#Delete"
                                exact-active-class="is-active">
                                    Delete Reaction Role
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/Documentation/GroupLock"
                        exact-active-class="is-active">Group Lock (Patron Only)</router-link>
                        <ul>
                            <li>
                                <router-link to="/Documentation/GroupLock#MessageLock"
                                exact-active-class="is-active">
                                    Message Lock
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Documentation/GroupLock#ReferenceIDLock"
                                exact-active-class="is-active">
                                    Reference ID Lock
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Documentation/GroupLock#ReleaseLock"
                                exact-active-class="is-active">
                                    Release Lock
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/Documentation/Utilities"
                        exact-active-class="is-active">Utilities</router-link>
                        <ul>
                            <li>
                                <router-link to="/Documentation/Utilities#Help"
                                exact-active-class="is-active">
                                    Help
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Documentation/Utilities#FetchMessage"
                                exact-active-class="is-active">
                                    Fetch Message Reaction Roles
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Documentation/Utilities#FetchLock"
                                exact-active-class="is-active">
                                    Fetch Message Locks
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
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

<style>
tr > td:nth-child(3) {
    text-align: center;
}
</style>

<style scoped>
span.icon {
    vertical-align: middle;
}
</style>

