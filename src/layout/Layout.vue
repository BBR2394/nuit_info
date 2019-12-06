<template>
    <q-layout view="hHh lpr lFf" class="default">
            <q-header elevated>
                <q-toolbar class="bg-blue">
                    <q-btn flat round dense icon="menu" class="q-mr-sm" >
                        <q-menu>
                            <q-list style="min-width: 100px">
                            <q-item clickable v-close-popup>
                              <q-item-section>Informations</q-item-section>
                            </q-item>
                          <!--   <q-item clickable v-close-popup>
                              <q-item-section>New incognito tab</q-item-section>
                            </q-item>
                            <q-separator ></q-separator>
                            <q-item clickable v-close-popup>
                              <q-item-section>Recent tabs</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                              <q-item-section>History</q-item-section>
                            </q-item> -->
                            <q-item clickable v-close-popup>
                              <q-item-section>Mode d'emploie</q-item-section>
                            </q-item>
                            <q-separator ></q-separator>
                            <q-item clickable v-close-popup>
                                <q-item-section>FAQ</q-item-section>
                            </q-item>
                            <q-separator ></q-separator>
                            <q-item clickable v-close-popup>
                                <q-item-section>Aide</q-item-section>
                              </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
                    <q-toolbar-title>
                        L'estudiante Portail
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