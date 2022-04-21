<template>
  <div class="home ContentBox">
    <div class="left">
      <CardItem />
    </div>
    <div class="right">
      <search-bar />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import CardItem from '../components/CardItem.vue'
export default {
  name: "HomeView",
  components: {
    SearchBar,CardItem
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  .left {
    flex: 1;
  }
  .right {
    
  }
}
</style>
