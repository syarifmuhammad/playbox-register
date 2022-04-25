<template>
  <div id="page-container">
    <component :is="currentView"></component>
  </div>
</template>

<script>
import NotFound from './components/NotFound.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
const routes = {
  '/': Home,
  '/login': Login
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<style>
@import "./assets/css/customize-bootstrap.css";
@import "./assets/css/style.css";

</style>
