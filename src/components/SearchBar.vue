<template>
  <div class="box">
    <input class="box__input" placeholder="Search..." type="text" />
    <div class="box__archives">
      <div class="box__archives__title">Archives</div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Select Archive...<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>2019/x/x</el-dropdown-item>
          <el-dropdown-item>2019/x/x</el-dropdown-item>
          <el-dropdown-item>2019/x/x</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="box__categories">
      <div class="box__categories__title">Categories</div>
      <div class="box__categories__item">Syntax</div>
      <div class="box__categories__item">Themes</div>
    </div>
    <div class="box__tags">
      <div class="box__tags__title">Tags</div>
      <div class="box__tags__item">
        <div class="box__tags__items">css</div>
        <div class="box__tags__items">emoji</div>
        <div class="box__tags__items">html</div>
        <div class="box__tags__items">markdown</div>
        <div class="box__tags__items">privacy</div>
        <div class="box__tags__items">node.js</div>
      </div>
    </div>
    <div class="box__recent">
      <div class="box__recent__title">Recent Posts</div>
      <div class="box__recent__item">
        <div class="box__recent__items">
          <div class="box__recent__items__title">Rich Content</div>
          <div class="box__recent__items__time">
            <img
              class="Icon-time"
              :src="require('../assets/time.png')"
              alt=""
            />
            <span>2019/03/10</span>
          </div>
        </div>
                <div class="box__recent__items">
          <div class="box__recent__items__title">Rich Content</div>
          <div class="box__recent__items__time">
            <img
              class="Icon-time"
              :src="require('../assets/time.png')"
              alt=""
            />
            <span>2019/03/10</span>
          </div>
        </div>
                <div class="box__recent__items">
          <div class="box__recent__items__title">Rich Content</div>
          <div class="box__recent__items__time">
            <img
              class="Icon-time"
              :src="require('../assets/time.png')"
              alt=""
            />
            <span>2019/03/10</span>
          </div>
        </div>
                <div class="box__recent__items">
          <div class="box__recent__items__title">Rich Content</div>
          <div class="box__recent__items__time">
            <img
              class="Icon-time"
              :src="require('../assets/time.png')"
              alt=""
            />
            <span>2019/03/10</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
::v-deep {
  .el-dropdown-link{
    font-size: 17px;
  }
}
.box {
  width: 402px;
  margin-left: 16px;
  &__input {
    width: 100%;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgb(93, 92, 92);
    }
    width: 100%;
    border: none;
    padding: 10px;
    box-sizing: border-box;
    font-size: 18px;
    height: 44px;
  }
  &__archives {
    width: 100%;
    background: #fff;
    margin-top: 12px;
    padding: 10px;
    box-sizing: border-box;
    &__title {
      color: rgb(55 65 81);
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
  &__categories {
    width: 100%;
    background: #fff;
    margin-top: 12px;
    padding: 10px;
    box-sizing: border-box;
    &__title {
      color: rgb(55 65 81);
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 20px;
    }
    &__item {
      color: rgb(31 41 55);
      text-align: center;
      padding: 10px;
      background: #fff;
      cursor: pointer;
      &:hover {
        transition: all 0.1s linear;
        background: rgb(218, 218, 218);
      }
    }
  }
  &__tags {
    width: 100%;
    background: #fff;
    margin-top: 12px;
    padding: 10px;
    box-sizing: border-box;
    &__title {
      color: rgb(55 65 81);
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 20px;
    }
    &__item {
      display: flex;
      flex-wrap: wrap;
      &s {
        color: rgb(31 41 55);
        text-align: center;
        padding: 10px;
        background-color: rgb(243 244 246);
        color: rgb(59 130 246);
        margin-right: 10px;
        margin-top: 10px;
        cursor: pointer;
        &:hover {
          transition: all 0.1s linear;
          color: rgb(31, 76, 147);
        }
      }
    }
  }
  &__recent {
    width: 100%;
    background: #fff;
    margin-top: 12px;
    padding: 10px;
    box-sizing: border-box;
    &__title {
      color: rgb(55 65 81);
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 20px;
    }
    &__item {
      display: flex;
      flex-direction: column;
      &s {
        color: #000;
        text-align: center;
        padding: 10px;
        background-color: #fff;
        margin-right: 10px;
        margin-top: 10px;
        text-align: left;
        cursor: pointer;
        &:hover {
          transition: all 0.1s linear;
          background-color: rgb(243 244 246);
        }
        &__title{
           color: rgb(55 65 81);
          font-size:20px;
          font-weight: 700;
        }
        &__time{
          margin-top: 5px;
           color: rgb(55 65 81);
           font-size: 14px;
        }
      }
    }
  }
}
</style>
