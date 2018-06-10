<template>
    <div>
        <h2>
            <b-icon icon="list-ul"></b-icon>
            <span>Prerequisite</span>
        </h2>

        <span>
            There are some things you should prepare
            before continuing with the bot and are listed below
        </span>

        <hr>

        <div class="field">
            <b-checkbox value="true">Ensure the bot is in the server. Duh.</b-checkbox>
        </div>

        <div class="field">
            <b-checkbox>Ensure all emojis are uploaded and all roles are created</b-checkbox>
        </div>

        <div class="field">
            <b-checkbox>Ensure <code>Reaction Role</code> role is above the roles</b-checkbox>
        </div>

        <div class="field">
            <b-checkbox>
                Ensure Reaction Role has
                <code>Embed Link</code> permission on the channels you are sending/pointing at
            </b-checkbox>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Prerequisite',
};
</script>

