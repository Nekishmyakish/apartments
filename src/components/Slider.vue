<template>
  <div class="content">
    <div class="slider__info">
      <input type="text" class="slider__info-input" :value="minValue" />
      <p class="slider__info-dash">-</p>
      <input type="text" class="slider__info-input" :value="maxValue" />
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
      minValue: this.min,
      maxValue: this.max, 
      instance: undefined,
    };
  },
  mounted: function() {
    this.instance = new ZbRangeSlider(this.propId);
    this.instance.onChange = (min, max) => {
      this.updateValues(min, max);
      this.minValue = min;
      this.maxValue = max;
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
  text-align: center;
}

.slider__info-dash {
  margin: 0;
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
  width: 70%;
  height: 70%;
  background: #70d24e;
  border: 5px solid white;
  border-radius: 50%;
}
.slider .slider-line {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  width: 200px;
  left: 1px;
  top: 18px;
  height: 2px;
  border-radius: 4px;
  background: #d8d8d8;
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
