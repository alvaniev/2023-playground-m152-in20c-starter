<template>
  <v-app app>
    <v-app-bar color="primary" density="compact">
      <template #prepend>
        <v-app-bar-nav-icon @click.stop="swap"> </v-app-bar-nav-icon>
      </template>

      <v-toolbar-title> Playground </v-toolbar-title>

      <v-toolbar-items>
        <v-menu v-for="ni in navitems" :key="ni.title">
          <template #activator="{ props }">
            <v-btn v-bind="props">
              {{ ni.title }}
            </v-btn>
          </template>
          <v-list density="compact">
            <v-list-item
              v-for="mi in ni.menuitems"
              :key="mi.title"
              :to="mi.action"
            >
              <v-list-item-title>{{ mi.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="isVisible">
      <v-list nav density="compact">
        <v-list-group
          v-for="ni in navitems"
          :key="ni.title"
          collapse-icon="mdi-magnify"
          expand-icon="mdi-magnify"
        >
          <template #activator="{ props }">
              <v-list-subheader v-bind="props">{{ ni.title }}</v-list-subheader>
          </template>
          <v-list-item
            v-for="mi in ni.menuitems"
            :key="mi.title"
            :to="mi.action"
          >
            <v-list-item-title>{{ mi.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isVisible = ref(false);
    const navitems = ref([
      {
        title: "My Examples",
        icon: "mdi-account-box",
        menuitems: [
          {
            title: "Example 1 (empty)",
            action: "/",
          },
          {
            title: "Example 2 (empty)",
            action: "/",
          },
          {
            title: "Example 3 (empty)",
            action: "/",
          },
        ],
      },
      {
        title: "Basic Examples",
        icon: "mdi-file-code-outline",
        menuitems: [
          {
            title: "Hello World",
            action: "/",
          },
          {
            title: "Counter",
            action: "/counter",
          },
          {
            title: "Carousel",
            action: "/carousel",
          },
          {
            title: "Vuetify Normal Table",
            action: "/users-table",
          },
          {
            title: "Vuetifay Data Table",
            action: "/users-data-table",
          },
        ],
      },
    ]);

    function swap() {
      isVisible.value = !isVisible.value;
    }

    return { isVisible, navitems, swap };
  },
};
</script>
