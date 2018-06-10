<template>
    <div>
        <h2>
            <b-icon icon="search"></b-icon>
            <span>Find Message ID</span>
        </h2>

        <p>
            Shows you how to locate Message ID to use in the commands
        </p>

        <hr>

        <img src="/static/img/get_id.png" alt="Get ID" class="image">

        <div class="notification is-primary is-marginless">
            If you are not seeing the Copy ID button, you must enable Developer mode
        </div>

        <img src="/static/img/dev_mode.png" alt="Developer Mode">
    </div>
</template>

<script>
export default {
    name: 'CopyID',
};
</script>
