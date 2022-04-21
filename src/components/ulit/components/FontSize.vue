<template>
  <div class="box">
    <div class="box__item">
      <div class="box__item__title">Font size of blog title</div>
      <div class="box__item__slider">
        <div class="box__item__slider__item">
          <span class="demonstration"></span>
          <el-slider
            v-model="FontSizeTitle"
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
      FontSizeTitle: 0,
      FontSizeText: 0,
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
    this.FontSizeTitle = data;

  },
  watch: {
    FontSizeTitles(e) {
      this.$store.state.FontSizeTitle=e
    },
  },
  computed: {
    FontSizeTitles() {
      return this.FontSizeTitle;
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