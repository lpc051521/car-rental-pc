<template>
  <div class="inquire_box">
    <div class="top">
      <span>车辆管理</span>
      <img src="./img/icon-9.png" alt />
      <span>车辆查询</span>
    </div>
    <div class="bottom">
      <div class="one">
        <input type="text" placeholder="豫A88888" />
        <button>查询</button>
        <p>查询成功！查询结果如下:</p>
      </div>
      <div class="two">
        <ul class="t_yellow">
          <li>记录编号</li>
          <li>车牌号</li>
          <li>车辆名称</li>
          <li>发动机号码</li>
          <li>核载人员</li>
          <li>注册时间</li>
          <li>发证时间</li>
          <li>车主</li>
          <li>操作</li>
        </ul>
        <ul class="t_white">
          <li>32</li>
          <li>豫A188HY</li>
          <li>雪佛兰迈锐宝</li>
          <li>08121155944</li>
          <li>5</li>
          <li>2018-3-18</li>
          <li>2018-9-18</li>
          <li>王志林</li>
          <li>
            <a href>编辑</a>
            <a href>删除</a>
          </li>
        </ul>
      </div>
      <div class="three">
        <ul class="s_yellow">
          <li>记录编号</li>
          <li>车牌号</li>
          <li>车辆名称</li>
          <li>发动机号码</li>
          <li>核载人员</li>
          <li>注册时间</li>
          <li>发证时间</li>
          <li>车主</li>
          <li>操作</li>
        </ul>
        <ul class="list">
          <li>
            <ul class="list_s">
              <li>1</li>
              <li>豫AS88V2</li>
              <li>别克英朗</li>
              <li>06242983830</li>
              <li>5</li>
              <li>2018-3-16</li>
              <li>2018-9-16</li>
              <li>张田田</li>
              <li>
                <a href>编辑</a>
                <a href>删除</a>
              </li>
            </ul>
          </li>
          <li class="pink">
            <ul class="list_s">
              <li>2</li>
              <li>豫A671F2</li>
              <li>别克昂科拉</li>
              <li>08121155944</li>
              <li>5</li>
              <li>2018-3-18</li>
              <li>2018-9-18</li>
              <li>韩小蒙</li>
              <li>
                <a href>编辑</a>
                <a href>删除</a>
              </li>
            </ul>
          </li>
          <li>
            <ul class="list_s">
              <li>3</li>
              <li>豫A188HY</li>
              <li>雪佛兰迈锐宝</li>
              <li>08121155944</li>
              <li>5</li>
              <li>2018-3-18</li>
              <li>2018-9-18</li>
              <li>王一哲</li>
              <li>
                <a href>编辑</a>
                <a href>删除</a>
              </li>
            </ul>
          </li>
          <li class="pink">
            <ul class="list_s">
              <li>4</li>
              <li>豫A188HY</li>
              <li>大众帕萨特</li>
              <li>08121155944</li>
              <li>5</li>
              <li>2018-3-18</li>
              <li>2018-9-18</li>
              <li>田浩</li>
              <li>
                <a href>编辑</a>
                <a href>删除</a>
              </li>
            </ul>
          </li>
          <li>
            <ul class="list_s">
              <li>5</li>
              <li>豫A188HY</li>
              <li>大众途观</li>
              <li>08121155944</li>
              <li>5</li>
              <li>2018-3-18</li>
              <li>2018-9-18</li>
              <li>柳林</li>
              <li>
                <a href>编辑</a>
                <a href>删除</a>
              </li>
            </ul>
          </li>
          <li class="pink">
            <ul class="list_s">
              <li>6</li>
              <li>豫A188HY</li>
              <li>奥迪A6</li>
              <li>08121155944</li>
              <li>5</li>
              <li>2018-3-18</li>
              <li>2018-9-18</li>
              <li>李正阳</li>
              <li>
                <a href>编辑</a>
                <a href>删除</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="page">
          <a href="" class="left">上一页</a>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>···</li>
            <li>36</li>
          </ul>
        <a href="" class="right">下一页</a>
        </div>
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
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.inquire_box {
  width: 1203px;
  height: 895px;
  background: #f4f4f4;
  padding: 30px;
  box-sizing: border-box;
  font-size: 0;
  float: left;
  .top {
    width: 1152px;
    height: 64px;
    background: white;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    span {
      font-size: 18px;
      color: #333;
    }
    img {
      width: 7px;
      height: 9px;
      margin: 9px 10px;
    }
  }
  .bottom {
    width: 1152px;
    background: white;
    margin-top: 30px;
    .one {
      width: 100%;
      height: 125px;
      padding: 30px;
      box-sizing: border-box;
      display: flex;
      position: relative;
      input {
        width: 190px;
        height: 40px;
        border: 1px solid #ccc;
        text-indent: 18px;
      }
      button {
        width: 76px;
        height: 40px;
        background: #ffe009;
        font-size: 18px;
        color: #333;
        cursor: pointer;
      }
      p {
        color: #666;
        font-size: 14px;
        position: absolute;
        bottom: 20px;
        left: 30px;
      }
    }
    .two {
      width: 100%;
      height: 150px;
      .t_yellow {
        width: 100%;
        overflow: hidden;
        display: flex;
        li {
          width: 128px;
          height: 44px;
          font-size: 14px;
          background: #ffe009;
          color: #333;
          line-height: 44px;
        }
      }
      .t_white {
        width: 100%;
        display: flex;
        li {
          width: 128px;
          height: 44px;
          font-size: 14px;
          color: #666;
          line-height: 44px;
        }
        li:nth-child(9) {
          a:nth-child(1) {
            color: #4c9eff;
            cursor: pointer;
          }
          a:nth-child(2) {
            color: #ff3838;
            cursor: pointer;
          }
        }
      }
    }
    .three {
      width: 100%;
      height: 391px;
      .s_yellow {
        width: 100%;
        display: flex;
        li {
          width: 128px;
          height: 44px;
          font-size: 14px;
          color: #333;
          line-height: 44px;
          background: #ffe009;
        }
      }
      .list {
        width: 100%;
        li {
          width: 100%;
          height: 44px;
          line-height: 44px;
          font-size: 14px;
          a:nth-child(1) {
            color: #4c9eff;
            cursor: pointer;
          }
          a:nth-child(2) {
            color: #ff3838;
            cursor: pointer;
          }
          ul {
            display: flex;
          }
        }
        .pink {
          background: #fff9ce;
        }
      }

      .page {
        width:378px;
        font-size: 12px;
        display: flex;
        margin:30px auto;
        .left {
          width: 58px;
          height: 24px;
          border: 1px solid #ccc;
          line-height: 22px;
          color:#999;
          cursor:pointer;
        }
        ul{
            display:flex;
            margin-left:5px;
            li{
                width:26px;
                height:24px;
                border:1px solid #ccc;
                line-height:22px;
                margin-left:9px;
            }
            li:nth-child(6){
                border:none;
            }
        }
        .right {
          width: 58px;
          height: 24px;
          border: 1px solid #ccc;
          line-height: 22px;
          color:#333;
          cursor:pointer;
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
