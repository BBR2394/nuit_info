<template>
    <q-layout view="hHh lpr lFf" class="default">
            <q-header elevated>
                <q-toolbar class="bg-blue">
                    <q-toolbar-title>
                        Gestion
                    </q-toolbar-title>
                </q-toolbar>
            </q-header>
            <q-page-container>
                <q-page>
                    <router-view></router-view>
                </q-page>
            </q-page-container>
    </q-layout>
</template>

<script>
    import {
        QToolbar,
        QLayout,
        QHeader,
        QPage,
        QPageContainer
    } from 'quasar'

    export default {
        name: 'Default',
        components: {
            QToolbar,
            QLayout,
            QHeader,
            QPage,
            QPageContainer
        }
    }
</script>

<style lang="stylus" scoped>

</style>