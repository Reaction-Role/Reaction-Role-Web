<template>
    <div>
        <h2>
            <b-icon icon="react" pack="fab"></b-icon>
            <span>Reaction Role</span>
        </h2>

        <p>
            Assign roles by reacting to emojis
        </p>

        <hr>

        <h4 id="Create">
            <b-icon icon="plus"></b-icon>
            <span>Create Reaction Role</span>
        </h4>

        <p>
            Note that if you get <code>Unknown Message</code> as an error,
            please check that your Channel and MessageID is correct
        </p>

        <p>
            Example Command: <code>r/addrole #welcome 473617483266392088 :thumbsup: @Member</code>
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
                    desc="The emoji to use as the reaction emoji" />
                <ParamRow
                    name="@Role"
                    type="Mention/String"
                    typeRef="/Documentation/ParameterTypes#Mention"
                    desc="The role to assign on reaction" />
        </ParamTable>

        <h4 id="Delete">
            <b-icon icon="trash-alt" pack="far"></b-icon>
            <span>Delete Reaction Role</span>
        </h4>

        <p>
            There are a few ways to delete Reaction Roles,
            however the first option is the best to avoid any conflict
        </p>

        <h5 id="deleteviaid">
            <b-icon icon="id-badge" pack="far"></b-icon>
            <span>Deletion via ID</span>
        </h5>

        <img src="/static/img/reference_id.png" alt="Reference ID">

        <hr>

        <p>
            Example Command: <code>r/removerole 2VEDmaigE</code>
        </p>

        <ParamTable>
            <ParamRow
                name="ReferenceID"
                type="String"
                typeRef="/Documentation/ParameterTypes#String"
                desc="The Reaction Role Reference ID to delete" />
        </ParamTable>

        <h5 id="deleteallviacommand">
            <b-icon icon="terminal"></b-icon>
            <span>Deleting all via command</span>
        </h5>

        <p>
            Delete all the reaction roles on a message
        </p>

        <p>
            Example Command: <code>r/removeallroles 473617483266392088</code>
        </p>

        <ParamTable>
            <ParamRow
                name="MessageID"
                type="String"
                typeRef="/Documentation/ParameterTypes#String"
                desc="The message ID of the message to delete" />
        </ParamTable>

        <h5 id="deleteviamessagedelete">
            <b-icon icon="comment" pack="far"></b-icon>
            <span>Deletion via message delete</span>
        </h5>

        <p>
            You can also delete the message itself that the Reaction Role is on
            but note doing so will remove all the reaction roles on that message

            <img src="/static/img/delete.png" alt="Delete Message">
        </p>

        <h4 id="Lifespan">
            <b-icon icon="hourglass-half"></b-icon>
            <span>Set Lifespan</span>
            <b-tag type="is-danger">Patron Early-Access</b-tag>
        </h4>

        <p>
            Set the lifespan of the Reaction Role to self-destruct after desired time (seconds)
        </p>

        <p>
            Example Command: <code>r/setlifespan 2VEDmaigE 60</code>
        </p>

        <ParamTable>
            <ParamRow
                name="ReferenceID"
                type="String"
                typeRef="/Documentation/ParameterTypes#String"
                desc="The Reaction Role Reference ID to set the lifespan on" />
            <ParamRow
                name="Lifespan"
                type="Integer"
                typeRef="/Documentation/ParameterTypes#Integer"
                desc="The lifespan in seconds" />
        </ParamTable>

        <h4 id="SingleUse">
            <b-icon icon="toggle-off"></b-icon>
            <span>Toggle Single Use</span>
            <b-tag type="is-danger">Patron Early-Access</b-tag>
        </h4>

        <p>
            Toggles the Reaction Role to be single use;
            Deletes reaction after use and cannot unassign the role through reaction.
        </p>

        <p>
            Example Command: <code>r/togglesingleuse 2VEDmaigE</code>
        </p>

        <ParamTable>
            <ParamRow
                name="ReferenceID"
                type="String"
                typeRef="/Documentation/ParameterTypes#String"
                desc="The Reference ID given when creating" />
        </ParamTable>
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
