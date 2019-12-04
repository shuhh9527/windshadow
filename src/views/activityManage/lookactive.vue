<template>
  <div class="watchactivity">
    <el-row class="buttonwidth">
      <el-button type="info" plain @click="cancle">
        <i class="el-icon-back"></i>返回
      </el-button>
      <el-button type="info" plain>
        <i class="el-icon-folder-checked"></i>保存
      </el-button>
      <el-button type="info" plain>
        <i class="el-icon-upload2"></i>上传图片
      </el-button>
    </el-row>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="活动编号" class="activenumber">
        <el-input v-model="this.$route.query.activity_uuid"></el-input>
      </el-form-item>
      <el-form-item label="活动类型" class="activenumber">
        <el-input value="常规活动"></el-input>
      </el-form-item>
      <el-form-item label="活动主题" class="activenumber">
        <el-input v-model="this.$route.query.activity_topic"></el-input>
      </el-form-item>
       <el-form-item label="报名人数上限" class="activenumber">
        <el-input v-model="this.$route.query.maxnum"></el-input>
      </el-form-item>
      <el-form-item label="报名时间">
        <el-col :span="11">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
        </el-col>
      </el-form-item>
        <el-form-item label="选拔时间">
        <el-col :span="11">
            <el-date-picker
              v-model="value2"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
        </el-col>
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
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''

    };
  },
  methods: {
    cancle() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped lang="scss">
.watchactivity {
  color: #fff;
  .el-form-item {
    display: inline-block;
  }
  .buttonwidth {
    text-align: left;
  }
  .formwidth {
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
  .el-form {
    text-align: left;
  }
  .activenumber {
    width: 40%;
  }
}
</style>