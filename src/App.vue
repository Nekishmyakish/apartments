<template>
  <div id="app">
    <Header />
    <Content ::min="min" :max="max" @update:min="value => min = value" @update:max="value => max = value"></Content>
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
