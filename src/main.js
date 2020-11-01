import Vue from "vue";
import Vuex from 'vuex'
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    roomType: "S",
    minFloorRange: 1,
    maxFloorRange: 99,
    minSquareRange: 99,
    maxSquareRange: 999,
    minCostRange: 9.9,
    maxCostRange: 99.9,
    floats: [   {
      "building_id": 73,
      "​building_name": "FreePark",
      "​​​floor": 10,
      "​​id": 23329,
      "​​is_studio": 1,
      "name": "FreePark",
      "​number": "163",
      "plan": "/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
      "​porch":3,
      "​​price_full": 2956317,
      "price_promo": null,
      "price_real": 2956317,
      "promo_list": "",
      "rooms": 1,
      "short": "XS",
      "square": 23.66,
      "state": 0,
      "stype": 1
   },
   {
      "building_id": 74,
      "​building_name": "FreePark",
      "​​​floor":4,
      "​​id":20822,
      "​​is_studio":1,
      "name": "FreePark",
      "​number":"163",
      "plan": "/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
      "​porch":3,
      "​​price_full":2992701,
      "price_promo": null,
      "price_real": 2992701,
      "promo_list": "",
      "rooms": 1,
      "short": "XS",
      "square": 23.87,
      "state": 0,
      "stype": 1
   },
   {
      "building_id": 75,
      "​building_name":"FreePark",
      "​​​floor":4,
      "​​id":20382,
      "​​is_studio":1,
      "name": "FreePark",
      "​number":"163",
      "plan": "/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
      "​porch":3,
      "​​price_full":4952721,
      "price_promo": null,
      "price_real": 4952721,
      "promo_list": "",
      "rooms": 2,
      "short": "2k",
      "square": 42.87,
      "state": 0,
      "stype": 1
   },
   {
      "building_id": 75,
      "​building_name":"FreePark",
      "​​​floor":4,
      "​​id":20332,
      "​​is_studio":1,
      "name": "FreePark",
      "​number":"163",
      "plan": "/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
      "​porch":3,
      "​​price_full":8862732,
      "price_promo": null,
      "price_real": 8862732,
      "promo_list": "",
      "rooms": 3,
      "short": "3k",
      "square": 42.87,
      "state": 0,
      "stype": 1
   },
   {
      "building_id": 32,
      "building_name":"FreePark",
      "​​floor":10,
      "​id":20328,
      "​is_studio":1,
      "name": "FreePark",
      "number":"163",
      "plan": "/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
      "porch":3,
      "​​price_full":8862732,
      "price_promo": null,
      "price_real": 3956319,
      "promo_list": "",
      "rooms": 1,
      "short": "XS",
      "square": 24.99,
      "state": 0,
      "stype": 1
   },
   {
      "building_id": 37,
      "building_name":"FreePark",
      "​​​floor":10,
      "​id":20320,
      "​is_studio":1,
      "name": "FreePark",
      "​number":"163",
      "plan": "/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
      "​porch":3,
      "​​price_full":8862732,
      "price_promo": null,
      "price_real": 3956319,
      "promo_list": "",
      "rooms": 1,
      "short": "XS",
      "square": 24.99,
      "state": 0,
      "stype": 1
   },
   {
      "building_id": 17,
      "building_name":"FreePark",
      "​​floor":10,
      "​id":33320,
      "​is_studio":1,
      "name": "FreePark",
      "number":"163",
      "plan": "/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
      "porch":3,
      "​​price_full":8862732,
      "price_promo": null,
      "price_real": 5956315,
      "promo_list": "",
      "rooms": 1,
      "short": "2",
      "square": 45.36,
      "state": 0,
      "stype": 1
   },
   {
      "building_id": 13,
      "building_name":"FreePark",
      "​​floor":10,
      "​​id":33320,
      "​​is_studio":1,
      "name": "FreePark",
      "number":"163",
      "plan": "/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
      "porch":3,
      "​​price_full":8862732,
      "price_promo": null,
      "price_real": 9956316,
      "promo_list": "",
      "rooms": 4,
      "short": "4",
      "square": 66.60,
      "state": 0,
      "stype": 1
   }],
    showedFloats: []
  },
  mutations: {
    setFloorRange(state, min, max) {
      state.minFloorRange = min;
      state.maxFloorRange = max;
    },
    setSquareRange (state, min, max) {
      state.minSquareRange = min;
      state.maxSquareRange = max;
    },
    setCostRange (state, min, max) {
      state.minCostRange = min;
      state.maxCostRange = max;
    },
    setRoomType (state, roomType) {
      state.roomType = roomType;
    }
  }
})

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
