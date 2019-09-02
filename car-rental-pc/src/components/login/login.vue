<template>
  <div class="login_box">
    <div class="logo">
      <!-- <img src="./img/bac.png" alt=""> -->
    </div>
    <div class="text">
      <div class="top">
        <p>用户登录</p>
        <input type="text" placeholder="请输入用户名" />
        <input type="password" placeholder="请输入密码"/>
        <img src="./img/icon_1.png" alt class="one" />
        <img src="./img/icon_2.png" alt class="two" />
      </div>
      <div class="bottom">
        <input type="checkbox" checked="checked" />
        <span>记住密码</span>
        <span>忘记密码？</span>
        <router-link to="/home">
          <button>登录</button>
        </router-link>
        
      </div>
    </div>
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
.login_box {
  width:1440px;
  height: 900px;
  background: url("./img/bac.png") no-repeat;
  position: relative;

  
  .logo {
    width: 212px;
    height: 132px;
    position: absolute;
    top: 64px;
    left: 240px;
    img {
      width: 212px;
      height: 132px;
    }
  }
  .text {
    width: 498px;
    height: 520px;
    background: #f8f6f6;
    position: absolute;
    bottom: 78px;
    right: 132px;
    .top {
      position:relative;
      font-size: 0;
      p {
        font-size: 24px;
        color: #333;
        font-weight: 600;
        margin-left: -220px;
        margin-top: 80px;
      }
      input {
        width: 320px;
        height: 75px;
        text-indent: 60px;
      }
      input:nth-child(2) {
        margin-top: 22px;
      }
      input:nth-child(3) {
        margin-top: 41px;
      }
      .one{
        position:absolute;
        top:81px;
        left:115px;
      }
      .two{
        position:absolute;
        top:197px;
        left:115px;
      }
    }
    .bottom {
      font-size:0;
      position: relative;
      input {
        width:13px;
        height:14px;
        position:absolute;
        top:17px;
        left:89px;
        cursor: pointer; 
      }
      span {
        font-size: 18px;
        color: #999999;
        font-size:14px;
        position:absolute;
        top:13px;
        left:111px;
      }
      span:nth-child(3){
        right:-150px;
      }
      button{
        width:320px;
        height:75px;
        background:#ffdf00;
        font-size:24px;
        margin-top:64px;
        color:#333;
        cursor: pointer;
      }
    }
  }
}
</style>
