<template>
  <div class="verify">
    <div class="top">
      <span>费用结算</span>
      <img src="./img/icon-9.png" alt />
      <span>验车</span>
    </div>

    <div class="bottom">
      <div class="b_one">
        <p>订单信息 :</p>
        <div class="time">
          <div class="one">
            <p class="yello"></p>
            <span>时租</span>
          </div>
          <div class="two">
            <span>取车时间</span>
            <input type="text" placeholder="2019-8-20" />
            <img src="./img/icon-1.png" alt />
          </div>
          <div class="three">
            <span>还车时间</span>
            <input type="text" placeholder="2019-8-21" />
            <img src="./img/icon-1.png" alt />
          </div>
          <div class="four">
            <span>实际还车时间</span>
            <input type="text" placeholder="2019-8-21" />
            <img src="./img/icon-1.png" alt />
          </div>
        </div>

        <div class="day">
          <div class="one">
            <p class="yello"></p>
            <span>日租</span>
          </div>
        </div>

        <div class="month">
          <div class="one">
            <p class="yello"></p>
            <span>月租</span>
          </div>
          <div class="two">
            <span>租车地点</span>
            <input type="text" placeholder="郑州火车站店" />
            <img src="./img/icon-2.png" alt />
          </div>
          <div class="three">
            <span>定金</span>
            <input type="text" placeholder="500" />
            <span>元</span>
          </div>
        </div>
      </div>

      <div class="b_two">
        <p>车辆信息 :</p>
        <div class="case">
          <div class="c_one">
            <span>车牌号</span>
            <input type="text" placeholder="豫A188HY" />
          </div>
          <div class="c_two">
            <span>品牌</span>
            <input type="text" placeholder="雪佛兰迈锐宝" />
          </div>
          <div class="three">
            <span>价格</span>
            <input type="text" placeholder="500" />
            <span>元/日</span>
          </div>
        </div>
      </div>

      <div class="b_three">
        <p>消费信息 :</p>
        <div class="vanish_t">
          <div class="v_one">
            <span>里程数</span>
            <input type="text" placeholder="112.3" />
            <span>km</span>
          </div>
          <div class="v_two">
            <span>使用费</span>
            <input type="text" placeholder="153" />
            <span>元</span>
          </div>
          <div class="v_three">
            <span>手续费</span>
            <input type="text" placeholder="20" />
            <span>元</span>
          </div>
          <div class="v_four">
            <span>服务费</span>
            <input type="text" placeholder="40" />
            <span>元</span>
          </div>
        </div>

        <div class="vanish_b">
          <div class="v_one">
            <span>油费</span>
            <input type="text" placeholder="0" />
            <span>元</span>
          </div>
          <div class="v_two">
            <span>车辆损失费</span>
            <input type="text" placeholder="0" />
            <span>元</span>
          </div>
          <div class="v_three">
            <span>损失说明</span>
            <input type="text" placeholder="无" />
          </div>
          <div class="v_four">
            <span>总费用</span>
            <input type="text" placeholder="213" />
            <span>元</span>
          </div>
        </div>
      </div>

      <div class="b_four">
        <button>结算</button>
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
      .get("http://172.25.7.159:8080/order/findUndoneOrderByTelNo?tel=13953325567")
      .then(res => {
        console.log(res);
        this.list = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    yello() {
      // this.$refs.no.style.background = "yellow";
      // this.$refs.no.style.border = "none";
      // this.$refs.po.style.background=''
      //    this.$refs.po.style.border='1px solid #ccc'
      this.style.background = "yellow";
      this.style.border = "none";
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.verify {
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
    width: 1152px;
    height: 670px;
    background: white;
    margin-top: 30px;
    padding: 30px;
    box-sizing: border-box;
    .b_one {
      width: 100%;
      overflow: hidden;
      p {
        font-size: 18px;
        color: #333;
        float: left;
      }
      .time {
        height: 31px;
        font-size: 14px;
        display: flex;
        line-height: 22px;
        margin: 50px 0;
        .one {
          position: relative;
          padding: 1px;
          box-sizing: border-box;
          input {
            float: left;
            margin: 5px 0;
          }
          span {
            margin-left: 7px;
            line-height: 20px;
          }
        }
        .two {
          margin-left: 50px;
          margin-top: 6px;
          position: relative;
          input {
            width: 120px;
            height: 24px;
            border: 1px solid #ccc;
            text-align: center;
            margin-left: 15px;
          }
          img {
            position: absolute;
            top: 0px;
            right: -34px;
          }
        }
        .three {
          position: relative;
          margin-left: 83px;
          margin-top: 6px;
          input {
            width: 120px;
            height: 24px;
            border: 1px solid #ccc;
            text-align: center;
            margin-left: 15px;
          }
          img {
            position: absolute;
            top: 0px;
            right: -34px;
          }
        }
        .four {
          position: relative;
          margin-left: 83px;
          margin-top: 6px;
          input {
            width: 120px;
            height: 24px;
            border: 1px solid #ccc;
            text-align: center;
            margin-left: 15px;
          }
          img {
            position: absolute;
            top: 0px;
            right: -34px;
          }
        }
      }
      .day {
        font-size: 0;
        display: flex;
        margin-top: -45px;
        margin-left: 2px;
        .one {
          margin-left: 1px;
        }
        img {
          float: left;
        }
        span {
          font-size: 14px;
          color: #333;
          float: left;
          margin-top: -4px;
          margin-left: 7px;
        }
      }
      .month {
        display: flex;
        font-size: 14px;
        color: #333;
        margin-top: 6px;
        .one {
          position: relative;
          padding: 1px;
          box-sizing: border-box;
          input {
            float: left;
            margin: 7px 0;
          }
          span {
            margin-left: 7px;
            line-height: 28px;
          }
        }
        .two {
          margin-left: 50px;
          margin-top: -5px;
          position: relative;
          input {
            width: 120px;
            height: 24px;
            border: 1px solid #ccc;
            text-align: center;
            margin-left: 15px;
          }
          img {
            position: absolute;
            top: 0px;
            right: -34px;
          }
        }
        .three {
          margin-left: 110px;
          input {
            width: 120px;
            height: 24px;
            border: 1px solid #ccc;
            margin-left: 15px;
            text-align:center;
          }
          span:nth-child(3) {
            margin-left: 12px;
          }
        }
      }
    }
    .b_two {
      margin-top: 68px;
      p {
        font-size: 18px;
        color: #333;
        float: left;
      }
      .case {
        height: 30px;
        font-size: 0;
        display: flex;
        .c_one {
          width: 300px;
          margin: 50px -85px;
          span {
            font-size: 14px;
            color: #333;
            margin-left: -111px;
          }
          input {
            width: 120px;
            height: 24px;
            border: 1px solid #ccc;
            text-align: center;
            margin-left: 18px;
          }
        }
        .c_two {
          width: 300px;
          margin: 50px 0px;
          span {
            font-size: 14px;
            color: #333;
            margin-left: -118px;
          }
          input {
            width: 120px;
            height: 24px;
            border: 1px solid #ccc;
            text-align: center;
            margin-left: 18px;
          }
        }
        .three {
          margin: 50px -65px;

          span:nth-child(3) {
            margin-left: 18px;
          }
          input {
            width: 120px;
            height: 24px;
            border: 1px solid #ccc;
            text-align: center;
            margin-left: 18px;
          }
        }
        span {
          font-size: 14px;
          color: #333;
        }
      }
    }
    .b_three {
      margin-top: 114px;
      p {
        font-size: 18px;
        color: #333;
        margin-left: -1008px;
      }
      .vanish_t {
        font-size: 0;
        display: flex;
        margin-top: 30px;
        span {
          font-size: 14px;
          color: #333;
        }
        span:nth-child(3) {
          margin-left: 12px;
        }
        input {
          width: 120px;
          height: 24px;
          border: 1px solid #ccc;
          text-align: center;
          margin-left: 18px;
        }
        .v_two {
          margin-left: 77px;
        }
        .v_three {
          margin-left: 77px;
        }
        .v_four {
          margin-left: 90px;
        }
      }
      .vanish_b {
        font-size: 0;
        display: flex;
        margin-top: 30px;
        span {
          font-size: 14px;
          color: #333;
        }
        span:nth-child(3) {
          margin-left: 12px;
        }
        input {
          width: 120px;
          height: 24px;
          border: 1px solid #ccc;
          text-align: center;
          margin-left: 18px;
        }
        .v_one {
          span:nth-child(1) {
            margin-left: 14px;
          }
        }
        .v_two {
          margin-left: 77px;
          span:nth-child(1) {
            margin-left: -18px;
          }
        }
        .v_three {
          margin-left: 77px;
          span:nth-child(1) {
            margin-left: -15px;
          }
        }
        .v_four {
          margin-left: 101px;
          span {
            margin-left: 14px;
          }
        }
      }
    }
    .b_four {
      button {
        width: 100px;
        height: 36px;
        color: #333;
        font-size: 18px;
        background: #fee952;
        border-radius: 5px;
        margin-top: 90px;
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
  .yello {
    float: left;
    width: 15px;
    height: 15px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-top: 3px;
  }
  .day {
    .yello {
      margin-top: -1px;
      margin-left: -2px;
    }
  }
  .month {
    .yello {
      margin-top: 7px;
    }
  }
}
</style>
