<template>
    <div>
        <h1>Message Embed</h1>

        <p>
            Messasge embed is an optional feature, so it is not required for Reaction Role to work.
            However, it can make your server look more professional if done correctly
        </p>

        <hr>

        <h3>Regular vs Embedded Message</h3>

        <img src="/static/img/regular.png" alt="Regular" class="image">
        <img src="/static/img/color_picker.png" alt="Embedded" class="image">

        <h3 id="Create">Creating Embed</h3>

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

        <h3 id="Edit">Edit Embed</h3>

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
