<template>
  <div class="box">
    {{ num + 1 }}\{{ cont + 1 }}
    <background v-if="boxnum === 0" />
    <br />
    <navs v-if="boxnum === 1" />
    <br />
    <font-size v-if="boxnum === 2" />
    <font-text-size v-if="boxnum === 3" />
    <font-line-haight v-if="boxnum === 4" />
    <el-button
      v-if="cont !== num"
      type="primary"
      :loading="states"
      @click="Onnext"
      >next</el-button
    >
    <el-button
      v-if="cont === num && boxnum !== 4"
      type="primary"
      :loading="states"
      @click="Onnext"
      >next</el-button
    >
    <el-button
      v-if="cont === num && boxnum === 4"
      type="primary"
      :loading="states"
      @click="submits"
      >submit</el-button
    >
  </div>
</template>
<script>
import background from "./components/backgroud.vue";
import navs from "./components/nav.vue";
import FontSize from "./components/FontSize.vue";
import FontTextSize from "./components/FontTextSize.vue";
import FontLineHaight from "./components/FontLineHaight.vue";
import axios from "../../config/api";
export default {
  components: { background, navs, FontSize, FontTextSize, FontLineHaight },
  data() {
    return {
      states: false,
      cont: this.$store.state.cont,
      num: this.$store.state.num,
      boxnum: 0,
    };
  },
  watch: {
    conts(e) {
      this.cont = e;
    },
  },
  computed: {
    conts() {
      return this.$store.state.cont;
    },
  },
  methods: {
    Onnext() {
      if (this.boxnum === 4) {
        const data = {
          Background: this.$store.state.Background,
          nav: this.$store.state.nav,
          FontSizeTitle: this.$store.state.FontSizeTitle,
          FontSizeText: this.$store.state.FontSizeText,
          LineHeight: this.$store.state.LineHeight,
        };
        this.$store.commit("setdata", data);
        this.$store.commit("setnum");
        console.log(this.$store.state.datas);
        this.$emit("Reshowbox");
      }
      this.boxnum = ++this.boxnum;
    },
    submits() {
      if (!localStorage.getItem("Id")) {
        this.$message({
          type: "error",
          message: "没有Id",
        });
        return;
      }
      this.states = true;
      axios
        .post("users/setData", {
          data: [...this.$store.state.datas],
          Id: localStorage.getItem("Id"),
        })
        .then((res) => {
          this.states = false;
          this.$emit("showbox");
          this.$message({
            type: "success",
            message: res.data.msg,
          });
        });
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