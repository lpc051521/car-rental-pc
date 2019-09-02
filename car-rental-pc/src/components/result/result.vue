<template>
  <div class="result">
    <div class="top">
      <span>费用结算</span>
      <img src="./img/icon-9.png" alt />
      <span>结算</span>
    </div>
    <div class="bottom">
      <div class="left">
        <p>订单信息 :</p>
        <ul v-for="(item,index) in list" :key="index">
          <li>
            <span>租赁方式</span>
            <span>:</span>
            <span>{{ item[0].rentType }}</span>
          </li>
          <li>
            <span>取车时间</span>
            <span>:</span>
            <span>{{ item[0].getCarTime }}</span>
          </li>
          <li>
            <span>还车时间</span>
            <span>:</span>
            <span>{{ item[0].returnCarTime }}</span>
          </li>
          <li>
            <span>实际还车时间</span>
            <span>:</span>
            <span>2019-8-21</span>
          </li>
          <li>
            <span>租车地点</span>
            <span>:</span>
            <span>{{ item[0].rentCity }}</span>
          </li>
          <li>
            <span>定金</span>
            <span>:</span>
            <span>500</span>
          </li>
        </ul>
      </div>
      <div class="center">
        <div class="car">
          <p>车辆信息 :</p>
          <img src="./img/picc-1.png" alt />
          <span>2箱 | 1.5T | 5人座</span>
        </div>
        <ul>
          <li>
            <span>车牌号</span>
            <span>:</span>
            <span>豫A188HY</span>
          </li>
          <li>
            <span>品牌</span>
            <span>:</span>
            <span>雪佛兰迈锐宝</span>
          </li>
          <li>
            <span>价格</span>
            <span>:</span>
            <span>153/天</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <p>消费信息 :</p>
        <ul>
          <li>
            <span>里程数</span>
            <span>:</span>
            <span>112.3</span>
          </li>
          <li>
            <span>使用费</span>
            <span>:</span>
            <span>153</span>
          </li>
          <li>
            <span>手续费</span>
            <span>:</span>
            <span>20</span>
          </li>
          <li>
            <span>基本保险</span>
            <span>:</span>
            <span>40</span>
          </li>
          <li>
            <span>油费</span>
            <span>:</span>
            <span>0</span>
          </li>
          <li>
            <span>车辆损失费</span>
            <span>:</span>
            <span>0</span>
          </li>
          <li>
            <span>损失说明</span>
            <span>:</span>
            <span>无</span>
          </li>
          <li>
            <span>总费用</span>
            <span>:</span>
            <span>213</span>
          </li>
        </ul>
      </div>
      <div class="way">
        <p>支付方式 :</p>
        <div class="one">
          <img src="./img/icon-selected-4@2x.png" alt />
          <span>平价币支付</span>
        </div>
        <div class="two">
          <input type="radio" name="lala" />
          <span>积分支付</span>
        </div>
        <div class="three">
          <input type="radio" name="lala" />
          <span>刷卡支付</span>
        </div>
        <div class="four">
          <input type="radio" name="lala" />
          <span>现金支付</span>
        </div>
        <button>完成</button>
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
      list:{}
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
.result {
  width: 1203px;
  height: 895px;
  background: #f4f4f4;
  padding: 30px;
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
    width: 1152px;
    height: 670px;
    background: white;
    margin-top: 30px;
    padding: 27px;
    box-sizing: border-box;
    position: relative;
    .left {
      font-size: 14px;
      color: #333;
      float: left;
      p {
        font-size: 18px;
        color: #333;
      }
      ul {
        margin-top: 28px;
        li {
          width: 100%;
          margin-top: 29px;
          text-align: left;
          span:nth-child(1) {
            width: 86px;
            display: inline-block;
          }
          span:nth-child(3) {
            margin-left: 23px;
          }
        }
      }
    }
    .center {
      width: 390px;
      height: 170px;
      font-size: 14px;
      color: #333;
      position: relative;
      margin-left: 347px;
      .car {
        font-size: 0;
        p {
          font-size: 18px;
          color: #333;
          text-align: left;
        }
        img {
          position: absolute;
        }
        span {
          font-size: 12px;
          color: #333;
          position: absolute;
          left: 45px;
          bottom: 10px;
        }
      }
      ul {
        margin-left: 225px;
        margin-top: -25px;
        li {
          text-align: left;
          margin-top: 29px;
        }
      }
    }
    .right {
      width: 194px;
      float: right;
      margin-top: -169px;
      p {
        font-size: 18px;
        color: #333;
        text-align: left;
      }
      ul {
        li {
          font-size: 12px;
          color: #333;
          text-align: left;
          margin-top: 28px;
          span:nth-child(1) {
            width: 70px;
            display: inline-block;
          }
          span:nth-child(3) {
            margin-left: 15px;
          }
        }
      }
    }
    .way {
      width: 513px;
      font-size: 0;
      margin: 0px auto;
      display: flex;
      position: absolute;
      bottom: 30px;
      left: 310px;
      p {
        font-size: 18px;
        color: #333;
      }
      span {
        font-size: 14px;
        color: #333;
      }
      .one {
        display: flex;
        margin-top: 3px;
        margin-left: 23px;
        img {
          width: 15px;
          height: 15px;
          margin-top: 2px;
        }
        span {
          margin-left: 11px;
        }
      }
      .two {
        margin-top: 4px;
        margin-left: 23px;
        span {
          margin-left: 11px;
        }
      }
      .three {
        margin-top: 4px;
        margin-left: 23px;
        span {
          margin-left: 11px;
        }
      }
      .four {
        margin-top: 4px;
        margin-left: 23px;
        span {
          margin-left: 11px;
        }
      }
      button {
        width: 100px;
        height: 36px;
        background: #ffe009;
        margin-top: 70px;
        margin-left: -300px;
        border-radius: 5px;
      }
    }
  }
  footer {
    p {
      margin-top: 42px;
      color: #666;
      font-size: 14px;
    }
  }
}
</style>
