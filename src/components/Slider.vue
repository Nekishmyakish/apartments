<template>
  <div class="content">
    <div class="slider__info">
      <input type="text" class="slider__info-input" />
      <p>-</p>
      <input type="text" class="slider__info-input" />
    </div>
    <div
      v-bind:id="propId"
      :se-min="minThreshold"
      :se-step="step"
      :se-min-value="min"
      :se-max-value="max"
      :se-max="maxThreshold"
      class="slider"
    >
      <div class="slider-touch-left">
        <span></span>
      </div>
      <div class="slider-touch-right">
        <span></span>
      </div>
      <div class="slider-line">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import ZbRangeSlider from "./ZbRangeSlider";
export default {
  props: {
    propId: {
      type: String,
      required: true,
    },
    minThreshold: {
      type: Number,
      default: -100,
    },
    maxThreshold: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  data: function() {
    return {
      instance: undefined,
    };
  },
  mounted: function() {
    this.instance = new ZbRangeSlider(this.propId);
    this.instance.onChange = (min, max) => {
      this.updateValues(min, max);
      console.log(min, max);
    };
  },
  destroyed: function() {},
  methods: {
    updateValues: function(min, max) {
      this.$emit("update:min", min);
      this.$emit("update:max", max);
    },
  },
};
</script>

<style>
.slider__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slider__info-input {
  font-size: 16px;
  width: 80px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
}

.slider {
  display: block;
  position: relative;
  height: 36px;
  width: 200px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.slider .slider-touch-left,
.slider .slider-touch-right {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 36px;
  width: 36px;
  padding: 6px;
  z-index: 2;
}
.slider .slider-touch-left span,
.slider .slider-touch-right span {
  display: block;
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  border: 1px solid #a4a4a4;
  border-radius: 50%;
}
.slider .slider-line {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  width: 175px;
  left: 18px;
  top: 16px;
  height: 4px;
  border-radius: 4px;
  background: #f0f0f0;
  z-index: 0;
  overflow: hidden;
}
.slider .slider-line span {
  display: block;
  height: 100%;
  width: 0%;
  background: #70d24e;
}
</style>
