<template>
  <el-card
    ref="window"
    class="box-card"
    :style="`transform: translate(${latex}px,${latey}px);`"
  >
    <div
      slot="header"
      class="clearfix"
      ref="windowHeader"
      @mousedown="Drags($event, 'down')"
      @mouseup="Drags($event, 'up')"
    >
      <span>{{names}}</span>
      <el-button style="float: right; padding: 3px 0" @click="$emit('showbox')" type="text"
        >X</el-button
      >
    </div>
    <slot name="content"></slot>
    <!-- <div
      class="box-card-b"
      @mousedown="Drag($event, 'down')"
      @mouseup="Drag($event, 'up')"
    ></div> -->
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      OnDrag: false,
      x: null,
      y: null,
      top: null,
      width: null,
      windowInfo:' ',
      latex:null,
      latey:null
    };
  },
  
  props:['names'],
  methods: {
    bodyScroll(e) {
      let x = e.pageX - this.x;
      let y = e.pageY - this.y;
      this.window.style.height = this.height + y + "px";
      this.window.style.width = this.width + x + "px";
    },
    bodysScroll(e) {
      this.latex = e.pageX - this.x;
      this.latey  = e.pageY - this.y;
      // this.window.style.top = this.top + this.latex + "px";
      // this.window.style.left = this.left + this.latey + "px";
    },
    Drags(ee, e) {
      this.x = ee.pageX -this.latex;
      this.y = ee.pageY -this.latey;
      this.window = ee.path[2];
      this.boxs = ee.path[3];
      this.top = parseInt(this.window.style.top);
      this.left = parseInt(this.window.style.left);
      if (e == "down") {
        this.boxs.addEventListener("mousemove", this.bodysScroll);
      } else {
        this.boxs.removeEventListener("mousemove", this.bodysScroll);
      }
    },
    Drag(ee, e) {
      this.x = ee.pageX;
      this.y = ee.pageY;
      this.boxs = ee.path[3];
      this.window = ee.path[2];
      this.height = parseInt(this.window.style.height);
      this.width = parseInt(this.window.style.width);
      if (e == "down") {
        this.boxs.addEventListener("mousemove", this.bodyScroll);
      } else {
        this.boxs.removeEventListener("mousemove", this.bodyScroll);
      }
    },
    onc(e) {
      let obj = this.$refs.banner;
      if (e == "on") {
        obj.style.background = "rgb(255, 72, 72)";
        this.OnDrag = true;
      } else {
        obj.style.background = "rgb(255, 0, 0)";
        this.OnDrag = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.boxs {
  position: relative;
  z-index: 99999;

}
.box-card {
  position: fixed;
  transition-duration: 0ms !important;
  box-sizing: border-box;
width: 600px; top:80px; left: 500px
}
.clearfix:active{
     cursor:move;
}
.box-card-b {
  background-color: rgb(219, 235, 0);
  width: 10px;
  height: 15px;
  position: absolute;
  right: 1px;
  bottom: 1px;
}
.box-card-b:hover {
  background-color: rgb(242, 255, 59);
  width: 10px;
  height: 15px;
  position: absolute;
  right: 1px;
  bottom: 1px;
  cursor:se-resize;
}
::v-deep {
  -webkit-transition: none;
  transition: none;
  .el-card__body {
    height: 100%;
    width: 100%;
      box-sizing: border-box;
  }
}
</style>