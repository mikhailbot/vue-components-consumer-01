<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <social :sites="sites"></social>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    social:
      "url:https://raw.githubusercontent.com/mikhailbot/vue-components/master/src/components/Social.vue"
  },

  data() {
    return {
      sites: [
        { name: "Twitter", url: "https://twitter.com" },
        { name: "Facebook", url: "https://facebook.com" }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
