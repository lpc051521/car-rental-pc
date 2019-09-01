<template>
 <div class="head">
     <div class="title">
         <div class="left">
             <img src="./img/ 8.png" alt="">
         </div>
         <div class="write">
             <h1>平价分时租车管理系统平台</h1>
         </div>
         <div class="right">
             <div class="go">
                 <img src="./img/pic-1.png" alt="">
                <p>admin</p>
                <img src="./img/icon-6.png" alt="" class="down">
             </div>
             <div class="center">
                 <img src="./img/2.png" alt="">
                 <p>设置</p>
             </div>

             <div class="center cen">
                 <img src="./img/1.png" alt="">
                 <p>退出</p>
             </div>
         </div>
     </div>
     <aside>
         <ul>
             <li>
                 <router-link to="/home">
                     <img src="./img/7.png" alt="">
                     <p>首页</p>
                 </router-link>
             </li>
             <li>
                 <img src="./img/6.png" alt="">
                 <p class="one_" @click="mart">车辆管理</p>
                 <img src="./img/icon-12@2x.png" alt="" class="chen" ref="trn" v-show="downIcon">
                 <img src="./img/icon-6.png" alt="" class="chen hh" ref="tr" v-show="!downIcon">
                 <router-link to="/inquire">
                    <div v-if="show">
                        <p class="p">车辆查询</p>
                    </div>
                 </router-link>
                 
             </li>
             <li>
                 <img src="./img/5.png" alt="">
                 <p class="one_" @click="all_">会员管理</p>
                 <img src="./img/icon-12@2x.png" alt="" class="chen">
                 <router-link to="/register">
                    <div v-if="all">
                        <p class="p">免费注册</p>
                    </div>
                 </router-link>

                 <router-link to="/refer">
                    <div v-if="all">
                        <p class="p">免费查询</p>
                    </div>
                 </router-link>
                 
                 <router-link to="/compile">
                    <div v-if="all">
                        <p class="p">编辑</p>
                    </div>
                 </router-link>
                 
                 <router-link to="/rechare">
                    <div v-if="all">
                        <p class="p">充值</p>
                    </div>
                 </router-link>
                 
             </li>
             <li>
                 <img src="./img/4.png" alt="">
                 <p class="one_" @click="yu_">车辆预定</p>
                 <img src="./img/icon-12@2x.png" alt="" class="chen">
                 <router-link to="/manage">
                    <div v-if="yu">
                        <p class="p">预定管理</p>
                    </div>
                 </router-link>
                
                <router-link to="/order">
                    <div v-if="yu">
                        <p class="p">受理预约</p>
                    </div>
                </router-link>
             </li>
             <li>
                 <img src="./img/3.png" alt="">
                 <p class="one_" @click="money_">费用结算</p>
                 <img src="./img/icon-12@2x.png" alt="" class="chen">
                 <router-link to="/clearing">
                    <div v-if="money">
                        <p class="p">费用结算管理</p>
                    </div>
                 </router-link>
                 

                 <router-link to="/verify">
                    <div  v-if="money">
                        <p class="p">验车</p>
                    </div>
                 </router-link>
                 
                 <router-link to="/result">
                    <div v-if="money">
                        <p class="p">结算</p>
                    </div>
                 </router-link>
                 
             </li>
         </ul>
     </aside>
 </div>
 
</template>

<script>
export default {
 props: {

 },
 data() {
 return {
     show:false,
     all:false,
     yu:false,
     money:false,
    //  a:true,
    //  b:true
    downIcon: true
 };
 },
 methods: {
     mart(){
        this.show=!this.show;
        this.all=false;
        this.yu=false;
        this.money=false;
        // this.a=false;
        // this.b=false;
        // this.$refs.tr.style.display='block';
        // this.$refs.trn.style.display='none';
        // console.log(this.$refs)
     },
     all_(){
         this.all=!this.all;
          this.show=false;
        this.yu=false;
        this.money=false;
     },
     yu_(){
         this.yu=!this.yu
          this.all=false;
        this.show=false;
        this.money=false;
     },
     money_(){
         this.money=!this.money
          this.all=false;
        this.yu=false;
        this.showo=false;
     },
     collect() {
         this.downIcon = !this.downIcon
     }
 },
 mounted(){

 },
 components: {

 },
};
</script>

<style scoped lang="less">
.head{
    
    // margin-top: -60px;
    .title{
        width: 100%;
        height: 106px;
        background-color: #282d30;
        
        overflow: hidden;
        .left{
            margin-left: 34px;
            margin-top: 7px;
            float: left;
        }
        .write{
            float: left;
            margin-left: 72px;
            h1{
                font-size: 30px;
                color: #ffffff;
                line-height: 106px;
            }
        }
        .right{
            float: right;
            margin-right: 25px;
            .go{
                float: left;
                width: 167px;
                height: 36px;
                margin-top: 36px;
                border-right: 1px solid #ccc;
                img{
                    float: left;
                    margin-top: -16px;
                }
                p{
                    float: left;
                    font-size: 18px;
                    color: #ccc;
                    line-height: 36px;
                    margin-left: 13px;
                }
                .down{
                    margin-top: 15px;
                    margin-left: 12px;
                }
            }
            .center{
                width: 110px;
                float: left;
                margin-top: 36px;
                height: 36px;
                border-right: 1px solid #ccc;
                p{
                    font-size: 0.18rem;
                    color: #ccc;
                    margin-top: 7px;
                    margin-left: 10px;
                    float: left;
                }
                img{
                    width: 28px;
                    height: 28px;
                    margin-left: 22px;
                    float: left;
                    margin-top: 2px;
                }
            }
            .cen{
                border: none;
            }
        }   
    }
    aside{
        width: 220px;
        height: 895px;        
        background-color: #282d30;
        float: left;
        overflow: auto;
        ul{
            width: 100%;
            overflow: hidden;
            li{
                font-size: 18px;
                color: #d4d5d6;
                overflow: hidden;
                border-left: 8px solid #282d30;
                a{
                    color: #d4d5d6;
                }
                img{
                    width: 27px;
                    margin-left: 25px;
                    height: 27px;
                    float: left;
                    margin-top: 22px;
                }
                p{
                    text-align: left;
                    height: 70px;
                    line-height: 70px;
                    float: left;
                    margin-left: 15px;
                    overflow: hidden;
                }
                .one_{
                    width: 84px;
                    float: left;
                    // background: url('./img/icon-12@2x.png') no-repeat 99px 29px;
                }
                .chen{
                    width: 7px;
                    height: 9px;
                    margin-top: 30px;
                }
                .hh{
                    display: none;
                }
                div{
                    width: 220px;
                    // border-left: 6px solid #282d30;
                    // display: none;
                    .p{
                        width: 100%;
                        margin-left: 60px;
                    }
                }
                div:hover{
                    float: left;
                    border-left: 8px solid #ffe009;
                    cursor: pointer;
                    background-color: #1d2125;
                }
            }
            li:hover{
                cursor: pointer;
            }
        }
    }
    .router-link-exact-active {
        color: #d4d5d6;
    }
}
</style>
