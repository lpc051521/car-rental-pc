<template>
  <div class="lists">
    <div class="top">
      <ul>
        <li>
          <p>姓名</p>
          <input type="text" />
        </li>
        <li class="no">
          <p>手机号</p>
          <input type="text" />
        </li>
        <li class="no">
          <p>身份证</p>
          <input type="text" />
        </li>
      </ul>
      <ul class="user">
        <li>
          <p>账号</p>
          <input type="text" />
        </li>
        <li class="ema">
          <p>邮箱</p>
          <input type="text" />
        </li>
      </ul>
      <ul class="big">
        <li class="ping">
          <p>驾驶券</p>
          <input type="text" />
        </li>
        <li class="ema">
          <p>积分</p>
          <input type="text" />
        </li>
        <li>
          <button>充值</button>
        </li>
      </ul>
    </div>
    <ul class="list">
      <li>
          <ul>
        <li>序号</li>
        <li>性别</li>
        <li>客户姓名</li>
        <li>手机号码</li>
        <li>支付金额</li>
        <li>驾驶券</li>
        <li>积分</li>
        <li>处理状态</li>
        <li>操作</li>
      </ul>
      </li>
      <li class="white" v-for="(item,index) in list" :key="index">
        <ul>
          <li>{{ v-moindex}}</li>
          <li>{{ item[1].sex }}</li>
          <li>{{ item[0].rentCarName }}</li>
          <li>{{ item[1].telNo }}</li>
          <li>{{ item[2].carPrice }}</li>
          <li>{{ item[1].driverTickets }}</li>
          <li>{{ item[1].points }}</li>
          <li>待审核</li>
          <li class="bian">编辑</li>
        </ul>
      </li>
    </ul>
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
      list: [],
    };
  },
  mounted() {
    this.$axios
      .get("http://172.25.7.159:8080/order/findAllByUserTelNo?tel=13953325567")
      .then(res => {
        console.log(res);
        this.list = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {

  },
  components: {}
};
</script>

<style scoped lang="less">
.lists {
  width: 1152px;
  background-color: #fff;
  margin-left: 30px;
  margin-top: 30px;
  overflow: hidden;
  .top {
    ul {
      overflow: hidden;
      margin-top: 36px;
      li {
        text-align: left;
        overflow: hidden;
        margin-left: 76px;
        float: left;
        p {
          float: left;
        }
        input {
          width: 146px;
          height: 24px;
          border: 1px solid #ccc;
          float: left;
          margin-left: 14px;
        }
      }
      .no {
        margin-left: 36px;
      }
      .ema {
        margin-left: 50px;
      }
    }
    .user {
      margin-top: 13px;
    }
    .big {
      margin-top: 59px;
      .ping {
        margin-left: 58px;
      }
      button {
        width: 68px;
        height: 24px;
        background-color: #ffcc00;
        border-radius: 5px;
        font-size: 14px;
      }
    }
  }
  .list {
    width: 100%;
    margin-top: 43px;
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
      .bian {
        color: #3896ff;
        font-size: 14px;
      }
      .bian:hover {
        cursor: pointer;
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
