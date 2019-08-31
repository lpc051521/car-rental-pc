<template>
 <div class="excio">
     <div class="top">
         <p>用户信息:</p>
         <ul>
             <li>
                 <p>姓名</p>
                 <input type="text">
             </li>
             <li>
                 <p class="left">身份证</p>
                 <input type="text">
             </li>
             <li>
                 <p class="em">邮箱</p>
                 <input type="text">
             </li>
             <li>
                 <p class="phone">联系电话</p>
                 <input type="text">
             </li>
         </ul>
         <ul>
             <li>
                 <p class="ping">驾驶券</p>
                 <input type="text">
             </li>
             <li>
                 <p class="fen">积分</p>
                 <input type="text">
             </li>
             <li>
                 <p class="pople">驾驶证</p>
                 <input type="text">
             </li>
         </ul>
     </div>

    <div class="top for">
         <p>车辆信息:</p>
         <ul>
             <li>
                 <p class="num">车牌号</p>
                 <input type="text">
             </li>
             <li>
                 <p class="left">品牌</p>
                 <input type="text">
             </li>
             <li>
                 <p class="left">发动机</p>
                 <input type="text">
             </li>
         </ul>
    </div>

    <div class="top for">
         <p>订单信息:</p>
         <ul>
             <li>
                 <p class="num">金额</p>
                 <input type="text">
                 <span>元</span>
             </li>
             <li>
                 <p class="left">取车时间</p>
                 <input type="text">
                 <img src="./img/icon-1 (1).png" alt="">
             </li>
             <li>
                 <p class="left">还车时间</p>
                 <input type="text">
                 <img src="./img/icon-1 (1).png" alt="">
             </li>
         </ul>
    </div>

    <div class="top">
         <p>消息历史:</p>
         <ul class="ip">
             <li class="three">租车时间</li>
             <li class="pai">品牌</li>
             <li class="pai">租车时长</li>
         </ul>
         <ul>
             <li class="three">2019-7-7</li>
             <li class="pai">雪佛兰科鲁兹</li>
             <li class="pai">2天</li>
         </ul>
         <ul>
             <li class="three">2019-6-3</li>
             <li class="pai">雪佛兰科鲁兹</li>
             <li class="pai">2天</li>
         </ul>
         <ul>
             <li class="three">2015-5-1</li>
             <li class="pai">雪佛兰科鲁兹</li>
             <li class="pai">3天</li>
         </ul>
         <ul>
            <li class="mor">
                 <p>更多记录</p>
                 <img src="./img/icon9.png" alt="">
            </li>
         </ul>
    </div>
    <div class="btn">
        <button>完成</button>
    </div>
 </div>
</template>

<script>
export default {
 props: {

 },
 data() {
 return {

 };
 },
 methods: {

 },
 components: {

 },
};
</script>

<style scoped lang="less">
.excio{
    width: 1152px;
    background-color: #fff;
    margin-left: 30px;
    margin-top: 30px;
    .top{
        width: 100%;
        overflow: hidden;
        p{
            text-align: left;
            margin-left: 30px;
            margin-top: 30px;
            font-size: 18px;
            color: #333333; 
        }
        ul{
            width: 100%;
            margin-top: 4px;
            overflow: hidden;
            li{
                margin-top: 20px;
                text-align: left;
                overflow: hidden;
                float: left;
                p{
                    margin-left: 45px;
                    float: left;
                    margin-top: 0;
                    font-size: 16px;
                    color: #333333;
                    line-height: 24px;
                }
                input{
                    width: 170px;
                    height: 24px;
                    border: 1px solid #ccc;
                    float: left;
                    margin-left: 15px;
                }
            }
            .left{
                margin-left: 38px;
            }
            .em{
                margin-left: 82px;
            }
            .phone{
                margin-left: 30px;
            }
            .ping{
                margin-left: 30px;
            }
            .fen{
                margin-left: 53px;
            }
            .pople{
                margin-left: 65px;
            }
            .three{
                margin-left: 30px;
            }
            .pai{
                width: 100px;
                text-align: center;
                margin-left: 60px;
            }
            .mor{
                margin-left: 130px;
                img{
                    margin-top: 10px;
                    float: left;
                    margin-left: 10px;
                }
            }
        }
        .ip{
            margin-left: 6px;
        }
    }
    .for{
        margin-top: 10px;
        ul{
            li{
                input{
                    width: 118px;
                }
                span{
                    margin-left: 13px;
                }
                img{
                    float: left;
                    margin-left: 14px;
                }
            }
            .num{
                margin-left: 30px;
            }
            .left{
                margin-left: 40px;
            }
        }
    }
    .btn{
        margin-top: 26px;
        height: 56px;
        button{
            width: 100px;
            height: 36px;
            background-color: #ffe009;
        }
    }
}
</style>
