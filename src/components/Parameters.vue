<template>
  <div class="container">
    <div class="parameters">
      <div>
        <p class="parameters__text">КОМНАТЫ</p>
        <div>
          <button class="parameters__buttons-rooms">S</button>
          <button class="parameters__buttons-rooms_1k">1к</button>
          <button class="parameters__buttons-rooms_2k">2к</button>
          <button class="parameters__buttons-rooms">3к</button>
        </div>
      </div>
      <div>
        <p class="parameters__text">ЭТАЖ</p>
        <Slider propId="floor" :minThreshold=1 :maxThreshold=99 :min=1 :max=99 />
      </div>
      <div>
        <p class="parameters__text">ПЛОЩАДЬ, м&sup2;</p>
        <Slider propId="square" :minThreshold=99 :maxThreshold=999 :min=99 :max=999 />
      </div>
      <div>
        <p class="parameters__text">СТОИМОСТЬ, млн. р.</p>
        <Slider propId="cost" :minThreshold=9.9 :maxThresholdx=99.9 :min=9.9 :max=99.9 />
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
}

.parameters__text {
  margin: 0;
  margin-bottom: 5px;
}

.parameters__buttons-rooms,
.parameters__buttons-rooms_1k,
.parameters__buttons-rooms_2k {
  display: inline-block;
  color: rgb(68, 68, 68);
  text-decoration: none;
  user-select: none;
  outline: none;
  background: rgb(245, 245, 245) linear-gradient(#f4f4f4, #f1f1f1);
  transition: all 0.218s ease 0s;
  font-weight: bold;
  font-size: 16px;
  width: 47px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  border-radius: 5px;
}

.parameters__buttons-result_apply:hover,
.parameters__buttons-result_discard:hover {
  color: white;
  border: 1px solid rgb(198, 198, 198);
  background: #4f9637;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.parameters__buttons-rooms:hover,
.parameters__buttons-rooms_1k:hover,
.parameters__buttons-rooms_2k:hover {
  color: white;
  border: 1px solid rgb(198, 198, 198);
  background: #70d24e;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.parameters__buttons-rooms:active,
.parameters__buttons-rooms_1k:active,
.parameters__buttons-rooms_2k:active,
.parameters__buttons-result_apply:active,
.parameters__buttons-result_discard:active {
  color: rgb(51, 51, 51);
  border: 1px solid rgb(204, 204, 204);
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
}

.parameters__buttons-rooms_1k {
  margin-left: 5px;
  margin-right: 2.5px;
}

.parameters__buttons-rooms_2k {
  margin-left: 2.5px;
  margin-right: 5px;
}

.parameters__buttons-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 23px;
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
  font-weight: bold;
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
