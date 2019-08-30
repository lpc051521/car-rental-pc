<template>
 <div class="manage">
     <Title></Title>
     <Bton></Bton>
     <Lists></Lists>
     <Foot></Foot>
 </div>
</template>

<script>
import Title from './title'
import Bton from './bton'
import Lists from './lists'
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
     Title,Bton,Lists,Foot
 },
};
</script>

<style scoped lang="less">
.manage{
    width: 1203px;
    height: 895px;
    background-color: #f4f4f4;
    float: right;
}
</style>
