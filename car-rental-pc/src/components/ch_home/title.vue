<template>
 <div class="title">
     <header>
         <p>会员</p>
         <ul>
             <li><p>手机号</p></li>
             <li><input type="text"></li>
             <li><button>查询</button></li>
         </ul>
         <ul class="right">
             <li><p>手机号</p></li>
             <li><input type="text"></li>
             <li><button>预约查询</button></li>
         </ul>
     </header>
     <div class="list">
         <ul>
             <li>车辆</li>
             <li>车牌号</li>
             <li>成本</li>
             <li>登记</li>
             <li>违章处理</li>
         </ul>
         
         <ul class="white">
             <li>xc40</li>
             <li>豫A-772347</li>
             <li>93</li>
             <li>郑州金水区</li>
             <li>处理中</li>
         </ul>
         <ul class="color">
             <li>英朗</li>
             <li>豫A-139477</li>
             <li>93</li>
             <li>武汉恶人谷</li>
             <li>已处理</li>
         </ul>

         <ul class="white">
             <li>奥迪Q5</li>
             <li>豫A-728637</li>
             <li>93</li>
             <li>郑州金水区</li>
             <li>待处理</li>
         </ul>
         <ul class="color">
             <li>本田思域</li>
             <li>豫A-617237</li>
             <li>93</li>
             <li>武汉恶人谷</li>
             <li>已处理</li>
         </ul>

         <ul class="white">
             <li>哈佛h9</li>
             <li>豫A-787627</li>
             <li>93</li>
             <li>郑州金水区</li>
             <li>处理中</li>
         </ul>
         <ul class="color">
             <li>长安cs85</li>
             <li>豫A-723137</li>
             <li>93</li>
             <li>武汉恶人谷</li>
             <li>处理中</li>
         </ul>

         <ul class="white">
             <li>哈佛h9</li>
             <li>豫A-787627</li>
             <li>93</li>
             <li>郑州金水区</li>
             <li>处理中</li>
         </ul>
         <ul class="color">
             <li>长安cs85</li>
             <li>豫A-723137</li>
             <li>93</li>
             <li>武汉恶人谷</li>
             <li>处理中</li>
         </ul>

         <ul class="white">
             <li>哈佛h9</li>
             <li>豫A-787627</li>
             <li>93</li>
             <li>郑州金水区</li>
             <li>处理中</li>
         </ul>
         <ul class="color">
             <li>长安cs85</li>
             <li>豫A-723137</li>
             <li>93</li>
             <li>武汉恶人谷</li>
             <li>处理中</li>
         </ul>

         <ul class="white">
             <li>奥迪Q5</li>
             <li>豫A-728637</li>
             <li>93</li>
             <li>郑州金水区</li>
             <li>待处理</li>
         </ul>
         <ul class="color">
             <li>本田思域</li>
             <li>豫A-617237</li>
             <li>93</li>
             <li>武汉恶人谷</li>
             <li>已处理</li>
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
.title{
    width: 1152px;
    margin-left: 30px;
    margin-top: 30px;
    overflow: hidden;
    background-color: #fff;
    header{
        overflow: hidden;
        p{
            margin-top: 20px;
            margin-left: 54px;
            text-align: left;
            font-size: 18px;
            color: #333333;
        }
        ul{
            margin-top: 23px;
            float: left;
            li{
                text-align: left;
                float: left;
                p{
                    margin-top: 11px;
                }
                input{
                    width: 202px;
                    height: 38px;
                    border: 1px solid #ccc;
                    font-size: 14px;
                    border-right: none;
                    color: #999999;
                    margin-left: 18px;
                }
                button{
                    width: 92px;
                    height: 38px;
                    background-color: #ffe009;
                }
            }
        }
        .right{
            float: left;
            margin-left: 219px;
        }
    }
    .list{
        width: 100%;
        margin-top: 28px;
        background-color: #ffe009;
        ul{
            display: flex;
            height: 48px;
            li{
                line-height: 48px;
                flex:1;
                font-size: 14px;
                color: #333333;
            }
        }
        .white{
            background: #fff;
        }
        .color{
            background-color: #fffce3;
        }
    }
    .math{
        width: 100%;
        height: 65px;
        overflow: hidden;
        ul{
            margin-top: 20px;
            margin-left: 360px;
            li{
                float: left;
                text-align: left;
                padding: 5px 10px;
                border: 1px solid #ccc;
                font-size: 12px;
                color: #333333;
                margin-left: 10px;
            }
            .dian{
                border: none;
            }
        }
    }
}
</style>
