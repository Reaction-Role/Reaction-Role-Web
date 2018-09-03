<template>
    <div>
        <h2>
            <b-icon icon="paper-plane" pack="far"></b-icon>
            <span>Quickstart</span>
        </h2>

        <p>
            Timeline of basic setup process
        </p>

        <hr>

        <div class="timeline">
            <header class="timeline-header">
                <span class="tag is-medium is-primary">Start</span>
            </header>
            <div class="timeline-item is-primary">
                <div class="timeline-marker is-icon">
                    <i class="far fa-play-circle"></i>
                </div>
                <div class="timeline-content">
                    <p class="heading">Prefer videos?</p>
                    <p>
                        If you prefer video tutorials, checkout the
                        <router-link to="/Videos" class="has-text-success">
                            videos
                        </router-link>
                        that we have. Otherwise, continue with the steps.
                    </p>
                </div>
            </div>
            <div class="timeline-item is-info">
                <div class="timeline-marker is-icon">
                    <i class="far fa-comment"></i>
                </div>
                <div class="timeline-content">
                    <p class="heading">Setup a message in which your users will react to</p>
                    <p>This can in the form of a regular message you type or
                        <router-link to="/Documentation/MessageEmbed" class="has-text-success">
                            MessageEmbed
                        </router-link>
                    </p>
                </div>
            </div>
            <div class="timeline-item is-success">
                <div class="timeline-marker is-icon">
                    <i class="fab fa-react"></i>
                </div>
                <div class="timeline-content">
                    <p class="heading">Create Reaction Role</p>
                    <p>
                        <router-link to="/Documentation/FindMessageID"
                            class="has-text-success">
                            Find and copy the message ID
                        </router-link> of the message you created and use it in
                        <router-link to="/Documentation/ReactionRole#Create"
                            class="has-text-success">
                            ReactionRole
                        </router-link>
                    </p>
                </div>
            </div>
            <div class="timeline-header">
                <span class="tag is-primary">Additional</span>
            </div>
            <div class="timeline-item is-warning">
                <div class="timeline-marker is-icon">
                    <i class="fa fa-lock"></i>
                </div>
                <div class="timeline-content">
                    <p class="heading">Finished!</p>
                    <p>
                        From here, you finished! But for additional configuration: checkout
                        <router-link to="/Documentation/GroupLock"
                            class="has-text-success">
                            Group Locking!
                        </router-link>
                        If you are a Patron, checkout
                        <router-link to="/Documentation/ReactionRole#Lifespan"
                            class="has-text-success">
                            lifespan
                        </router-link>and
                        <router-link to="/Documentation/ReactionRole#SingleUse"
                            class="has-text-success">
                            single use
                        </router-link>
                    </p>
                </div>
            </div>
            <div class="timeline-item is-danger">
                <div class="timeline-marker is-icon">
                    <i class="fab fa-discord"></i>
                </div>
                <div class="timeline-content">
                    <p class="heading">Still stuck?</p>
                    <p>
                         If you are confused after everything, feel free to join
                        our server at the top <b>after</b> reading everything.
                    </p>
                </div>
            </div>
            <div class="timeline-header">
                <span class="tag is-medium is-primary">End</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Quickstart',
};
</script>

<style scoped>
.selectable-checkbox-text {
    vertical-align: text-top;
    line-height: 110%;
}
.alpha-list {
    list-style-type: lower-alpha;
}
.mb1em {
    margin-bottom: 1em;
}
</style>
