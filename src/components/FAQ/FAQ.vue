<template>
    <div>
        <Message title="What's the group lock feature?">
            The group lock feature is a system where you can lock a group of
            reaction-roles to only one available at a time.
        </Message>

        <Message title="What is Patron and how much does it cost?">
            Patron is someone that support the bot by contributing to the server
            host cost and you can do so through the Patreon button on the top right corner
            and it cost $1/month. But it's totally optional and you will still be able to
            use the main feature of the bot without it.
        </Message>

        <!-- <Message title="Are you looking for partnership?">
            Of course, if you run a large size guild (5000+ members)
            and is interested in becoming a partner, reach out to me at
            <email>fishy@reaction-role.com</email>
        </Message> -->

        <Message title="How can I get my Reaction Role
        tutorial video featured on the videos page?">
            If you feel like your video is up to the quality standard and would like it
            be featured on the videos page, contact me at <email>fishy@reaction-role.com</email>
            with the video link and a brief description of the video.
        </Message>

        <Message title="How long will this bot stay up?">
            The bot will stay up as long as I receive sufficient funding via Patreon. However,
            the upcoming Patron only bot will stay up as long as I remain interested.
        </Message>

        <Message title="Is the bot open-source?">
            Unfortunately not, the bot will strictly be closed source.
        </Message>

        <!-- <Message title="I have a suggestion!">
            That's great! You can join our server to discuss your idea
        </Message> -->

        <Message title="Where's the server or invite button?">
            Right now, the bot is undergoing a major rewrite. Until that's done, the buttons have been disabled and hidden.
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
