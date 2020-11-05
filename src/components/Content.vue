<template>
  <div class="container">
    <AppartmentCardInit />
    <AppartmentCardInit />
    <AppartmentCardInit />
    <AppartmentCardInit />
    <AppartmentCardInit />
    <AppartmentCardInit />
    <AppartmentCardInit />
    <AppartmentCardInit />
    <AppartmentCardInit />
    <AppartmentCardInit />
    <AppartmentCardInit />
    <AppartmentCardInit />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import AppartmentCardInit from "./AppartmentCardInit";
// сложить сюда данные из store (см. exallange)
export default {
  components: {
    AppartmentCardInit,
  },
};
</script>
