<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="go">点我跳转</button>
    <div>书籍列表</div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods:{
      go(){
        this.$route().push('/Books')
      }
    }
  }
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
