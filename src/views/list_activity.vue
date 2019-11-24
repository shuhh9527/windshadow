<template>
  <div>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple"><i class="el-icon-plus"></i>添加</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light"><i class="el-icon-edit"></i>查看/编辑</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple"><i class="el-icon-minus"></i>删除</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light"><i class="el-icon-search"></i>查询</div>
      </el-col>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
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
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      multipleSelection: []
    }
  },
  created () {
    this.getActiveList()
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    getActiveList () {
      this.$axios.post('/activity_game/getActivityList', {
        page: 1,
        rows: 15
      }).then(res => {
        this.tableData = res.data.rows
      })
    }
  }
}
</script>
<style scoped>
.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 35px;
}
.el-col i{
    color: darkgreen;
    font-weight: bold;
    padding:0 5px
}
</style>
