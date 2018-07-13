<template>
    <div>
        <h2>
            <b-icon icon="paper-plane" pack="far"></b-icon>
            <span>Quickstart</span>
        </h2>

        <p>
            There are some things you should prepare
            before continuing with the bot and are listed below
        </p>

        <hr>

        <div class="field">
            <b-checkbox value="true" type="is-danger"></b-checkbox>
            <span class="selectable-checkbox-text">
                Ensure the bot is in the server. Duh.
            </span>
        </div>

        <div class="field">
            <b-checkbox type="is-danger"></b-checkbox>
            <span class="selectable-checkbox-text">
                Ensure all emojis are uploaded and all roles are created
            </span>
        </div>

        <div class="field">
            <b-checkbox type="is-danger"></b-checkbox>
            <span class="selectable-checkbox-text">
                Ensure <code>Reaction Role</code> role is above the roles
            </span>
        </div>

        <hr>

        <p>
            After you make sure you have done <b>ALL</b> of the above,
            you may continue with the setup
        </p>

        <ol>
            <li>
                <span>Setup a message in which your user will react to by either</span>
                <ol type="a" class="alpha-list">
                    <li>Type your own message</li>
                    <li class="mb1em">Use
                        <router-link to="/Documentation/MessageEmbed">
                            MessageEmbed
                        </router-link>
                         commands for Rich Embed
                    </li>
                </ol>
            </li>
            <li class="mb1em">Using
                <router-link to="/Documentation/ReactionRole">
                    ReactionRole
                </router-link>
                commands, input the corresponding parameters; You can find the message ID via
                <router-link to="/Documentation/FindMessageID">
                    this guide
                </router-link>
                and put it within the <code>MessageID</code> parameter
            </li>
            <li>
                From here, you finished! But if you are a Patron: checkout
                <router-link to="/Documentation/GroupLock">
                    Group Locking
                </router-link>
            </li>
        </ol>

        <hr>

        <p>
            If you are confused after reading the documentation, checkout the
            <router-link to="/Videos">
                videos
            </router-link>
            we have. If you are even confused after that, feel free to join
            our server at the top <b>after</b> reading everything
        </p>

    </div>
</template>

<script>
export default {
    name: 'Quickstart',
};
</script>

<style scoped>
.selectable-checkbox-text {
    vertical-align: text-top;
    line-height: 110%;
}
.alpha-list {
    list-style-type: lower-alpha;
}
.mb1em {
    margin-bottom: 1em;
}
</style>
