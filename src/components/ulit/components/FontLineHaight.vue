<template>
  <div class="box">
    <div class="box__item">
      <div class="box__item__title">Line height of text</div>
      <div class="box__item__slider">
        <div class="box__item__slider__item">
          <span class="demonstration"></span>
          <el-slider
            v-model="LineHeight"
            :min="5"
            :max="50"
            :marks="marks[0]"
            style="flex: 1"
          ></el-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      background: null,
      LineHeight: 0,
      marks: [
        {
          5: "5",
          50: "50",
        },
      ],
    };
  },
  created() {
        let data = parseInt(this.$rand(5, 50));
    this.LineHeight = data;
  },
  watch: {
    LineHeights(e) {
       this.$store.state.LineHeight=e
    },
  },
  computed: {
    LineHeights() {
      return this.LineHeight;
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
    margin-bottom: 10px;
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