<template>
    <div>
        <h2>
            <b-icon icon="comment" pack="far"></b-icon>
            <span>Message Embed</span>
        </h2>

        <p>
            Messasge embed is an optional feature, so it is not required for Reaction Role to work.
            However, it can make your server look more professional if done correctly
        </p>

        <hr>

        <h4>Regular vs Embedded Message</h4>
        <img src="/static/img/regular.png" alt="Regular">
        <img src="/static/img/embedded.png" alt="Embedded">

        <hr>

        <h4 id="Create">
            <b-icon icon="plus"></b-icon>
            <span>Creating Embed</span>
        </h4>

        <p>
            Creating an embed similar to the one above
        </p>

        <p>
            Example Command: <code>>embedmessage #Channel Color Title Body</code>
        </p>

        <ParamTable>
                <ParamRow
                    name="#Channel"
                    type="Mention"
                    typeRef="/Documentation/ParameterTypes#Mention"
                    desc="The channel to send the embedded message in." />
                <ParamRow
                    name="Color"
                    type="String"
                    typeRef="/Documentation/ParameterTypes#String"
                    desc="The left border color of the embedded message in
                    hex value (with #) or a CSS color keyword" />
                <ParamRow
                    name="Title"
                    type="String"
                    typeRef="/Documentation/ParameterTypes#String"
                    desc="The title of the embedded" />
                <ParamRow
                    name="Body"
                    type="String"
                    typeRef="/Documentation/ParameterTypes#String"
                    desc="The body or description of the embedded" />
                <ParamRow
                    name="B64"
                    type="String"
                    typeRef="/Documentation/ParameterTypes#String"
                    opt
                    desc="Whether to parse value as base64 encoded (Pass b64 to enable)" />
        </ParamTable>

        <h4 id="Edit">
            <b-icon icon="edit" pack="far"></b-icon>
            <span>Edit Embed</span>
        </h4>

        <p>
            In cases where you wish to edit an embedded message
        </p>

        <p>
            Example Command: <code>>editmessage #Channel MessageID Element NewValue</code>
        </p>

        <ParamTable>
            <ParamRow
                name="#Channel"
                type="Mention"
                typeRef="/Documentation/ParameterTypes#Mention"
                desc="The channel where the embedded message was created in" />
            <ParamRow
                name="MessageID"
                type="String"
                typeRef="/Documentation/ParameterTypes#String"
                desc="The message ID of the embedded message to edit" />
            <ParamRow
                name="Element"
                type="String"
                typeRef="/Documentation/ParameterTypes#String"
                desc="Part of the embedded message to edit
                (Color, Title, Body, Patron Only: Image, Thumbnail)" />
            <ParamRow
                name="NewValue"
                type="String"
                typeRef="/Documentation/ParameterTypes#String"
                desc="The value to replace it with" />
            <ParamRow
                    name="B64"
                    type="String"
                    typeRef="/Documentation/ParameterTypes#String"
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
