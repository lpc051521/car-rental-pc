<template>
  <div id="app">
    <Head v-show="!(path ==='/') "></Head>
    <router-view/>
  </div>
</template>

<script>
import Head from '../src/components/ch_Head/head'
export default {
  name: 'App',
  data(){
    return{
      path:''
    }
  },
  components: {
    Head
 },
  mounted() {
        this.path = this.$route.path;
          // console.log(this.$route.path)
    },
     watch:{
            $route(to,from){
                this.path = to.path
            }
        }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align:center;
  /* margin-top: 60px; */
}
</style>
