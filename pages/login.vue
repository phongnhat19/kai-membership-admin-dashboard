<template>
  <v-row class="pt-5">
    <v-col class="mx-auto" cols="10" sm="6" md="4" lg="4">
      <Logo class="mx-auto" />

      <v-form class="p-3" ref="form" v-model="valid" :lazy-validation="true">
        <v-text-field
          v-model="phone"
          :counter="10"
          :rules="phoneRules"
          label="Số điện thoại"
          required
        ></v-text-field>

        <v-text-field v-model="password" :rules="pwdRules" label="Mật khẩu" required></v-text-field>

        <v-btn block @click="logIn">Login</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  layout: "no-aside-menu",
})
export default class Login extends Vue {
  valid = false;

  phone = "";
  password = "";

  get phoneRules() {
    return [];
  }

  get pwdRules() {
    return [];
  }

  logIn() {
    this.$auth.setUser({
      username: "admin"
    });
  }
}
</script>

<style lang="scss" scoped>
.logo {
  height: 170px;
}
</style>