<template>
<el-container>
  <el-header class="search-wrap">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-input
          placeholder="请输入内容"
          v-model="input23">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="6">
          <el-dropdown class="pull-right">
            <span class="el-dropdown-link">
              <el-button type="warning" icon="el-icon-star-off" circle ></el-button>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
  <el-main class="search-moduel-wrap">
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <Mylist/>
      </el-col>
    </el-row>
  </el-main>
</el-container>
</template>
<script>
import Mylist from '../components/list.vue'
export default {
  name: 'Home',
  data () {
    return {
      input23: '',
    }
  },
  methods: {
  },
  components: {
    Mylist
  }
}
</script>
<style>
.search-moduel-wrap{
    position: absolute;
    width: calc(100% - 200px);
    top: 60px;
}
.search-wrap{
  background: #409eff;
  line-height: 60px;
}
.pull-right{
  float: right;
}
.span-wrap{
  vertical-align: top;
  display: inline-block;
  padding: 0 10px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.span-wrap:hover,.span-wrap.active{
  background: #3393f7;
}
</style>

