<template>
<span  class="right-dropdown-tip" :style="tipProp.tipPsition" >{{tipProp.tipMsg}}</span>
</template>
<script>
export default {
  name: 'tip',
  props: ['tipProp'],
}
</script>
<style scoped>
.right-dropdown-tip{
  display: inline-block;
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
