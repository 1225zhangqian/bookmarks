<template>
<div>
    <el-card class="box-card">
      <div v-for="(item, index) in listData"
      :key="index" :class="[currentIndex==index ? 'activeClass' : '', 'svn-content']"
      @click.prevent="clickFun(index)"
      v-drag>
        <p><span class="svn-icon"></span>{{item.name}} </p>
        <i class="el-icon-star-on"></i>
        <el-dropdown class="pull-right" @command="handleCommand">
          <span class="el-dropdown-link">
            <el-button icon="el-icon-more" circle ></el-button>
          </span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item  command="a">收藏</el-dropdown-item>
            <el-dropdown-item  command="b">修改</el-dropdown-item>
            <el-dropdown-item>复制网址</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
            <el-dropdown-item>在新标签页打开</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
      </div>
    </el-card>
    <Dialog :dialog-prop.sync="dialogFormVisible" :form-data="formData" :dialog-title="dialogTitle"/>
</div>
</template>
<script>
import { mapActions } from 'vuex'
import Dialog from './dialog.vue'
export default {
  name: 'Home',
  data () {
    return {
      currentIndex: null,
      dialogTitle: '修改书签',
      dialogFormVisible: false,
      formData: [
        { type: 'text', label: '名称', content: '百度脑图－便捷的思维工具', author: 'ddd' },
        { type: 'text', label: '网址', content: 'http://naotu.baidu.com/file/efa67178555208dd7ad28068c3b6ed2f?token=11569b53ef03ab01&qq-pf-to=pcqq.c2c', author: 'ddd' }
      ],
      listData: [
        { name: '百度脑图－便捷的思维工具', url: 'http://naotu.baidu.com/file/efa67178555208dd7ad28068c3b6ed2f?token=11569b53ef03ab01&qq-pf-to=pcqq.c2c', author: 'ddd' },
        { name: 'likeUi - 蓝湖', url: 'https://lanhuapp.com/web/#/item/board?pid=60c2cfb8-7601-4f17-b31c-0c93b755b4ed', author: 'cc' }
      ]
    }
  },
  methods: {
    ...mapActions('tip', [
      'setTipProp',
      'setTipFlag'
    ]),
    handleCommand (command) {
      this.dialogFormVisible = true
    },
    clickFun (index) {
      this.currentIndex = index
    }
  },
  components: {
    Dialog
  }
}
</script>
<style>
  .box-card .el-card__body {
    padding: 10px 0;
  }
  .svn-content{
    padding: 0 20px;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
  }
  .svn-content p{
    padding-right: 30px;
    float: left;
    cursor: pointer;
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;
  }
.activeClass{
   background: #ebf2fd;
 }
  .svn-icon{
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    background: url(../assets/svn.png);
    background-repeat: no-repeat;
  }
</style>
