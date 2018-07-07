<template>
    <div>
        <Message title="Can I change the prefix?">
            No, the commands aren't designed to be used often enough to have ability
            to change prefix. If you want you could ping the bot directly with the commands.
        </Message>

        <Message title="Can this bot replace Zira?">
            No, Zira and Reaction Role is a totally different bot with the thing being
            in common is the ability to assign roles base on reactions.
        </Message>

        <Message title="What's the group lock feature?" tag="Patron Only">
            The group lock feature is a system where you can lock a group of
            reaction-roles to only one available at a time.
        </Message>

        <Message title="What is Patron and how much does it cost?">
            Patron is someone that support the bot by contributing to the server
            host cost and you can do so through the Patreon button on the top right corner
            and it cost $1/month. But it's totally optional and you will still be able to
            use the main feature of the bot without it.
        </Message>

        <Message title="Are you looking for partnership?">
            Of course, if you run a large size guild (1000+ members)
            and is interested in becoming a partner, reach out to me at
            <email>fishy@reaction-role.com</email>
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
