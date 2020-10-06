import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { $axios } from "@/utils/api";

type User = {
  
}

type GetUserRequest = {
  limit?: number;
  page?: number;
  text?: string;
};

@Module({
  name: "users",
  stateFactory: true,
  namespaced: true,
})
export default class UserModule extends VuexModule {
  list: User[] = [];
  currentUser: User | null = null;
  total: number = 0;

  @Mutation
  setUsers(users: User[]) {
    this.list = users;
  }

  @Mutation
  setUser(user: User) {
    this.currentUser = user;
  }

  @Mutation
  setTotal(num: number) {
    this.total = num;
  }

  @Action
  async getUsers(payload: GetUserRequest) {
    try {
      const { page = 1, text = "", limit = 12 } = payload;
      const { data } = await $axios.get(
        `secure/users?page=${page}&limit=${limit}&text=${text}`
      );
      this.setUsers(data.data.data || []);
      this.setTotal(data.data.total);
    } catch (error) {
      return error.response;
    }  
  }
}
