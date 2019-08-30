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
         
         <ul class="white">
             <li>日租</li>
             <li>王志林</li>
             <li>17737700485</li>
             <li>别克威朗</li>
             <li>身份证</li>
             <li>412825199007090245</li>
             <li>2019-8-21</li>
             <li>已预约</li>
         </ul>
         <ul class="color">
             <li>日租</li>
             <li>王祖涵</li>
             <li>17737777263</li>
             <li>大众帕萨特</li>
             <li>身份证</li>
             <li>412825199007090245</li>
             <li>2019-8-21</li>
             <li>已预约</li>
         </ul>

         <ul class="white">
             <li>日租</li>
             <li>孙艺萌</li>
             <li>13203883662</li>
             <li>雪佛兰科鲁兹</li>
             <li>身份证</li>
             <li>412825199007090245</li>
             <li>2019-8-21</li>
             <li>已预约</li>
         </ul>
         <ul class="color">
             <li>日租</li>
             <li>吴铮</li>
             <li>15639055557</li>
             <li>大众朗逸</li>
             <li>身份证</li>
             <li>412825199007090245</li>
             <li>2019-8-21</li>             
             <li>已预约</li>
         </ul>

         <ul class="white">
             <li>日租</li>
             <li>张甜甜</li>
             <li>18903835548</li>
             <li>别克英朗</li>
             <li>身份证</li>
             <li>412825199007090245</li>
             <li>2019-8-21</li>
             <li>已预约</li>
         </ul>
         <ul class="color">
             <li>时租</li>
             <li>韩晓萌</li>
             <li>18135670591</li>
             <li>别克昂科雷</li>
             <li>身份证</li>
             <li>412825199007090245</li>
             <li>2019-8-21</li>            
            <li>已预约</li>
         </ul>

         <ul class="white">
             <li>月租</li>
             <li>吴佳楠</li>
             <li>18637129367</li>
             <li>雪佛兰迈锐宝</li>
             <li>身份证</li>
             <li>412825199007090245</li>
             <li>2019-8-21</li>
             <li>已预约</li>
         </ul>
         <ul class="color">
             <li>日租</li>
             <li>田浩</li>
             <li>13894853739</li>
             <li>大众帕萨特</li>
             <li>身份证</li>
             <li>412825199007090245</li>
             <li>2019-8-21</li>
             <li>已预约</li>
         </ul>
         <ul class="color">
             <li>日租</li>
             <li>柳林</li>
             <li>15962587264</li>
             <li>大众途观</li>
             <li>身份证</li>
             <li>412825199007090245</li>
             <li>2019-8-21</li>
             <li>已预约</li>
         </ul>
         <ul class="color">
             <li>日租</li>
             <li>李正阳</li>
             <li>13378239468</li>
             <li>奥迪A6</li>
             <li>身份证</li>
             <li>412825199007090245</li>
             <li>2019-8-21</li>
             <li>已预约</li>
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
.lists{
    width: 1152px;
    background-color: #fff;
    margin-left: 30px;
    // margin-top: 30px;
    overflow: hidden;
    .list{
        width: 100%;
        // margin-top: 30px;
        background-color: #ffe009;
        overflow: hidden;
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
