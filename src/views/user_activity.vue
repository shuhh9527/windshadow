<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple-dark el-icon-edit">查看详情</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-dark el-icon-search">查询</div>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" > 
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="头像" width="100">
        <template slot-scope="scope">
          <img :src="URL+scope.row.url_pic_head" alt />
        </template>
      </el-table-column>
      <el-table-column prop="region" label="所在地区" width="80"></el-table-column>
      <el-table-column prop="nickname" label="昵称" width="80"></el-table-column>
      <el-table-column prop="name_user" label="姓名" width="80"></el-table-column>
      <el-table-column prop="phone_user" label="手机号" width="150"></el-table-column>
      <!-- <el-table-column prop="gender=='0'?'男':'女'" label="性别" width="60"></el-table-column> -->
      <el-table-column label="性别" width="60">
        <template slot-scope="scope">
          <span v-if="scope.row.gender == 0">女</span>
          <span v-else>男</span>
        </template>
      </el-table-column>
      <el-table-column prop="date_birthday" label="生日" width="120"></el-table-column>
      <el-table-column prop="height" label="身高（厘米）" width="80"></el-table-column>
      <el-table-column prop="weight" label="体重（千克）" width="80"></el-table-column>
      <el-table-column prop="xiema" label="鞋码" width="80"></el-table-column>
      <el-table-column prop="xiongwei" label="胸围" width="80"></el-table-column>
      <el-table-column prop="yaowei" label="腰围" width="80"></el-table-column>
      <el-table-column prop="tunwei" label="臀围" width="80"></el-table-column>
      <el-table-column prop="idcard_user" label="身份证号" width="200"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="nowpage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="rownum"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalnum"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      tableData: [],
      URL: "https://img.xinmozp.com/",
      rownum: 5,
      totalnum: "",
      nowpage: 1
    };
  },
  mounted() {
    this.userlist();
  },
  methods: {
    userlist() {
      this.$axios
        .post("http://wx.hjshu.net:8899/user/getUserList", {
          page: this.nowpage,
          rows: this.rownum
        })
        .then(res => {
          //   console.log(res.data.rows)
          this.tableData = res.data.rows;
          this.totalnum = res.data.total;
        });
    },
    handleSizeChange(val) {
      this.nowpage = val;
      this.userlist();
    },
    handleCurrentChange(val) {
      this.nowpage = val;
      this.userlist();
    }
  }
};
</script>
<style scoped>
.el-row {
  width: 400px;
  font-size: 14px;
}
.el-table__row img {
  width: 80px;
}
</style>