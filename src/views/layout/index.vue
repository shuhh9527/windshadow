<template>
  <el-container>
    <el-header>
      <el-row class="headerline">
        <el-col :span="6">
          <div class="grid-content sy">
            <img src="@/imgs/shouye.png" />首页
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content fontstyle">后台管理系统</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content sy">
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
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col :span="24">
            <el-menu
              :default-active="activeindex"
              class="el-menu-vertical-demo"
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
              >
                <i class="el-icon-menu"></i>
                <span @click="handleClick(item.path,index)">{{ item.title }}</span>
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
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import WsMenu from "./WsMenu";
import WsNavbar from "./WsNavbar";
export default {
  data() {
    return {
      value: "",
      activeindex: "",
      menuList: [
        {
          path: "/hremp/PersonalCenter",
          title: "个人中心"
        },
        {
          path: "/all/protocol",
          title: "全局设置"
        },
        {
          title: "活动管理",
          children: [
            {
              path: "/activity_game/list_activity",
              title: "活动设置"
            },
            {
              path: "/activity_user/list_activity_baoming",
              title: "活动报名情况"
            },
            {
              path: "/activity_user/list_shenhe",
              title: "活动选拔审核"
            },
            {
              path: "/activity_jubao/list_activity_jubao",
              title: "活动举报情况"
            }
          ]
        },
        {
          title: "活动用户",
          children: [
            {
              path: "/user_activity",
              title: "活动列表"
            } ]
        }
      ],
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
    };
  },
  name: "dashboard",
  components: {
    WsMenu,
    WsNavbar
  },
  mounted() {
    this.$router.push("/dashboard");
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    handleClick(path, index) {
      this.activeindex = index.toString();
      this.$router.push(path);
    }
  }
};
</script>
<style>
.sy img {
  width: 50px;
  vertical-align: middle;
}
.headerline,
.sy {
  height: 60px;
  line-height: 60px;
  color: #fff;
}
.fontstyle {
  font-size: 22px;
}
.el-header {
  background-color: #0474b3;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 60px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-submenu .el-menu-item {
  height: 50px;
  line-height: 50px;
  padding: 0 45px;
  /* min-width: 198px; */
}
.el-menu {
  min-height: 500px;
}
</style>
