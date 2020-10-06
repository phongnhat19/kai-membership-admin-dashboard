<template>
  <div>
    <v-app-bar app :value="!drawer" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app :expand-on-hover="false" dark>
      <v-list dense nav class="py-0">
        <v-list-item two-line class="px-2">
          <v-list-item-avatar>
            <img src="/icon.png" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>KAI MEMBERSHIP</v-list-item-title>
            <v-list-item-subtitle>Admin portal</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" :to="item.to" exact>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="logout-btn" @click="logOut">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="`Logout`" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { MenuItems } from "@/utils/constans";

@Component
export default class ASideMenu extends Vue {
  drawer = true;
  items = MenuItems;

  logOut() {
    this.$auth.logout();
  }
}
</script>

<style lang="scss" scoped>
.v-list-item__title {
  color: #ffffff;
}
.v-list-item--link, .v-list-item--link:hover {
  text-decoration: none;
}
</style>