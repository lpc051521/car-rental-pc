<template>
  <div class="title">
    <p>车辆预定</p>
    <img src="./img/icon-9.png" alt />
    <p class="two">预定管理</p>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
    };
  },

  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.title {
  width: 1152px;
  background-color: #fff;
  margin-left: 30px;
  margin-top: 30px;
  height: 64px;
  p {
    float: left;
    font-size: 18px;
    color: #333333;
    line-height: 64px;
    margin-left: 30px;
  }
  img {
    float: left;
    margin-top: 28px;
    margin-left: 13px;
  }
  .two {
    margin-left: 13px;
  }
}
</style>
