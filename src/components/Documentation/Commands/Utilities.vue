<template>
    <div>
        <h2>
            <b-icon icon="toolbox"></b-icon>
            <span>Utilities</span>
        </h2>

        <p>
            A collection of utility functions
        </p>

        <hr>

        <h4 id="Help">
            <b-icon icon="info"></b-icon>
            <span>Help</span>
        </h4>

        <p>
            Prints the link to the documentation
        </p>

        <p>
            Command: <code>>help</code>
        </p>

        <h4 id="Prefix">
            <b-icon icon="chevron-right"></b-icon>
            <span>Prefix</span>
            <b-tag type="is-info">New</b-tag>
        </h4>

        <p>
            Change command prefix on guild
        </p>

        <p>
            Example Command: <code>>prefix NewPrefix</code>
        </p>

        <ParamTable>
            <ParamRow
                name=NewPrefix
                type="String"
                typeRef="/Documentation/ParameterTypes#String"
                desc="The new command prefix to use" />
        </ParamTable>

        <h4 id="FetchMessage">
            <b-icon icon="search"></b-icon>
            <span>Fetch Message Reaction Roles</span>
        </h4>

        <p>
            Fetches all reaction roles on a message
        </p>

        <p>
            Example Command: <code>>fetchmessage #Channel MessageID</code>
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

        <h4 id="FetchLock">
            <b-icon icon="search"></b-icon>
            <span>Fetch Message Locks</span>
        </h4>

        <p>
            Fetches all locks on a message
        </p>

        <p>
            Example Command: <code>>fetchlock #Channel MessageID</code>
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
