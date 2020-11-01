<template>
  <div class="container">
    <div class="parameters">
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
        <Slider propId="floor" min="0" max="10" />
      </div>
      <div>
        <p>ПЛОЩАДЬ, м&sup2;</p>
        <Slider propId="square" min="0" max="10" />
      </div>
      <div>
        <p>СТОИМОСТЬ, млн. р.</p>
        <Slider propId="cost" min="0" max="10" />
      </div>
      <div class="parameters__buttons-result">
        <button class="parameters__buttons-result_apply">ПРИМЕНИТЬ</button>
        <button class="parameters__buttons-result_discard">
          СБРОСИТЬ ФИЛЬТР
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parameters {
  text-align: left;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
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

.parameters__buttons-result {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.parameters__buttons-result_apply {
  margin-bottom: 15px;
  width: 201px;
  height: 40px;
  background: #70d24e;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  outline: none;
  font-weight: bold;
}

.parameters__buttons-result_discard {
  box-sizing: border-box;
  padding: 0;
  padding-bottom: 2px;
  background: #f8f8f8;
  border: none;
  border-bottom: solid 1px #70d24e;
  outline: none;
  width: 106px;
  font-size: 10px;
}

/* .parameters__buttons-rooms_1k {
  margin-left: 5px;
  margin-right: 2.5px;
}

.parameters__buttons-rooms_2k {
  margin-left: 2.5px;
  margin-right: 5px;
} */
</style>

<script>
import Slider from "./Slider";

export default {
  components: {
    Slider,
  },
};
</script>
