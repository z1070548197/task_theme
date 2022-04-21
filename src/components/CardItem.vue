<template>
  <div>
    <el-card v-for="(item, index) in CardList" :key="index" shadow="hover">
      <template>
        <img class="url" :src="item.url" alt="" />
        <div class="content">
          <div class="content__title" :style="{'font-size':FontSizeTitle}">{{ item.title }}</div>
          <p class="content__detailed" :style="{'font-size':FontSizeText,'line-height':LineHeight}">{{ item.detailed }}</p>
          <div class="content__time">
            <img
              class="Icon-time"
              :src="require('../assets/time.png')"
              alt=""
            />
            {{ item.time }}
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CardList: [
        {
          url: require("../assets/default.jpg"),
          title: "Image Test",
          detailed:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla dui eu mi iaculis, sit amet congue lacus porta. Ut nec p...",
          time: "2020/08/14",
        },
        {
          url: require("../assets/default.jpg"),
          title: "Image Test",
          detailed:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla dui eu mi iaculis, sit amet congue lacus porta. Ut nec p...",
          time: "2020/08/14",
        },
        {
          url: require("../assets/default.jpg"),
          title: "Image Test",
          detailed:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla dui eu mi iaculis, sit amet congue lacus porta. Ut nec p...",
          time: "2020/08/14",
        },
        {
          url: require("../assets/default.jpg"),
          title: "Image Test",
          detailed:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla dui eu mi iaculis, sit amet congue lacus porta. Ut nec p...",
          time: "2020/08/14",
        },
        {
          url: require("../assets/default.jpg"),
          title: "Image Test",
          detailed:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla dui eu mi iaculis, sit amet congue lacus porta. Ut nec p...",
          time: "2020/08/14",
        },
      ],
      FontSizeTitle:`${this.$store.state.FontSizeTitle}px`,
      FontSizeText:`${this.$store.state.FontSizeText}px`,
      LineHeight:`${this.$store.state.LineHeight}px`
    };
  },
  watch: {
    FontSizeTitles(e) {
     this.FontSizeTitle=e+'px';
    },
    FontSizeTexts(e) {
      this.FontSizeText=e+'px';
    },
    LineHeights(e) {
     this.LineHeight=e+'px';
    },
  },
  computed: {
    FontSizeTitles() {
      return this.$store.state.FontSizeTitle;
    },
    FontSizeTexts() {
      return this.$store.state.FontSizeText;
    },
    LineHeights() {
      return this.$store.state.LineHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .el-card {
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
    opacity: 0.85;
  }
  .el-card__body {
    display: flex;
    padding: 13px;
  }
  .el-card:hover {
    transform: scale(1.01) translateY(-5px);
    transition: all 0.2s linear;
  }
}
.url {
  width: auto;
  height: 176px;
}
.content {
  margin-left: 20px;
  margin-top: 10px;
  position: relative;

  &__title {
    color: rgb(17 24 39);
    font-weight: 700;
    font-size: 19px;
    text-align: left;
  }
  &__detailed {
    color: rgb(55 65 81);
    font-size: 16px;
    text-align: left;
    line-height: 20px;
   
  }
  &__time {
    position: absolute;
    right: 0px;
    bottom: 0px;
    font-size: 14px;
    color: rgb(95, 95, 95);
  }
}
</style>