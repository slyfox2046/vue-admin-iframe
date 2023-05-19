<template>
  <div id="test">
    <div class="title">
      测试一下enum的用法
    </div>
    <div>
      {{ $enum.getValueDescList('ROLE_NUM') }} <br>
      {{ $enum.getDescByValue('ROLE_NUM',1) }} <br>
      {{ $enum.getValueDesc('ROLE_NUM') }} <br>
    </div>

    <el-descriptions title="用户信息">
      <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: 'StorageTest',
  data() {
    return {
      name: '',
      userInfo: ''
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.title{
  line-height:50px;
  color:cornflowerblue
}
.mb{
  margin-bottom: 10px;
}
</style>
