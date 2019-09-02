<template>

  <div class="clearing">
    <div class="top">
      <span>费用结算</span>
      <img src="./img/icon-9.png" alt />
      <span>费用结算管理</span>
    </div>
    <div class="bottom">
      <div class="text">
        <div class="one">
          <input type="text" placeholder="请输入手机号" />
          <button>搜索</button>
        </div>
        <div class="two">
          <input type="text" placeholder="请输入车型" />
          <button>搜索</button>
        </div>
        <div class="three">
          <input type="text" placeholder="时间 2019-8-21" />
          <button>搜索</button>
          <img src="./img/icon-1.png" alt />
        </div>
      </div>

      <div class="list">
        <ul class="yellow">
          <li>租赁方式</li>
          <li>客户姓名</li>
          <li>电话号码</li>
          <li>车型</li>
          <li>证件类型</li>
          <li>证件号码</li>
          <li>取车时间</li>
          <li>操作</li>
        </ul>
        <ul class="list_s">
          <li v-for="(item,index) in list" :key="index">
            <ul>
              <li>{{ item[0].rentType }}</li>
              <li>{{ item[2].carOwner }}</li>
              <li>{{ item[1].telNo }}</li>
              <li>{{ item[2].carName }}</li>
              <li>身份证</li>
              <li>{{ item[1].personId }}</li>
              <li>{{ item[0 ].getCarTime }}</li>
              <li>
                <span class="red">未受理</span>
              </li>
            </ul>
          </li>         
        </ul>
      </div>
      <div class="page">
        <div class="left">上一页</div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>···</li>
          <li>36</li>
        </ul>
        <div class="right">下一页</div>
      </div>
    </div>
    <footer>
        <p>Copyright@2014-2019 泸ICP备 34428597号</p>
    </footer>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      list:[]
    };
  },
   mounted() {
    this.$axios
      .get(
        "http://172.25.7.159:8080/order/findAllByUserTelNo?tel=13953325567"
      )
      .then(res => {
        console.log(res);
        this.list = res.data;
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
.clearing {
  width: 1203px;
  height: 895px;
  background: #f4f4f4;
  padding: 33px 30px;
  box-sizing: border-box;
  float: right;
  .top {
    width: 1152px;
    height: 64px;
    background: white;
    line-height: 64px;
    font-size: 18px;
    color: #333;
    display: flex;
    span {
      margin-left: 30px;
    }
    span:nth-child(3) {
      margin-left: 0px;
    }
    img {
      width: 7px;
      height: 9px;
      margin: 28px 12px;
    }
  }
  .bottom {
    width: 100%;
    background: white;
    font-size: 0;
    padding: 30px 0;
    box-sizing: border-box;
    margin-top: 30px;
    .text {
      width: 100%;
      display: flex;
      margin: 0 30px;
      div {
        display: flex;
        input {
          width: 190px;
          height: 40px;
          border: 1px solid #ccc;
          text-indent: 7px;
        }
        button {
          width: 77px;
          height: 40px;
          background: #ffe009;
          font-size: 18px;
          line-height: 18px;
          color: #333;
          cursor: pointer;
        }
      }
      .two {
        margin-left: 30px;
      }
      .three {
        position: relative;
        margin-left: 30px;
        input {
          text-indent: 11px;
        }
        img {
          position: absolute;
          top: 7px;
          right: 87px;
        }
      }
    }
    .list {
      width: 100%;
      margin-top: 30px;
      .yellow {
        width: 100%;
        display: flex;
        li {
          width: 144px;
          height: 44px;
          background: #ffe009;
          font-size: 14px;
          line-height: 44px;
          color: #333;
        }
      }
      .list_s {
        li {
          width: 100%;
          height: 44px;
          line-height: 44px;
          display: flex;
          ul {
            display: flex;
            li {
              width: 144px;
              justify-content: center;
              font-size: 14px;
              color: #333;
            }
            .red {
              color: #ff3838;
            }
            .blue {
              color: #4c9eff;
            }
          }
        }
        .pink {
          background: #fff9ce;
        }
      }
    }
    .page {
      width:372px;
      display:flex;
      margin:30px auto 0 auto;
      .left {
        width: 58px;
        height: 24px;
        border: 1px solid #ccc;
        font-size: 12px;
        color: #999;
        line-height:22px;
        cursor:pointer;
      }
      .right {
        width: 58px;
        height: 24px;
        border: 1px solid #ccc;
        font-size: 12px;
        color: #333;
        line-height:22px;
        margin-left:9px;
        cursor:pointer;
      }
      ul {
          display:flex;
        li {
            width:26px;
            height:24px;
            border:1px solid #ccc;
            font-size:12px;
            color:#333;
            line-height:22px;
            margin-left:9px;
        }
      }
    }
  }
   footer{
      margin-top:45px;
      p{
          font-size:14px;
          color:#333;
      }
  }
}
</style>
