<!--  -->
<template>
  <div class="ws-navbar">
    <el-row>
      <el-col :span="4">
        <div>
          <img src="@/imgs/shouye.png" />首页
        </div>        
      </el-col>
      <el-col :span="12">不好</el-col>
      <el-col :span="4">到底好不</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'Navbar',
  data () {
    return {}
  },
  created () {},
  mounted () {}
}
</script>
<style>
.ws-navbar {
  height: 80px;
  width: 100%;
  background-color: lightgreen;
}
</style>
