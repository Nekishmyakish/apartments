<template>
  <div id="app">
    <Header />
    <Content />
  </div>
</template>

<style>
#app {
  background-color: #f8f8f8;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
import Header from "./components/Header";
import Content from "./components/Content";

export default {
  name: "App",
  components: {
    Header,
    Content,
  },
};
</script>
