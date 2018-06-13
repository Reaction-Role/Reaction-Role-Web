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
            <b-checkbox value="true"></b-checkbox>
            <span class="selectable-checkbox-text">
                Ensure the bot is in the server. Duh.
            </span>
        </div>

        <div class="field">
            <b-checkbox></b-checkbox>
            <span class="selectable-checkbox-text">
                Ensure all emojis are uploaded and all roles are created
            </span>
        </div>

        <div class="field">
            <b-checkbox></b-checkbox>
            <span class="selectable-checkbox-text">
                Ensure <code>Reaction Role</code> role is above the roles
            </span>
        </div>

        <div class="field">
            <b-checkbox></b-checkbox>
            <span class="selectable-checkbox-text">
                Ensure Reaction Role has
                <code>Embed Link</code> permission on the channels you are sending/pointing at
            </span>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Prerequisite',
};
</script>

<style scoped>
.selectable-checkbox-text {
    vertical-align: text-top;
    line-height: 110%;
}
</style>
