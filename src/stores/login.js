import { defineStore } from "pinia";

export const useLoginStore = defineStore({
  id: "login",
  state: () => ({
    isLogin: localStorage.PLAYBOX_TOKEN || false,
    token: localStorage.PLAYBOX_TOKEN,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    login() {
      this.isLogin = true
    },
    logout() {
      localStorage.removeItem('PLAYBOX_TOKEN')
      this.token = ""
      this.isLogin = false
      window.location.href = "#login"
    }
  },
});
