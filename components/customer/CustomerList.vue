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
        <!-- <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">More info about {{ item.name }}</td>
        </template> -->
      </v-data-table>
    </v-container>
    <v-skeleton-loader v-else class="mx-auto" type="table"></v-skeleton-loader>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { REWARD_LIST_HEADERS } from "@/configs/constans";
import { GET } from "~/utils/api";

@Component
export default class CustomerList extends Vue {
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
    let rs = await GET(path, config);
    
    if(rs && rs.status === 200) {
      this.items = rs.data.data
      this.isLoading = false;
    }

  }
}
</script>