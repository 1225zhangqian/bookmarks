<template>
<span @click.prevent.right="openDropdownRight($event,'ddd')">
  <el-tree
    :data="data6"
    node-key="id"
    default-expand-all
    @node-drag-start="handleDragStart"
    @node-drag-enter="handleDragEnter"
    @node-drag-leave="handleDragLeave"
    @node-drag-over="handleDragOver"
    @node-drag-end="handleDragEnd"
    @node-drop="handleDrop"
    draggable
    :allow-drop="allowDrop"
    :allow-drag="allowDrag"
    @node-click="closeDropdownRight">
  </el-tree>
  <!-- 右键菜单 -->
  <DorpdownRight v-if="dropdownVisible" v-bind="dropdownProp" @dropdownRightClick="dropdownRightClick"/>
</span>
</template>
<script>
import DorpdownRight from './dorpdownRight.vue'
export default {
  name: 'Home',
  data () {
    return {
      dropdownVisible: '',
      dropdownProp: {},
      data6: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2',
          children: [{
            id: 11,
            label: '三级 3-2-1'
          }, {
            id: 12,
            label: '三级 3-2-2'
          }, {
            id: 13,
            label: '三级 3-2-3'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleDragStart (node, ev) {
      console.log('drag start', node)
    },
    handleDragEnter (draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label)
    },
    handleDragLeave (draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label)
    },
    handleDragOver (draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label)
    },
    handleDragEnd (draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType)
    },
    handleDrop (draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType)
    },
    allowDrop (draggingNode, dropNode, type) {
      if (dropNode.data.label === '二级 3-1') {
        return type !== 'inner'
      } else {
        return true
      }
    },
    allowDrag (draggingNode) {
      return draggingNode.data.label.indexOf('三级 3-2-2') === -1
    },
    // 邮件打开菜单
    openDropdownRight (event) {
      this.dropdownVisible = false
      this.dropdownProp.eventTarget = event
      this.dropdownProp.dropdownMenuData = [{name:'重命名'},{name:'删除'}]
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
      this.formData = val==="添加新书签" ? this.formData : [{ type: 'text', label: '名称', content: '', author: 'ddd' }]
      this.dialogFormVisible = true
    }
  },
  components: {
    DorpdownRight
  }
}
</script>
