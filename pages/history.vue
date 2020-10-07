<template>
  <v-tabs background-color="accent-4" class="elevation-2" dark>
    <v-tabs-slider></v-tabs-slider>

    <v-tab v-for="tab of tabItems" :key="tab.id" :href="`#${tab.id}`">{{tab.title}}</v-tab>

    <v-tab-item v-for="tab of tabItems" :key="tab.id" :value="tab.id">
      <component v-bind:is="tab.component"></component>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { HistoryTxTabItems } from "@/configs/page";

// Lazy load components
const HistoryTxList = () => import("@/components/history/HistoryTxList.vue");

@Component({
  layout: "default",
  components: { HistoryTxList },
})
export default class Home extends Vue {
  tabItems = HistoryTxTabItems;
}
</script>

<style lang="scss" scoped>
</style>