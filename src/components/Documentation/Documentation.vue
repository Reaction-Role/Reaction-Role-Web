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
                        exact-active-class="is-active">
                            <b-icon icon="comment" pack="far"></b-icon>
                            <span>Message Embed</span>
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/Documentation/MessageEmbed#Create"
                                exact-active-class="is-active">
                                    <b-icon icon="plus"></b-icon>
                                    <span>Create Embed</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Documentation/MessageEmbed#Edit"
                                exact-active-class="is-active">
                                    <b-icon icon="edit" pack="far"></b-icon>
                                    <span>Edit Embed</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/Documentation/ReactionRole"
                        exact-active-class="is-active">
                            <b-icon icon="react" pack="fab"></b-icon>
                            <span>Reaction Role</span>
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/Documentation/ReactionRole#Create"
                                exact-active-class="is-active">
                                    <b-icon icon="plus"></b-icon>
                                    <span>Create Reaction Role</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Documentation/ReactionRole#Delete"
                                exact-active-class="is-active">
                                    <b-icon icon="trash-alt" pack="far"></b-icon>
                                    <span>Delete Reaction Role</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/Documentation/GroupLock"
                        exact-active-class="is-active">
                            <b-icon icon="lock"></b-icon>
                            <span>Group Lock</span>
                            <b-tag type="is-success">Patron Only</b-tag>
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/Documentation/GroupLock#MessageLock"
                                exact-active-class="is-active">
                                    <b-icon icon="comment" pack="far"></b-icon>
                                    <span>Message Lock</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Documentation/GroupLock#ReferenceIDLock"
                                exact-active-class="is-active">
                                    <b-icon icon="id-badge" pack="far"></b-icon>
                                    <span>Reference ID Lock</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Documentation/GroupLock#ReleaseLock"
                                exact-active-class="is-active">
                                    <b-icon icon="unlock"></b-icon>
                                    <span>Release Lock</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/Documentation/Utilities"
                        exact-active-class="is-active">
                            <b-icon icon="toolbox"></b-icon>
                            <span>Utilities</span>
                        </router-link>
                        <ul>
                            <li>
                                <router-link to="/Documentation/Utilities#Help"
                                exact-active-class="is-active">
                                    <b-icon icon="info"></b-icon>
                                    <span>Help</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Documentation/Utilities#FetchMessage"
                                exact-active-class="is-active">
                                    <b-icon icon="search"></b-icon>
                                    <span>Fetch Message Reaction Roles</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Documentation/Utilities#FetchLock"
                                exact-active-class="is-active">
                                    <b-icon icon="search"></b-icon>
                                    <span>Fetch Message Locks</span>
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
span.icon {
    vertical-align: middle;
}
</style>
