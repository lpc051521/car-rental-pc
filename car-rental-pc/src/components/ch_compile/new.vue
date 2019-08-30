<template>
 <div class="new">
     <ul>
         <li>
             <p>原手机号</p>
             <input type="text" placeholder="请输入手机号">
         </li>
         <li>
             <p>新手机号</p>
             <input type="text" placeholder="请输入新手机号">
         </li>
         <li>
             <button>确认提交</button>
         </li>
     </ul>
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
.new{
    width: 1152px;
    background-color: #fff;
    margin-left: 30px;
    margin-top: 16px;
    height: 698px;
    overflow: hidden;
    ul{
        width: 100%;
        margin-top: 22px;
        overflow: hidden;
        li{
            font-size: 14px;
            color: #333333;
            margin-left: 89px;
            overflow: hidden;
            margin-top: 44px;
            p{
                float: left;
                line-height: 35px;
            }
            input{
                width: 268px;
                height: 35px;
                border: 1px solid #ccc;
                float: left;
                margin-left: 32px;
                text-indent: 24px;
                color: #999999;
            }
            button{
                width: 268px;
                height: 40px;
                background-color: #ffcc00;
                border-radius: 5px;
                font-size: 16px;
                color: #333333;
                margin-left: -625px;
            }
        }
    }
}
</style>
