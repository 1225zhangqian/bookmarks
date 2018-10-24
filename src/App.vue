<template>
  <div id="app">
 <el-container>
    <el-aside width="200px">
      <el-header class="search-wrap">
        <span class="span-wrap active"><router-link to="/home">我的收藏</router-link></span>
        <span class="span-wrap"><router-link to="/about">我的任务</router-link></span>
      </el-header>
    </el-aside>
    <Mysearch/>
  </el-container>
  <el-container>
    <router-view></router-view>
  </el-container>
  </div>
</template>

<script>
import Mysearch from './views/searchlist.vue'
export default {
  name: 'app',
  components: {
    Mysearch
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
p{
  margin: 0;
}
ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
