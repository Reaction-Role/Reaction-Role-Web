<template>
    <div>
        <h2>
            <b-icon icon="lock"></b-icon>
            <span>Group Lock</span>
        </h2>

        <p>
            Restricts users to only one role within a selection group at a time
        </p>

        <p>
            Ex: Blue, Red, Teal, Pink (user can only pick one)
        </p>

        <hr>

        <h4 id="MessageLock">
            <b-icon icon="comment" pack="far"></b-icon>
            <span>Message Lock</span>
        </h4>

        <div class="notification is-primary">
            In order to lock additional ones on the same message,
            you must release the lock and then lock it again
        </div>

        <p>
            Example Command: <code>>lockmessage #Channel MessageID</code>
        </p>

        <ParamTable>
            <ParamRow
                name="#Channel"
                type="Mention"
                typeRef="/Documentation/ParameterTypes#Mention"
                desc="The channel where the message to lock is" />
            <ParamRow
                name="MessageID"
                type="String"
                typeRef="/Documentation/ParameterTypes#String"
                desc="The message ID of the message to lock" />
        </ParamTable>

        <h4 id="ReferenceIDLock">
            <b-icon icon="id-badge" pack="far"></b-icon>
            <span>Reference ID Lock</span>
        </h4>

        <p>
            This commands consumes Reference IDs and chain and lock them together.
            They do not have to be on the same message,
            meaning you could lock across multiple messages if you wish.
        </p>

        <p>
            Example Command: <code>>createlock ReferenceID...</code>
        </p>

        <ParamTable>
            <ParamRow
                name="ReferenceID"
                type="String[]"
                typeRef="/Documentation/ParameterTypes#String"
                desc="Reference IDs to chain and lock together, each one separated by a space" />
        </ParamTable>

        <h4 id="ReleaseLock">
            <b-icon icon="unlock"></b-icon>
            <span>Release Lock</span>
        </h4>

        <p>
            Releasing the lock to allow more than one role to be selected
        </p>

        <p>
            Example Command: <code>>releaselock ReferenceID</code>
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
    name: 'GroupLock',
    components: {
        ParamRow,
        ParamTable,
    },
};
</script>
