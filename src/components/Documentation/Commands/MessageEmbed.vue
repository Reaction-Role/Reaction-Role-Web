<template>
    <div>
        <h1>Message Embed</h1>

        <p>
            Messasge embed is an optional command, so it is not required for Reaction Role to work.
            However, it can make your server look more professional if done correctly
        </p>

        <hr>

        <h3>Regular vs Embedded Message</h3>

        <img src="/static/img/regular.png" alt="Regular">
        <img src="/static/img/color_picker.png" alt="Embedded">

        <h3 id="Create">Creating Embed</h3>

        <p>
            <span>Example Command: <code>>embedmessage #Channel Color Title Body</code></span>
        </p>

        <ParamTable>
                <ParamRow
                    name="#Channel"
                    type="Mention"
                    typeRef="/"
                    desc="The channel to send the embedded message in." />
                <ParamRow
                    name="Color"
                    type="String"
                    typeRef="/"
                    desc="The left border color of the embedded message in
                    hex value (with #) or a CSS color keyword" />
                <ParamRow
                    name="Title"
                    type="String"
                    typeRef="/"
                    desc="The title of the embedded" />
                <ParamRow
                    name="Body"
                    type="String"
                    typeRef="/"
                    desc="The body or description of the embedded" />
                <ParamRow
                    name="B64"
                    type="String"
                    typeRef="/"
                    opt
                    desc="Whether to parse value as base64 encoded (Pass b64 to enable)" />
        </ParamTable>

    </div>
</template>

<script>
import ParamTable from '../ParamTable';
import ParamRow from '../ParamRow';

export default {
    name: 'MessageEmbed',
    components: {
        ParamRow,
        ParamTable,
    },
};
</script>
