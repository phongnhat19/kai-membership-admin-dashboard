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
        <div v-if="showError" class="error-meesage">User name or password invalid</div>
        <v-btn block @click="logIn">Login</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { DEFAULT_STRATEGY } from "~/configs/constans";
import { $axios } from "~/utils/api";

@Component({
  layout: "no-aside-menu",
})

export default class Login extends Vue {
  valid = false;
  show = false;
  userName = "";
  password = "";
  showError = false;

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
    if(!(this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      return 
    }
    try {
      let response = await this.$auth.loginWith(DEFAULT_STRATEGY, {
        data: {
          username: this.userName,
          password: this.password
        },
      });
      this.showError = false;
    } catch (error) {
      console.log("Error");
      this.showError = true;
      return
    }
  }
}
</script>

<style lang="scss" scoped>
  .kai_logo {
    height: 200px;
  }
  .error-meesage {
    font-size: 14px;
    color: red;
    font-weight: 200;
    font-style: italic;
    margin-bottom: 20px;
  }
</style>