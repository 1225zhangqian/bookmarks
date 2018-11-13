<template>
<el-container>
  <span  id="tip" class="right-dropdown-tip" ></span>
  <el-aside width="200px" >
    <div class="mytree-wrap">
      <Mytree/>
    </div>
  </el-aside>
  <el-container>
    <div class="empty-wrap" @click.prevent.right="openDropdownRight" @click="closeDropdownRight">
      <p class="empty-title" >暂未添加书签</p>
    </div>
  </el-container>
  <!-- 弹窗 -->
  <Dialog :dialog-prop.sync="dialogFormVisible" :dialog-title="dialogTitle" :form-data="formData"/>
  <!-- 右键菜单 -->
  <DorpdownRight v-if="dropdownVisible" v-bind="dropdownProp" @dropdownRightClick="dropdownRightClick"/>
</el-container>
</template>
<script>
import {mapGetters} from 'vuex';
import Mytree from '../components/tree.vue'
import Dialog from '../components/dialog.vue'
import DorpdownRight from '../components/dorpdownRight.vue'
export default {
  name: 'Home',
  data () {
    return {
      dialogTitle: '修改书签',
      dialogFormVisible: false,
      formData: [
        { type: 'text', label: '名称', content: '', author: 'ddd' },
        { type: 'text', label: '网址', content: '', author: 'ddd' }
      ],
      dropdownVisible: false,
      dropdownProp: {}
    }
  },
  methods: {
    // 邮件打开菜单
    openDropdownRight (event) {
      this.dropdownVisible = false
      this.dropdownProp.eventTarget = event
      this.dropdownProp.dropdownMenuData = [{name:'添加新书签'},{name:'添加新文件夹'}]
      this.dropdownVisible = true
    },
    // 左键关闭菜单
    closeDropdownRight () {
      this.dropdownVisible = false
    },
    // 右键菜单事件
    dropdownRightClick (val) {
      this.dropdownVisible = false
      this.dialogTitle = val
      this.formData = val==='添加新书签' ? this.formData : [{ type: 'text', label: '名称', content: '', author: 'ddd' }]
      this.dialogFormVisible = true
    }
  },
  components: {
    Mytree,
    Dialog,
    DorpdownRight
  },
  computed: {
    ...mapGetters('tip',{
      tipProp: 'getTipProp',
      tipFlag: 'getTipFlag'
		})
  }
}
</script>
<style scoped lang="less">
.empty-wrap{
  width: 100%;
  text-align: center;
}
.empty-title{
  margin: 20% auto 0;
  color: #666;
  font-size: 14px;
}
.mytree-wrap{
  margin-top: 20px;
  margin-left: 20px;
}
.right-dropdown-tip{
  display: none;
  position: absolute;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  background: #2f8ff3;
  font-size: 14px;
  line-height: 40px;
  color: #fff;
  box-shadow: 2px 4px 10px #a6b9e6;
  -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;
  z-index:99999;
}
</style>
