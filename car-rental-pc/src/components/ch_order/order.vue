<template>
 <div class="order">
     <Title></Title>
     <Excio></Excio>
     <Foot></Foot>
 </div>
</template>

<script>
import Title from './title'
import Excio from './excio'
import Foot from '../ch_home/footer'
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
     Title,
     Excio,
     Foot
 },
};
</script>

<style scoped lang="less">
.order{
    width: 1203px;
    height: 895px;
    background-color: #f4f4f4;
    float: right;
}
</style>
