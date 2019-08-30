<template>
 <div>
     <input type="text" placeholder="请输入手机号">
     <button>搜索</button>
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
div{
    width: 1152px;
    background-color: #fff;
    margin-left: 30px;
    margin-top: 30px;
    text-align: left;
    height: 100px;
    overflow: hidden;
    input{
        width: 192px;
        height: 40px;
        border: 1px solid #ccc;
        margin-left: 30px;
        margin-top: 30px;
        border-right: none;
        float: left;
        text-indent: 10px;
    }
    button{
        width: 76px;
        height: 40px;
        background-color: #ffe009;
        float: left;
        margin-top: 30px;
    }
}
</style>
