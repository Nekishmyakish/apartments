<template>
  <div class="container">
    <div class="parameters__buttons">
      <div>
        <p>КОМНАТЫ</p>
        <div>
          <button class="parameters__buttons-rooms">S</button>
          <button class="parameters__buttons-rooms_1k">1к</button>
          <button class="parameters__buttons-rooms_2k">2к</button>
          <button class="parameters__buttons-rooms">3к</button>
        </div>
      </div>
      <div>
        <p>ЭТАЖ</p>
        <div class="parameters__info">
          <input type="text" class="parameters__input" />
          <p>-</p>
          <input type="text" class="parameters__input" />
        </div>
        <Slider />
      </div>
      <div>
        <p>ПЛОЩАДЬ, м&sup2;</p>
        <div class="parameters__info">
          <input type="text" class="parameters__input" />
          <p>-</p>
          <input type="text" class="parameters__input" />
        </div>
        <Slider />
      </div>
      <div>
        <p>СТОИМОСТЬ, млн. р.</p>
        <div class="parameters__info">
          <input type="text" class="parameters__input" />
          <p>-</p>
          <input type="text" class="parameters__input" />
        </div>
        <Slider />
      </div>
      <button>ПРИМЕНИТЬ</button>
    </div>
  </div>
</template>

<style scoped>
.parameters__buttons {
  text-align: left;
  display: flex;
  justify-content: space-around;
}

.parameters__buttons-rooms,
.parameters__buttons-rooms_1k,
.parameters__buttons-rooms_2k {
  font-weight: bold;
  font-size: 16px;
  width: 47px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  border-radius: 5px;
}

/* .parameters__buttons-rooms_1k {
  margin-left: 5px;
  margin-right: 2.5px;
}

.parameters__buttons-rooms_2k {
  margin-left: 2.5px;
  margin-right: 5px;
} */

.parameters__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.parameters__input {
  font-size: 16px;
  width: 80px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
}
</style>

<script>
import Slider from "./Slider";

export default {
  components: {
    Slider,
  },
};
</script>
