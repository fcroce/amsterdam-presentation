<template>
    <div class="panel">
        <v-app id="inspire" dark>
            <v-navigation-drawer
                    clipped
                    fixed
                    v-model="drawer"
                    app
            >
                <v-list dense>
                    <v-list-tile v-for="item in items" :key="item.title" @click="" :to="item.path">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar app fixed clipped-left>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title>Application</v-toolbar-title>
            </v-toolbar>
            <v-content>
                <v-container fluid fill-height>
                    <v-layout justify-center align-center>
                        <v-flex shrink>
                            <v-btn
                                    icon
                                    large
                                    :href="source"
                                    target="_blank"
                                    slot="activator"
                                    @click.native="snackbar = true"
                            >
                                <v-icon large>code</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-snackbar
                        :timeout="timeout"
                        :top="y === 'top'"
                        :bottom="y === 'bottom'"
                        :right="x === 'right'"
                        :left="x === 'left'"
                        :multi-line="mode === 'multi-line'"
                        :vertical="mode === 'vertical'"
                        v-model="snackbar"
                >
                    <span>{{ text }} </span> &nbsp; <v-icon small color="green darken-2">build</v-icon>
                    <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
                </v-snackbar>
            </v-content>
            <v-footer app fixed>
                <span>&copy; {{ new Date().getFullYear() }}</span>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "panel",
        data: () => ({
            drawer: true,
            items: [
                { title: 'Home', icon: 'home', path: '/' },
                { title: 'Dashboard', icon: 'dashboard' },
                { title: 'Settings', icon: 'settings' }
            ],
            snackbar: false,
            y: 'top',
            x: null,
            mode: '',
            timeout: 6000,
            text: 'Please refactor HBO Client'
        }),
        props: {
            source: String
        }
    };
</script>

<style scoped>

</style>