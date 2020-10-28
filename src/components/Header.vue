<template>
  <div class="container">
    <h1>LOREM IPSUM DOLOR SIT</h1>
    <div class="header__buttons">
      <div class="header__buttons-rooms">
        <p>КОМНАТЫ</p>
        <button>S</button>
        <button>1к</button>
        <button>2к</button>
        <button>3к</button>
      </div>
      <div class="header__buttons-floor">
        <p>ЭТАЖ</p>
        <input type="text" />
        <input type="text" />
        <div class="header__buttons-floor-range">
          <input type="range" />
        </div>
      </div>
      <div class="header__buttons-space">
        <p>ПЛОЩАДЬ, м&sup2;</p>
        <input type="text" />
        <input type="text" />
        <div class="header__buttons-space-range">
          <input type="range" />
        </div>
      </div>
      <div class="header__buttons-cost">
        <p>СТОИМОСТЬ, млн. р.</p>
        <input type="text" />
        <input type="text" />
        <div class="header__buttons-cost-range">
          <input type="range" />
        </div>
      </div>
      <button>ПРИМЕНИТЬ</button>
    </div>
  </div>
</template>

<style scoped>
.header__buttons {
  display: flex;
  justify-content: space-around;
}
</style>

<script>
export default {};
</script>
