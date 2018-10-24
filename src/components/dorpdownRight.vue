<template>
  <ul class="right-dropdown-menu" :style="dropdownPosition">
    <li v-for="(item, index) in dropdownMenuData" :key="index" v-html="item.name" @click="clickFun">{{item.name}}</li>
  </ul>
</template>
<script>
export default {
  name: 'Home',
  props: ['eventTarget','dropdownMenuData'],
  data () {
    return {
    }
  },
  methods: {
    clickFun (e) {
      this.$emit('dropdownRightClick',e.target.innerText)
    }
  },
  computed: {
    dropdownPosition () {
      return { left: this.eventTarget.clientX + 'px', top: this.eventTarget.clientY + 'px'}
    }
  }
}
</script>
<style scoped lang="less">
.right-dropdown-menu{
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  margin: 5px 0;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  background: #fff;
  li{
    list-style: none;
    line-height: 36px;
    padding: 0 20px;
    margin: 0;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: 0; 
  }
  li:hover{
    background-color: #ecf5ff;
    color: #66b1ff;
  }
}
</style>
