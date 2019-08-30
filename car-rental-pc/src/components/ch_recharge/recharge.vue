<template>
 <div class="rechare">
     <Title></Title>
     <New></New>
     <Foot></Foot>
 </div>
</template>

<script>
import Title from './title'
import New from './new'
import Foot from '../ch_register/footer'
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
     Title,New,Foot
 },
};
</script>

<style scoped lang="less">
.rechare{
    width: 1203px;
    height: 895px;
    background-color: #f4f4f4;
    float: right;
}
</style>
