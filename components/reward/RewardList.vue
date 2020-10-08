<template>
  <v-card>
    <v-container v-if="!isLoading">
      <v-card-title>
        Reward list
        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search..."
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :page="page"
        :headers="headers"
        :items="items"
        :search="search"
      >
        <template v-slot:[`item.active`]="{ item }">
          <v-chip
            :color="item.active == true ? 'green' : 'red'"
            outlined
            class="ma-2"
            text-color="white"
            style="width: 60px; text-align: center"
          >
            {{ item.active }}
          </v-chip>
        </template>
      </v-data-table>
    </v-container>
    <v-skeleton-loader v-else class="mx-auto" type="table"></v-skeleton-loader>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { REWARD_LIST_HEADERS } from "@/configs/constans";
import { $axios } from "~/utils/api";

@Component
export default class RewardList extends Vue {
  search: string = "";
  isLoading = true;
  page = 1;

  headers: any[] = REWARD_LIST_HEADERS;
  items: any[] = [];

  async fetch() {
    const path = "rewards";
    const config = {
      headers: {
        'Authorization': this.$auth.getToken('admin_token')
      }
    }
    let rs = await this.$axios.get(path, config);
    
    if(rs && rs.status === 200) {
      this.items = rs.data.data
      this.isLoading = false;
    }
  }
}
</script>