<template>
  <div id="app">
    <Header />
    <Parameters />
    <AppartmentCard />
  </div>
</template>

<style>
#app {
  background-color: #f8f8f8;
  font-family: Gotham Pro, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  border: 20px solid black;
}
</style>

<script>
import Header from "./components/Header"
import Parameters from "./components/Parameters";
import AppartmentCard from "./components/AppartmentCard";

export default {
  name: "App",
  components: {
    Header,
    Parameters,
    AppartmentCard,
  },
};
</script>
