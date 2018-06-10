<template>
    <div>
        <h2>Reaction Role</h2>

        <p>
            Assign roles by reacting to emojis
        </p>

        <hr>

        <h4 id="Create">Create Reaction Role</h4>

        <p>
            Example Command: <code>addrole #Channel MessageID :Emoji: @Role</code>
        </p>

        <ParamTable>
                <ParamRow
                    name="#Channel"
                    type="Mention"
                    typeRef="/Documentation/ParameterTypes#Mention"
                    desc="The channel where the message to bind the reaction role to is" />
                <ParamRow
                    name="MessageID"
                    type="String"
                    typeRef="/Documentation/ParameterTypes#String"
                    desc="The message ID of the message to attach the reaction role to" />
                <ParamRow
                    name=":Emoji:"
                    type="Emoji"
                    typeRef="/Documentation/ParameterTypes#Emoji"
                    desc="The title of the embedded" />
                <ParamRow
                    name="Body"
                    type="String"
                    typeRef="/Documentation/ParameterTypes#String"
                    desc="The emoji to use as the reaction emoji, be it stock or custom" />
                <ParamRow
                    name="@Role"
                    type="Mention/String"
                    typeRef="/Documentation/ParameterTypes#Mention"
                    desc="The emoji to use as the reaction emoji, be it stock or custom" />
                <ParamRow
                    name="B64"
                    type="String"
                    typeRef="/Documentation/ParameterTypes#String"
                    opt
                    desc="Whether to parse emoji as base64 encoded (Pass b64 to enable)" />
        </ParamTable>

        <h4 id="Delete">Delete Reaction Role</h4>

        <p>
            There are a few ways to delete Reaction Roles,
            however the first option is the best to avoid any conflict
        </p>

        <h5>Deletion via ID</h5>

        <img src="/static/img/reference_id.png" alt="Reference ID">

        <hr>

        <p>
            Example Command: <code>removerole ReferenceID</code>
        </p>

        <ParamTable>
            <ParamRow
                name="ReferenceID"
                type="String"
                typeRef="/Documentation/ParameterTypes#String"
                desc="Whether to parse emoji as base64 encoded (Pass b64 to enable)" />
        </ParamTable>

        <h5>Deletion via message delete</h5>

        <p>
            You can also delete the message itself that the Reaction Role is on
            but note doing so will remove all the reaction roles on that message
        </p>

        <img src="/static/img/delete.png" alt="Delete Message">
    </div>
</template>

<script>
import ParamTable from '../ParamTable';
import ParamRow from '../ParamRow';

export default {
    name: 'ReactionRole',
    components: {
        ParamRow,
        ParamTable,
    },
};
</script>
