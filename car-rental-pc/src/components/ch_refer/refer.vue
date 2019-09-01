<template>
 <div class="refer">
     
     <Title></Title>
     <Lists></Lists>
     <Foot></Foot>
 </div>
</template>

<script>

import Title from './title'
import Lists from './lists'
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
     Title,Lists,Foot
 },
};
</script>

<style scoped lang="less">
.refer{
    width: 1203px;
    height: 895px;
    background-color: #f4f4f4;
    float: right;
}
</style>
