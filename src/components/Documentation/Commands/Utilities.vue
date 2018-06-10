<template>
    <div>
        <h2>Utilities</h2>

        <p>
            A collection of utility functions
        </p>

        <hr>

        <h4 id="Help">Help</h4>

        <p>
            Prints the link to the documentation
        </p>

        <p>
            Command: <code>>help</code>
        </p>

        <h4 id="FetchMessage">Fetch Message Reaction Roles</h4>

        <p>
            Fetches all reaction roles on a message
        </p>

        <p>
            Example Command: <code>fetchmessage #Channel MessageID</code>
        </p>

        <ParamTable>
            <ParamRow
                name="#Channel"
                type="Mention"
                typeRef="/Documentation/ParameterTypes#Mention"
                desc="The channel where the message fetch for is" />
            <ParamRow
                name="MessageID"
                type="String"
                typeRef="/Documentation/ParameterTypes#String"
                desc="The message ID of the message to fetch for" />
        </ParamTable>

        <h4 id="FetchLock">Fetch Message Locks</h4>

        <p>
            Fetches all locks on a message
        </p>

        <p>
            Example Command: <code>fetchlock #Channel MessageID</code>
        </p>

        <ParamTable>
            <ParamRow
                name="#Channel"
                type="Mention"
                typeRef="/Documentation/ParameterTypes#Mention"
                desc="The channel where the message fetch for is" />
            <ParamRow
                name="MessageID"
                type="String"
                typeRef="/Documentation/ParameterTypes#String"
                desc="The message ID of the message to fetch for" />
        </ParamTable>
    </div>
</template>

<script>
import ParamTable from '../ParamTable';
import ParamRow from '../ParamRow';

export default {
    name: 'Utilities',
    components: {
        ParamRow,
        ParamTable,
    },
};
</script>
