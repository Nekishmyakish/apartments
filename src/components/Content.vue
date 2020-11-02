<template>
  <div class="container">
    <div class="content__top">
      <AppartmentCardInit class />
      <AppartmentCardInit />
      <AppartmentCardInit />
      <AppartmentCardInit />
    </div>
    <div class="content__middle">
      <AppartmentCardInit />
      <AppartmentCardInit />
      <AppartmentCardInit />
      <AppartmentCardInit />
    </div>
    <div class="content__bottom">
      <AppartmentCardInit />
      <AppartmentCardInit />
      <AppartmentCardInit />
      <AppartmentCardInit />
    </div>
  </div>
</template>

<style scoped>
.content__top,
.content__middle,
.content__bottom {
  display: flex;
  align-content: center;
}

.content__top {
  margin-top: 50px;
}

.content__middle {
  margin-top: 30px;
  margin-bottom: 30px;
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
