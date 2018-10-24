<template>
<div class="my-dialog">
  <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" width="500px">
    <el-form :model="form">
        <el-form-item v-for="(item, index) in formData" :key="index" :label="item.label" :label-width="formLabelWidth" >
          <!-- 文本框 -->
          <el-input size="small" v-if="item.type=='text'" v-model="item.content" autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
      <el-button type="primary"  @click="submitFun" size="small">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>
<script>
export default {
  name: 'Home',
  props: ['dialogProp','formData','dialogTitle'],
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '40px',
    }
  },
  methods: {
    submitFun () {
      this.dialogFormVisible = false
    }
  },
  computed: {
    dialogFormVisible: {
      get () {
        return this.dialogProp
      },
      set (val) {
        this.$emit('update:dialogProp', val)
      }
    }
  }
}
</script>
<style lang="less">
.my-dialog{
  .el-dialog__title{
    line-height: 14px;
    font-size: 14px;
  }
  .el-dialog__body {
    padding: 20px;
    color: #5c7099;
    font-size: 12px;
}
}
</style>
