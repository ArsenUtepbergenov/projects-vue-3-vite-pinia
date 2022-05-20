<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-system-bar color="green-darken-3">
          <v-icon :icon="mdiMessage" class="mr-2"></v-icon>
          <span>10 unread messages</span>
          <span class="ml-6">08:30</span>
        </v-system-bar>
        <v-navigation-drawer permanent position="right" theme="dark" app>
          <template v-slot:prepend>
            <v-list-item
              two-line
              prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
              title="Jane Smith"
              subtitle="Logged in"
            ></v-list-item>
          </template>

          <v-divider />

          <v-list nav dense>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              :value="item"
              :prepend-icon="item.icon"
              :title="item.title"
            >
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main>
          <v-container fluid>
            <router-view />
          </v-container>
        </v-main>
        <v-footer app>
          <div class="text-center w-100">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </div>
        </v-footer>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script setup lang="ts">
import { mdiMessage, mdiHomeCity, mdiHelpBox, mdiNoteTextOutline } from '@mdi/js'

const items = [
  { title: 'Home', icon: mdiHomeCity, to: '/' },
  { title: 'Articles', icon: mdiNoteTextOutline, to: 'articles' },
  { title: 'About', icon: mdiHelpBox, to: 'about' },
]
</script>
