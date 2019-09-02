<template>
  <div class="lists">
    <div class="list">
      <ul>
        <li>租赁方式</li>
        <li>客户姓名</li>
        <li>电话号码</li>
        <li>车型</li>
        <li>证件类型</li>
        <li>证件号码</li>
        <li>取车时间</li>
        <li>操作</li>
      </ul>

      <ul class="white" v-for="(item,index) in list" :key="index">
        <li>{{ item.rentTime }}</li>
        <li>{{ item.name }}</li>
        <li>{{ item.telNo }}</li>
        <li>{{ item.carName }}</li>
        <li>身份证</li>
        <li>{{ item.personId }}</li>
        <li>{{ item.getCarTime }}</li>
        <li>
          <span v-if="item.orderStatus">已受理</span>
          <span v-if="!item.orderStatus">未受理</span>
          </li>
      </ul>
    </div>
    <div class="math">
      <ul>
        <li>上一页</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li class="dian">...</li>
        <li>36</li>
        <li>下一页</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
        list:[],
    };
  },
  mounted() {
    this.$axios
      .get(
        "http://172.25.7.159:8081/order/findAll"
      )
      .then(res => {
        console.log(res);
        this.list = res.data.list;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.lists {
  width: 1152px;
  background-color: #fff;
  margin-left: 30px;
  // margin-top: 30px;
  overflow: hidden;
  .list {
    width: 100%;
    // margin-top: 30px;
    background-color: #ffe009;
    overflow: hidden;
    ul {
      display: flex;
      height: 48px;
      li {
        line-height: 48px;
        flex: 1;
        font-size: 14px;
        color: #333333;
      }
    }
    .white {
      background: #fff;
    }
    .color {
      background-color: #fffce3;
    }
  }
  .math {
    width: 100%;
    height: 65px;
    overflow: hidden;
    ul {
      margin-top: 20px;
      margin-left: 360px;
      li {
        float: left;
        text-align: left;
        padding: 5px 10px;
        border: 1px solid #ccc;
        font-size: 12px;
        color: #333333;
        margin-left: 10px;
      }
      .dian {
        border: none;
      }
    }
  }
}
</style>
