<template>
  <div>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple" @click="add">
          <i class="el-icon-plus"></i>添加
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light">
          <i class="el-icon-search"></i>查询
        </div>
      </el-col>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @select="selectcheck"
      @select-all="selectcheck"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="uuid" label="活动编号" width="190"></el-table-column>
      <el-table-column prop="category_activity" label="活动类型" width="100"></el-table-column>
      <el-table-column prop="time_from_baoming" label="报名开始时间" width="150"></el-table-column>
      <el-table-column prop="time_to_baoming" label="报名截止时间" width="150"></el-table-column>
      <el-table-column prop="time_from_xuanba" label="选拔开始时间" width="150"></el-table-column>
      <el-table-column prop="time_to_xuanba" label="选拔截止时间" width="150"></el-table-column>
      <el-table-column prop="count_max" label="报名人数上限" width="120"></el-table-column>
      <el-table-column prop="desc_activity" label="说明" width="190"></el-table-column>
      <el-table-column label="操作" width="190">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="Delete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      ischose: []
    };
  },
  mounted() {
    this.getActiveList();
    this.selectcheck();
  },
  methods: {
    selectcheck(val) {
      this.ischose = val;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getActiveList() {
      this.$axios
        .post('http://wx.hjshu.net:8899/activity_game/getActivityList', {
          page: 1,
          rows: 15
        })
        .then(res => {
          this.tableData = res.data.rows;
        });
    },
    add(){},
    Delete(index,row) {
     this.tableData.splice(index,1)
    },
    edit(index,row) {
      this.$router.push({path:'/activityManage/lookactive',query:{activity_uuid:row.uuid,activity_topic:row.desc_activity,maxnum:row.count_max}});     
    }
  }
};
</script>
<style scoped>
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 35px;
}
.el-col i {
  color: darkgreen;
  font-weight: bold;
  padding: 0 5px;
}
</style>
