<template>
<div class="dashboard">
  <el-container>
    <el-header>
      <Navbar></Navbar>
    </el-header>
  </el-container>
    <el-container>
      <el-aside style="width:200px">
        <Sidebar></Sidebar>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    </div>
</template>
<script>
// import WsMenu from "./WsMenu"
import Navbar from '@/layout/Navbar'
import Sidebar from '@/layout/Sidebar'

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    Navbar
  },
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    this.$router.push('/dashboard')
  },
  methods: {

  }
}
</script>
<style lang='scss'>
  body{
    margin: 0px;
    padding: 0px;
  }
  .dashboard{
    height: 60px;
    width: 100%;
    .el-header{
      padding: 0px;
    }
    .el-main{
      padding: 0px;
    }
  }
</style>
