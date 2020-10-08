<template>
  <v-row class="pt-5">
    <v-col class="mx-auto" cols="10" sm="6" md="4" lg="4">
      <v-list-item>
        <img class="kai_logo" src="/icon.png">
        <v-list-item-content>
          <v-list-item-title>KAI MEMBERSHIP</v-list-item-title>
          <v-list-item-subtitle>Admin portal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-form class="p-3" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="userName"
          counter
          :rules="userNameRules"
          label="Username"
          required
        ></v-text-field>
        <v-text-field
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="pwdRules"
            :type="show ? 'text' : 'password'"
            label="Password"
            counter
            @click:append="show = !show"
        ></v-text-field>

        <v-btn block @click="logIn">Login</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { $axios } from "~/utils/api";

@Component({
  layout: "no-aside-menu",
})

export default class Login extends Vue {
  valid = false;
  show = false;
  userName = "";
  password = "";

  get userNameRules() {
    return [
      (v: any) => !!v || 'Field is required'
    ];
  }

  get pwdRules() {
    return [
       (v: any) => !!v || 'Field is required'
    ];
  }

  async logIn() {
    let response = await this.$auth.loginWith('local', {
      data: {
        username: this.userName,
        password: this.password
      },
    });
  }
}
</script>

<style lang="scss" scoped>
  .kai_logo {
    height: 200px;
  }
</style>