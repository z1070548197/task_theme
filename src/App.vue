<template>
  <div id="app" :style="{ background }">
    <nav :style="{ background: nav }">
      <div class="nav">
        <div class="logo">
          <el-tooltip
            class="item"
            effect="dark"
            content="Press this button to pick preferred values for parameters"
            placement="bottom"
          >
            <el-button @click="showbox">点我</el-button>
          </el-tooltip>
          Blonde
        </div>
        <div class="navbar">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/Contact">Contact</router-link>
        </div>
      </div>
    </nav>
    <card v-if="cardshow" style="z-index: 2" names="面板" @showbox="showbox">
      <template #content>
        <ulit @showbox="showbox" @Reshowbox="Reshowbox" />
      </template>
    </card>
    <router-view />
    <div class="footer" :style="{ background: nav }">
      © 2022 zcc <br />
      Powered by zcc, Theme zcc.
    </div>
  </div>
</template>

<script>
import ulit from "./components/ulit/ulit.vue";
import card from "./components/card.vue";
import axios from "./config/api";
export default {
  data() {
    return {
      cardshow: false,
      background: null,
      nav: null,
    };
  },
  created() {
    this.info();
  },
  watch: {
    backgrounds(e) {
      this.background = `rgb(${e[0]},${e[1]},${e[2]})`;
    },
    navs(e) {
      this.nav = `rgb(${e[0]},${e[1]},${e[2]})`;
    },
  },
  computed: {
    backgrounds() {
      return this.$store.state.Background;
    },
    navs() {
      return this.$store.state.nav;
    },
  },
  components: { card, ulit },
  methods: {
    info() {
      this.$prompt("Id:", "提示", {
        confirmButtonText: "确定",
        inputErrorMessage: "Id",
        closeOnClickModal: false,
        closeOnPressEscape: false,
        showCancelButton: false,
        showClose: false,
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "加载中...";
            axios
              .post("/users/login", { Id: instance.inputValue })
              .then((res) => {
                if (res.data.onerror === 0) {
                  localStorage.setItem("Id", instance.inputValue);
                  this.$message({
                    type: "success",
                    message: res.data.msg,
                  });
                  instance.confirmButtonLoading = false;
                  done();
                  return;
                }
                if (res.data.onerror === 1) {
                  instance.confirmButtonLoading = false;
                  instance.confirmButtonText = "确定";
                  /// localStorage.setItem("Id", instance.inputValue);
                  this.$message({
                    type: "error",
                    message: "id已存在请重新输入",
                  });
                  //this.$store.commit("setStore", res.data.data.data);

                  // done();
                  return;
                }
              });
          } else {
            done();
          }
        },
      })
        .then()
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
      const bg = this.$store.state.Background;
      this.background = `rgb(${bg[0]},${bg[1]},${bg[2]})`;
      const nav = this.$store.state.nav;
      this.nav = `rgb(${nav[0]},${nav[1]},${nav[2]})`;
    },
    showbox() {
      this.cardshow = this.cardshow ? false : true;
    },
    Reshowbox() {
      this.cardshow = this.cardshow ? false : true;
      this.$nextTick(() => {
        this.cardshow = this.cardshow ? false : true;
      });
    },
  },
};
</script>

<style lang="scss" >
@import "./css/index.scss";
.Icon-time {
  width: 12px;
  height: 12px;
}
#app {
  transition: background 50ms linear;
  min-height: 100vh;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    segoe ui, Roboto, helvetica neue, Arial, noto sans, sans-serif,
    apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
