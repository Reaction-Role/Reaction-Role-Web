<template>
    <div>
        <Message title="Reaction-role message limit per guild">
            If you meet the limit,
            you may see something like For cache performance purposes,
            only patrons & supporters are allowed more than X messages
            with reaction-role per guild.
        </Message>

        <Message title="Why's this restriction in place?">
            Due to cache performances and the limited resources of the current machine,
            the bot is on; the restriction is in place to
            prevent one guild taking up all the resources,
            degrading the performance for everyone else
        </Message>

        <Message title="How can I create more reaction-roles?">
            As of current, you may vote 5 times to allocate more 5 messages
            with reaction-role per guild, allocating up to 10 messages with reaction-role per guild
        </Message>

        <Message title="What if I want more than 10 reaction-roles?">
            If you want more than 10 reaction-roles,
            you may contribute to the hosting cost by becoming a Patron,
            with the ability to allocate a mere infinite amount (except for abuses)
            and Patron role on my support server!
        </Message>

        <Message title="What's the group lock feature?" tag="Patron Only">
            The group lock feature is a system where you can lock a group of
            reaction-roles to only one available at a time.
        </Message>

        <Message title="What is Patron and how much does it cost?">
            Patron is someone that support the bot by contributing to the server
            host cost and you can do so through the Patreon button on the top right corner
            and it cost $2/month. But it's totally optional and you will still be able to
            use the main feature of the bot without it.
        </Message>

        <Message title="Is the bot open-source?">
            Unfortunately not, the bot will strictly be closed source.
        </Message>

        <Message title="I have a suggestion!">
            That's great! You can join our server to discuss your idea
        </Message>
    </div>
</template>

<script>
import Message from './Message';

export default {
    name: 'FAQ',
    components: {
        Message,
    },
};
</script>
