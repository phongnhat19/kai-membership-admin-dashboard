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
import { CustomerTabItems } from "@/configs/page";

// Lazy load components
const RewardList = () => import("@/components/reward/RewardList.vue");

@Component({
  layout: "default",
  components: { RewardList },
})
export default class Home extends Vue {
  tabItems = CustomerTabItems;
}
</script>

<style lang="scss" scoped>
</style>