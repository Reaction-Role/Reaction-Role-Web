<template>
    <div>
        <h2>
            <b-icon icon="clone" pack="far"></b-icon>
            <span>Parameter Types</span>
        </h2>

        <hr>

        <h4 id="String">String</h4>

        <p>
            Consist of a sequence of characters.
            If it were to have a space,
            you have to enclose it in quotes or else it will interpret it as mulitple strings
        </p>

        <h4 id="Mention">Mention</h4>

        <p>
            Discord mentions, this can either be Channel mention or Role mention.
        </p>

        <p>
            For channel mentions, it can either be channel name prefixed with a
            <code>#</code> (#channel), or a channel snowflake ID (443915831215390731)
        </p>

        <p>
            For role mentions, it can either be a Role pinged with <code>@</code>,
            or resolved with a Role name string
        </p>

        <h4 id="Emoji">Emoji</h4>

        <p>
            Discord stock, custom or external emoji
        </p>

        <p>
            For <b>external</b> emojis, make sure the format is
            <code>&#x3C;:name:id&#x3E;</code> Ex: <code>&#x3C;:pink:452934410069868544&#x3E;</code>
        </p>

    </div>
</template>

<script>
export default {
    name: 'ParameterTypes',
};
</script>
