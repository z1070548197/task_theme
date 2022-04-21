<template>
  <div class="box">
    <div class="box__item">
      <div class="box__item__title">
        nav color
        <div class="boxs" :style="[background]"></div>
      </div>
      <div class="box__item__slider">
        <div class="box__item__slider__item">
          <span class="demonstration">H:</span>
          <el-slider
            v-model="backgroundHSV[0]"
            :max="360"
            :marks="bacgroundmarks[0]"
            style="flex: 1"
          ></el-slider>
        </div>
        <div class="box__item__slider__item">
          <span class="demonstration">S:</span>
          <el-slider
            v-model="backgroundHSV[1]"
            :max="100"
            :marks="bacgroundmarks[1]"
            style="flex: 1"
          ></el-slider>
        </div>
        <div class="box__item__slider__item">
          <span class="demonstration">V:</span>
          <el-slider
            v-model="backgroundHSV[2]"
            :max="100"
            :marks="bacgroundmarks[2]"
            style="flex: 1"
          ></el-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hsvToRgb,rgbToHsv } from "../../../ulit/HSVtoRGB.js";
export default {
     data() {
    return {
      background: null,
      backgroundHSV:[0,0,0],
      bacgroundmarks: [
        {
          0: "0",
          360: "360",
        },
        {
          0: "0",
          100: "100",
        },
        {
          0: "0",
          100: "100",
        },
      ],
    };
  },
  created() {
        let data = [
      parseInt(this.$rand(0, 360)),
      parseInt(this.$rand(0, 100)),
      parseInt(this.$rand(0, 100)),
    ];
      this.backgroundHSV=rgbToHsv(data)
  },
  watch: {
    colorNum(e) {
      let rgbA = hsvToRgb(e);
      this.$store.commit('setNav',rgbA) 
    },
  },
  computed: {
    colorNum() {
      return this.backgroundHSV;
    },
  },
};
</script>


<style lang="scss" scoped>
.box {
  .boxs {
    width: 30px;
    height: 30px;
  }
  &__item {
    width: 100%;
    &__title {
      display: flex;
      color: rgb(52, 153, 255);
    }
    &__slider {
      display: flex;
      flex-direction: column;
      &__item {
        display: flex;
        .demonstration {
          margin-right: 20px;
          text-align: left;
          line-height: 40px;
        }
      }
    }
  }
}
</style>