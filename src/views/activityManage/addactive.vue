<template>
  <div>
    <el-row class="buttonwidth">
      <el-button type="info" plain @click="cancle">
        <i class="el-icon-close"></i>取消
      </el-button>
      <el-button type="info" plain>
        <i class="el-icon-folder-checked"></i>保存
      </el-button>
    </el-row>
    <el-form ref="form" :model="form" label-width="80px" class="formwidth">
      <el-form-item label="活动主题" class="inputwidth">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动类型" class="inputwidth">
        <el-select v-model="form.region" placeholder="请选择活动类型">
          <el-option label="常规活动" value="shanghai"></el-option>
          <el-option label="非常规活动" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region:""
      }
    };
  },
  methods:{
      cancle () {
          this.$router.go(-1)
      }
  }
};
</script>
<style scoped>
.buttonwidth {
  text-align: left;
}
.formwidth{
   text-align: left;
}
.formwidth el-input {
  width: 100px;

}
.inputwidth {
 text-align: left;
  display: inline-block;
  width: 238px;
}
</style>