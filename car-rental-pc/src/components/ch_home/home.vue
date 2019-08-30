<template>
 <div class="home">
     <Title></Title>
     <Footer></Footer>
 </div>
</template>

<script>
import Title from './title'
import Footer from './footer'
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
     Title,Footer
 },
};
</script>

<style scoped lang="less">
.home{
    width: 1203px;
    height: 895px;
    background-color: #f4f4f4;
    float: right;
}
</style>
