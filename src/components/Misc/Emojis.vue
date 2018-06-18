<template>
    <div class="box">
        <b-field grouped group-multiline>
            <b-input v-model="search" placeholder="Search..." icon="search"></b-input>

            <div class="control is-flex">
                <b-switch v-model="animatedOnly">Animated Only</b-switch>
            </div>

            <div class="control">
                <button v-if="exports.length > 0"
                    class="button is-danger is-pulled-right"
                    @click="exportEmojis">
                    Download {{ exports.length }} Emojis
                </button>
            </div>
        </b-field>

        <b-table
            :data="filter"
            paginated
            per-page="10"
            :loading="loading"
            :checked-rows.sync="exports"
            checkable
            hoverable
            >

            <template slot-scope="props" slot="header">
                <b-tooltip :active="!!props.column.meta" :label="props.column.meta" dashed>
                    {{ props.column.label }}
                </b-tooltip>
            </template>

            <template slot-scope="props">
                <b-table-column field="name" label="Name" sortable>
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column field="url" label="Emoij">
                    <img class="image is-48x48" :src="props.row.url">
                </b-table-column>

                <b-table-column field="animated" label="Animated">
                    <b-tag
                    :type="props.row.animated ? 'is-success' : 'is-danger'">
                        {{ props.row.animated ? 'Yes' : 'No' }}
                    </b-tag>
                </b-table-column>

                <b-table-column field="identifier" label="Identifier"
                meta="Use in place of the :Emoji: Parameter">
                    <code>{{ formatIdentifier(props.row) }}</code>
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="frown"
                                pack="far"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>

        </b-table>
    </div>
</template>

<script>
import Fuse from 'fuse.js';
import Axios from 'axios';
import FileSaver from 'file-saver';

export default {
    name: 'Emojis',
    data() {
        return {
            exports: [],
            search: null,
            animatedOnly: false,
            emojis: [],
            loading: true,
            fuse: null,
        };
    },
    mounted() {
        Axios
            .get('https://api.reaction-role.com/emojis')
            .then((response) => {
                this.emojis = response.data;

                this.fuse = new Fuse(this.emojis, {
                    shouldSort: true,
                    findAllMatches: true,
                    threshold: 0.4,
                    keys: [
                        'name',
                    ],
                });

                this.loading = false;
            })
            .catch(() => {
                // Test
            });
    },
    computed: {
        filter() {
            const filteredNames = this.filteredName();

            if (this.animatedOnly) {
                const filteredFinal = [];

                for (let i = 0; i < filteredNames.length; i += 1) {
                    if (filteredNames[i].animated) {
                        filteredFinal.push(filteredNames[i]);
                    }
                }

                return filteredFinal;
            }

            return filteredNames;
        },
    },
    methods: {
        filteredName() {
            if (this.search === null || this.search === '') {
                return this.emojis;
            }

            return this.fuse.search(this.search);
        },
        formatIdentifier(row) {
            return btoa(`<${row.animated ? 'a:' : ''}${row.identifier}>`);
        },
        exportEmojis() {
            this.exports.forEach((e) => {
                Axios
                    .get(e.url, {
                        responseType: 'blob',
                    })
                    .then((response) => {
                        FileSaver.saveAs(response.data, e.name);
                    })
                    .catch(() => {
                        // Nothing
                    });
            });
        },
    },
};
</script>
