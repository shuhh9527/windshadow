<template>
  <div class="login-container">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-position="left"
      label-width="0px"
      class="loginPge"
    >
      <el-form-item prop="username" class="usernameBox">
        <el-input type="text" placeholder="用户名" v-model="form.username" autocomplete="off" suffix-icon="el-icon-user-solid"></el-input>
      </el-form-item>
      <el-form-item prop="password" class="passwordBox">
        <el-input type="password" placeholder="密码" v-model="form.password" autocomplete="off" suffix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
      <el-form-item class="toLogin">
        <el-button type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  .loginPge {
    width: 580px;
    margin: 180px auto;
    border-radius: 5px;
    box-shadow: 0 0 25px #cac6c6;
    padding:30px 0
  }
  .el-form-item {
    margin-bottom: 0;
}
  .usernameBox {
    width: 300px;
    margin: 0 auto;
  }
  .passwordBox {
    width: 300px;
    margin: 0 auto;
    margin-top:10px
  }
  .rememberme{
    text-align: center;
    display: block;
    width: 200px;
    margin: 0 auto;
    margin-top:30px;
  }
  .toLogin{
    text-align: center;
    padding: 10px 0 0;
      .el-button{
      width: 300px
  }
  }

}
</style>>
<script>
export default {
  data() {
    return {
      form:{
      username: "",
      password: ""
      },
    checked:false
    };
  },
  mounted(){
    var user = JSON.parse(localStorage.getItem("userInfo"))
    if(user){
      this.form.username=user.username
      this.form.password=user.password
    }
  },
  methods:{
    submit(){
      if(this.form.username==""&&this.form.password==""){
        this.$message.error("账号或密码不能为空")
      }else if(this.form.username=="admin"&&this.form.password=="123"){
      this.$router.push("/abc")
      if(this.checked){
        var obj={"username":this.form.username,"password":this.form.password}
        localStorage.setItem("userInfo",JSON.stringify(obj))
      }
    }else{
      this.$message.error("账号或密码不正确")
    }
    }
  }
};
</script>
