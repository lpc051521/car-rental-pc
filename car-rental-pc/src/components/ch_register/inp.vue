<template>
 <div class="inp">
     <ul>
         <li class="name">
             <p>姓名</p>
             <input type="text" placeholder="请输入名称" class="bt">
         </li>
         <li class="man">
             <p>性别</p>
             <div>
                 <span>男</span>
                 <p @click="yello" ref="no"></p>
             </div>
             <div class="women">
                 <span>女</span>
                 <p @click="yo" ref="po"></p>
             </div>
         </li>
         <li>
             <p>手机号</p>
             <input type="text" placeholder="请输入手机号" class="bt">
         </li>
         <li>
             <p>身份证</p>
             <input type="text" placeholder="请输入证件号" class="bt">
         </li>
         <li>
             <p>密码</p>
             <input type="text" placeholder="请输入密码" class="bt">
         </li>
         <li>
             <p>邮箱</p>
             <input type="text" placeholder="请输入邮箱" class="bt">
         </li>
         <li class="btn">
             <button>注册</button>
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
     yello(){
         this.$refs.no.style.background='yellow'
         this.$refs.no.style.border='none'
         this.$refs.po.style.background=''
         this.$refs.po.style.border='1px solid #ccc'
     },
     yo(){
         this.$refs.po.style.background='yellow'
         this.$refs.po.style.border='none'
         this.$refs.no.style.background=''
         this.$refs.no.style.border='1px solid #ccc'
     }
 },
 components: {

 },
};
</script>

<style scoped lang="less">
.inp{
    width: 1152px;
    height: 698px;
    background-color: #fff;
    margin-left: 30px;
    margin-top: 15px;
    ul{
        width: 100%;
        overflow: hidden;
        li{
            text-align: left;
            margin-top: 44px;
            overflow: hidden;
            p{
                width: 116px;
                float: left;
                text-align: right;
                line-height: 40px;
            }
            .bt{
                width: 198px;
                height: 40px;
                border: 1px solid #ccc;
                font-size: 14px;
                color: #999999;
                text-indent: 10px;
                margin-left: 26px;
            }
            button{
                width: 198px;
                height: 40px;
                line-height: 40px;
                border-radius: 5px;
                background-color: #ffe009;
                font-size: 16px;
                color: #333333;
            }
        }
        .name{
            margin-top: 66px;
        }
        .btn{
            margin-top: 30px;
            margin-left: 142px;
        }
        .man{
            div{
                float: left;
                margin-left: 52px;
                line-height: 40px;
                span{
                    float: left;
                }
                p{
                    float: left;
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                    margin-left: 10px;
                    margin-top: 13px;
                }
            }
            .women{
                margin-left: 36px;
            }
        }
    }
}
</style>
