<!--  -->
<template>
  <div class="navbar">
    <el-row>
      <el-col :span="5">
        <div class="logo">
          <img src="@/imgs/shouye.png" />
          <span>首页</span>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="title">{{ title }}</div>
      </el-col>
      <el-col :span="5">
        <div class='info'>
            <img src="@/imgs/touxiang.png" />
            <el-select v-model="value" placeholder="系统管理员">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
        </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      value: "",
      title: '资源管理系统',
      options: [
        {
          value: "选项2",
          label: "修改密码"
        },
        {
          value: "选项3",
          label: "技术支持"
        },
        {
          value: "选项4",
          label: "退出登录"
        }
      ]     
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang='scss' >
.navbar {
  height: 60px;
  width: 100%;
  background-color: lightgreen;
  overflow: hidden;
  .el-col{
    margin: 0px;
    padding:0px;
    height: 60px;
    line-height:60px;
    .logo{
      display: flex;
      span{
        margin-left: 10px;
      }
    }
    .title{
      text-align: center;
    }
    .info{
      display: flex;
      float: right;

      .el-select{
        width: 60%;
      }
    }
    img{ // navbar上图片样式
      width: 48px;
      height: 48px;
      margin-top:6px;
    }    
  }
}
</style>
