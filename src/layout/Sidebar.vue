<template>
<div class="menu">
  <el-row>
    <el-col :span="24">
      <el-menu
        :default-active="activeindex"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          v-if="!item.children"
          v-for="(item,index) in menuList"
          :key="index"
          :index="/'/+index+/'/"
          @click="handleClick(item.path,index)"
        >
          <i class="el-icon-menu"></i>
          <span>{{ item.title }}</span>
        </el-menu-item>
        <el-submenu
          v-if="item.children"
          v-for="(item,index) in menuList"
          :key="index"
          :index="/'/+index+/'/"
        >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            :index="'1'+index"
            v-for="(item,index) in item.children"
            :key="index"
            @click="handleClick(item.path,index)"
          >{{item.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeindex: '',
      menuList: [
        {
          path: '/hremp/PersonalCenter',
          title: '个人中心'
        },
        {
          path: '/all/protocol',
          title: '全局设置'
        },
        {
          title: '活动管理',
          children: [
            {
              path: '/activity_game/list_activity',
              title: '活动设置'
            },
            {
              path: '/activity_user/list_activity_baoming',
              title: '活动报名情况'
            },
            {
              path: '/activity_user/list_shenhe',
              title: '活动选拔审核'
            },
            {
              path: '/activity_jubao/list_activity_jubao',
              title: '活动举报情况'
            }
          ]
        },
        {
          title: '活动用户',
          children: [
            {
              path: '/user_activity',
              title: '活动列表'
            } ]
        }
      ],      
    }
  },
  methods: {
    handleOpen () {
      console.log('打开了')
    },
    handleClose () {
      console.log('关闭了')
    },
    handleClick (path, index) {
      this.activeindex = index.toString()
      this.$router.push(path)
    }
  },
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style lang='scss'>
  .menu{
    width: 100%;
    height: calc(100vh - 60px);
    background-color: rgb(84, 92, 100);
    .el-menu{
      overflow: hidden;
      border: 0px;
    }
  }
</style>
