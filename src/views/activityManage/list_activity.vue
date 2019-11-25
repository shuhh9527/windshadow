<template>
  <div>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple" @click="add"><i class="el-icon-plus"></i>添加</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light" @click="edit"><i class="el-icon-edit"></i>查看/编辑</div>
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
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      multipleSelection: [],
      ischose:[]
    }
  },
  mounted () {
    this.getActiveList()
    this.selectcheck()
  },
  methods: {
    selectcheck (val) {
      this.ischose=val
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    getActiveList () {
      this.$axios.post('http://wx.hjshu.net:8899/activity_game/getActivityList', {
        page: 1,
        rows: 15
      }).then(res => {
        this.tableData = res.data.rows
      })
    },
    add () {
        this.$router.push('/activityManage/addactive')
    },
    edit () {
        if(this.ischose){
        this.$router.push('/activityManage/lookactive')
        }else{
        this.$message({
          message: '请选择一条数据',
          type: 'warning'
        });
        }
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
