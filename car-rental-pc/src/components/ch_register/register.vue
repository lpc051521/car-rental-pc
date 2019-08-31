<template>
 <div class="register">
     <Title></Title>
     <Inp></Inp>
     <Foot></Foot>
 </div>
</template>

<script>
import Title from './title'
import Inp from './inp'
import Foot from './footer'
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
     Title,Inp,Foot,
 },
};
</script>

<style scoped lang="less">
.register{
    width: 1203px;
    height: 895px;
    background-color: #f4f4f4;
    float: right;
}
</style>
