import Vue from 'vue';
import Home from '@/components/Home';

describe('Home.vue', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();

    it('Renders Logo', () => {
        expect(vm.$el.querySelector('img.reaction-role').src)
            .to.contain('/static/favicon/favicon.png');
    });

    it('Renders Title', () => {
        expect(vm.$el.querySelector('h1.title').textContent)
            .to.equal('Reaction Role');
    });

    it('Renders Description', () => {
        expect(vm.$el.querySelector('h2.subtitle').textContent)
            .to.not.have.lengthOf(0);
    });

    it('Renders Invite Button', () => {
        expect(vm.$el.querySelector('#invite_btn').href)
            .to.contain('https://discordapp.com/oauth2/authorize');
    });

    it('Renders Documentation Button', () => {
        expect(vm.$el.querySelector('#doc_btn').textContent)
            .to.contain('View Docs');
    });
});
