<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" aria-label="Menu"/>
        <q-toolbar-title>Mini's Mapping Viewer</q-toolbar-title>
        <q-btn
          flat
          round
          dense
          @click="openUrl('https://github.com/MiniDigger/MiniMappingViewer/')"
          >Github</q-btn
        >
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple to="/mojang" aria-label="Spigot">
            <q-item-section avatar>
              <q-icon name="play_arrow" />
            </q-item-section>

            <q-item-section>
              Mojang -> Spigot
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/spigot" aria-label="Spigot">
            <q-item-section avatar>
              <q-icon name="play_arrow" />
            </q-item-section>

            <q-item-section>
              Spigot -> Mojang
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { openURL } from 'quasar'


  export default {
  name: "MainLayout",
  data() {
    return {
      drawer: false,
      miniState: true
    };
  },
  methods: {
    openUrl(url) {
      openURL(url);
    }
  }
};
</script>
