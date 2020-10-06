<template>
  <v-tabs background-color="accent-4" class="elevation-2" dark>
    <v-tabs-slider></v-tabs-slider>

    <v-tab href="#setting">Cài đặt</v-tab>

    <v-tab-item value="setting">
      
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  layout: "default",
})
export default class Setting extends Vue {}
</script>

<style lang="scss" scoped>
</style>