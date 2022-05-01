<template>
  <div id="page-container">
    <component :is="currentView"></component>
  </div>
</template>

<script>
import NotFound from './components/NotFound.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import { mapState } from 'pinia'
import {useLoginStore} from "./stores/login"

const routes = {
  "/": Home,
  biodata: Home,
  pembayaran: Home,
  ide: Home,
  login: Login,
  register: Register,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    ...mapState(useLoginStore, ['isLogin']),
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  created() {
    // if(!cekToken){
    //   localStorage.removeItem("PLAYBOX_TOKEN")
    //   useLoginStore.logout()
    // }
    if(!this.isLogin && (this.currentView != Login || this.currentView != Register)){
      window.location.href="#login";
    }
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<style>
@import "./assets/css/customize-bootstrap.css";
@import "./assets/css/style.css";
</style>
