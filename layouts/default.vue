<template>
  <v-app light>
    <ASideMenu></ASideMenu>
    <v-main>
      <div id="main-wapper"><nuxt /></div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import vuetify from "@nuxtjs/vuetify";

@Component({
  middleware: "auth",
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
#main-wapper {
  padding: 15px;
}
</style>