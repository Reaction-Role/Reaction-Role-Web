<template>
    <div>
        <h1>Parameter Types</h1>

        <hr>

        <h3 id="String">String</h3>

        <p>
            Consist of a sequence of characters.
            If it were to have a space,
            you have to enclose it in quotes or else it will interpret it as mulitple strings
        </p>

        <h3 id="Mention">Mention</h3>

        <p>
            Discord mentions, this can either be Channel mention or Role mention.
        </p>

        <p>
            For channel mentions, it can either be channel name prefixed with a
            <code>#</code> (#channel), or a channel snowflake ID (443915831215390731)
        </p>

        <p>
            For role mentions, it can either be a Role pinged with <code>@</code>,
            or resolved with a Role name
            <router-link to="/Documentation/ParameterTypes#String">String</router-link>
        </p>

    </div>
</template>

<script>
export default {
    name: 'ParameterTypes',
};
</script>
