<template>
  <div class="app__container-inner">
    <div class="app">
      <Header />
      <Parameters />
      <Content />
    </div>
  </div>
</template>

<style>
.app__container-inner {
  background: white;
  border: solid 20px white;
  border-radius: 10px;
}

.app {
  height: 100vh;
  overflow: auto;
  padding-top: 50px;
  padding-bottom: 150px;
  background-color: #f8f8f8;
  border-radius: 10px;
  font-family: Gotham Pro, "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  text-align: center;
}
</style>

<script>
import Header from "./components/Header";
import Parameters from "./components/Parameters";
import Content from "./components/Content";

export default {
  name: "App",
  components: {
    Header,
    Parameters,
    Content,
  },
};
</script>
