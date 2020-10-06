<template>
  <v-card>
    <v-container v-if="!isLoading">
      <v-card-title>
        DANH SÁCH NGƯỜI DÙNG
        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Nhập để tìm kiếm..."
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :page="page"
        :headers="headers"
        :items="items"
        :search="search"
        :items-per-page="itemsPerPage"
        single-expand
        show-expand
      >
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">More info about {{ item.name }}</td>
        </template>
      </v-data-table>
    </v-container>
    <v-skeleton-loader v-else class="mx-auto" type="table"></v-skeleton-loader>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { ITEMS, HEADERS } from "@/utils/mock.data";

@Component
export default class CustomerList extends Vue {
  search: string = "";
  isLoading = true;
  page = 1;
  itemsPerPage = 6;

  headers: any[] = [];
  items = ITEMS;

  fetch() {
    setTimeout(() => {
      this.headers = HEADERS;
      this.isLoading = false;
    }, 333);
  }
}
</script>